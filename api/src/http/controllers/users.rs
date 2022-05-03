use axum::{routing::post, Extension, Json, Router};
use serde::{Deserialize, Serialize};
use sqlx::Error as SQLxError;

use crate::http::error::AuthenticationError::{EmailAlreadyInUse, WrongCredentials};
use crate::http::error::Error;
use crate::http::error::GeneralError::SomethingWentWrong;
use crate::http::models::User;
use crate::http::ApiContext;

/// A wrapper type for all requests/responses from these routes.
#[derive(Serialize, Deserialize)]
struct UserBody<T> {
    user: T,
}

#[derive(Deserialize)]
struct CreateAccountRequest {
    email: String,
    password: String,
}

#[derive(Deserialize)]
struct SignInRequest {
    email: String,
    password: String,
}

pub fn router() -> Router {
    // By having each module responsible for setting up its own routing,
    // it makes the root module a lot cleaner.
    Router::new()
        .route("/create-account", post(create_account))
        .route("/sign-in", post(sign_in))
}

async fn create_account(
    ctx: Extension<ApiContext>,
    Json(req): Json<CreateAccountRequest>,
) -> Result<Json<UserBody<User>>, Error> {
    let result = User::new(ctx, req.email, req.password).await;
    match result {
        Ok(user) => Ok(Json(UserBody { user })),
        Err(e) => match e {
            SQLxError::Database(dbe) => match dbe.code().unwrap().as_ref() {
                "23505" => Err(Error::Authentication(EmailAlreadyInUse)),
                _ => Err(Error::General(SomethingWentWrong)),
            },
            _ => Err(Error::General(SomethingWentWrong)),
        },
    }
}

async fn sign_in(
    ctx: Extension<ApiContext>,
    Json(req): Json<SignInRequest>,
) -> Result<Json<UserBody<User>>, Error> {
    let result = User::get_by_email(ctx, req.email).await;
    match result {
        Ok(user) => Ok(Json(UserBody { user })),
        Err(e) => {
            // TODO: Check if results are empty -> invalid credentials
            // TODO: If not, SomethingWentWrong
            // TODO: After that check if password is correct
            todo!()
        }
    }
}
