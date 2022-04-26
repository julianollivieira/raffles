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

    // First we create a connection uri to connect to the database.
    let connection_uri = format!(
        "postgres://{}:{}@db:{}/{}",
        config.pg_user, config.pg_password, config.pg_port, config.pg_database
    );

    // Then we create a connection pool for SQLx that's shared across the whole application.
    let pool = PgPoolOptions::new()
        .max_connections(config.pg_max_connections)
        .connect(&connection_uri)
        .await
        .context("Failed to connect to the database")?;

    // TODO: Migrations

    // Spin up the API.
    http::serve(config, pool).await?;

    Ok(())
}
