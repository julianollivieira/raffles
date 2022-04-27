use axum::{routing::post, Extension, Json, Router};
use serde::{Deserialize, Serialize};

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
    Json(req): Json<UserBody<CreateAccountRequest>>,
) -> Json<UserBody<String>> {
    let new_user = User::new();
}

async fn sign_in(
    ctx: Extension<ApiContext>,
    Json(req): Json<UserBody<SignInRequest>>,
) -> Json<UserBody<String>> {
    //
}
