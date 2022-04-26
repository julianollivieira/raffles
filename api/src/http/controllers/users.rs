use axum::{routing::post, Router};

pub fn router() -> Router {
    // By having each module responsible for setting up its own routing,
    // it makes the root module a lot cleaner.
    Router::new().route("/login", post(login_user))
}

async fn login_user() {
    //
}
