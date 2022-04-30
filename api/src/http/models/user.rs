use anyhow::{anyhow, Context, Result};
use argon2::{password_hash::SaltString, Argon2, PasswordHash};
use axum::extract::Extension;
use chrono::NaiveDateTime;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::http::ApiContext;

#[derive(Serialize, Deserialize, Debug)]
pub struct User {
    pub id: Uuid,
    pub email: String,
    pub password_hash: String,
    pub password_salt: Vec<u8>,
    pub created_at: NaiveDateTime,
}

impl User {
    pub async fn new(
        ctx: Extension<ApiContext>,
        email: String,
        password: String,
    ) -> Result<User, sqlx::Error> {
        let (hash, salt) = hash_password(password).await.unwrap();
        sqlx::query_as!(User,
            "INSERT INTO users (email, password_hash, password_salt) VALUES ($1, $2, $3) RETURNING *",
            email,
            hash,
            salt.as_bytes()
        ).fetch_one(&ctx.pool).await
    }
    pub async fn get_by_email(
        ctx: Extension<ApiContext>,
        email: String,
    ) -> Result<User, sqlx::Error> {
        sqlx::query_as!(User, "SELECT * FROM users WHERE email = $1", email)
            .fetch_one(&ctx.pool)
            .await
    }
}

async fn hash_password(password: String) -> Result<(String, SaltString)> {
    Ok(
        tokio::task::spawn_blocking(move || -> Result<(String, SaltString)> {
            let salt = SaltString::generate(rand::thread_rng());
            let hash = PasswordHash::generate(Argon2::default(), password, salt.as_str())
                .map_err(|e| anyhow!("Failed to hash password: {}", e))?
                .to_string();
            Ok((hash, salt))
        })
        .await
        .context("Panic while trying to hash password")??,
    )
}
