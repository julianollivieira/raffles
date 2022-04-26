use crate::config::Config;
use anyhow::{Context, Result};
use axum::http::{HeaderValue, Method};
use axum::{Extension, Router, Server};
use sqlx::PgPool;
use std::sync::Arc;
use tower::ServiceBuilder;
use tower_http::{cors::CorsLayer, trace::TraceLayer};

mod controllers;

#[derive(Clone)]
struct ApiContext {
    config: Arc<Config>,
    pool: PgPool,
}

pub async fn serve(config: Config, pool: PgPool) -> Result<()> {
    // Combine 0.0.0.0 with the port from the config to create a socket_addr to bind the api to.
    let socket_addr = format!("0.0.0.0:{}", config.api_port);

    // Parse app_url from the config into a HeaderValue.
    let allow_from = config
        .app_url
        .parse::<HeaderValue>()
        .context("CORS error, can't parse APP_URL")?;

    // Create state for our API.
    let api_context = ApiContext {
        config: Arc::new(config),
        pool,
    };

    // Share the context across all routes, log requests and configure CORS.
    let app = router().layer(
        ServiceBuilder::new()
            .layer(Extension(api_context))
            .layer(TraceLayer::new_for_http())
            .layer(
                CorsLayer::new()
                    .allow_origin(allow_from)
                    .allow_methods(vec![Method::POST, Method::OPTIONS]),
            ),
    );

    // Bind the server to the configured port.
    Server::bind(&socket_addr.parse()?)
        .serve(app.into_make_service())
        .await
        .context("Could not bind to socket")?;

    Ok(())
}

fn router() -> Router {
    // controllers::users::router().merge(controllers::raffles::router())
    controllers::users::router()
}
