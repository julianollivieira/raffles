use axum::{routing::post, Extension, Json, Router};
use serde::{Deserialize, Serialize};
use sqlx::Error;

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
    Ok(match result {
        Ok(user) => Json(UserBody { user }),
        Err(e) => match e {
            Error::Database(dbe) => match dbe.code().unwrap().as_ref() {
                "23505" => Err((404, "tst_errr".to_string())),
                _ => todo!(),
            },
            _ => todo!(),
        },
    })

    // match result {
    //     Ok(user) => Json(UserBody { user }),
    //     Err(error) => match error {
    //         Error::Database(database_error) => {
    //             if database_error.code().unwrap().as_ref() == "23505" {
    //                 //
    //             };
    //             todo!()
    //             // if database_error.code().as_ref() == "23505" {
    //             //     //
    //             // }
    //             //     //
    //             // }
    //         }
    //         _ => todo!(),
    //     },
    //     _ => todo!(),
    // }
    // match result {
    //     Ok(user) => Json(UserBody { user }),
    //     Error(error) =>
    // }

    // result.on_database_error("23505", |e| {
    //     //
    // });

    // match result {
    //     Ok(user) => Json(UserBody { user }),
    //     Err(error) => match error {
    //         Error::Database(dbe) => {
    //             let a = dbe.code().unwrap();
    //             let b = a.as_ref();
    //             match b {
    //                 "23505" => match dbe.constraint() {
    //                     Some("users_email_key") => {
    //                         println!("USER WITH EMAIL ALREADY EXISTS");
    //                     }
    //                     _ => todo!(),
    //                 },
    //                 _ => todo!(),
    //             };
    //             println!("dbe: {:?}", dbe);
    //             todo!();
    //         }
    //         _ => todo!(),
    //     },
    // }
}

async fn sign_in(
    ctx: Extension<ApiContext>,
    Json(req): Json<SignInRequest>,
) -> Json<UserBody<User>> {
    let result = User::get_by_email(ctx, req.email).await;
    match result {
        Ok(user) => Json(UserBody { user }),
        Err(error) => match error {
            Error::Database(dbe) => {
                // println!("DBE!! :) == {:?}", dbe);
                println!("constraint: {:?}", dbe.constraint());
                todo!();
            }
            _ => todo!(),
        },
    }
}
