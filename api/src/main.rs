use anyhow::{Context, Result};
use api::{config::Config, http};
use sqlx::postgres::PgPoolOptions;

#[tokio::main]
async fn main() -> Result<()> {
    // Parse configuration from the environment.
    dotenv::dotenv().context("Failed to read .env file")?;
    let config = envy::from_env::<Config>().context("Failed to parse config")?;

    // Initialize the logger.
    env_logger::init();

    // Then we create a connection pool for SQLx that's shared across the whole application.
    let pool = PgPoolOptions::new()
        .max_connections(config.pg_max_connections)
        .connect(&config.database_url)
        .await
        .context("Failed to connect to the database")?;

    // TODO: Migrations

    // Spin up the API.
    http::serve(config, pool).await?;

    Ok(())
}
