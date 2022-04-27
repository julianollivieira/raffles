use anyhow::Result;
use serde::{Deserialize, Serialize};
use sqlx::types::Uuid;

use crate::http::ApiContext;

#[derive(Serialize, Deserialize)]
pub struct User {
    // pub id: Uuid,
    pub email: String,
    pub password_hash: String,
    pub password_salt: Vec<u8>,
    // pub created_at: NaiveDateTime,
}

impl User {
    pub async fn new(ctx: ApiContext, email: String, password: String) -> Result<User> {
        Ok(sqlx::query!(
            "INSERT INTO users (email, password_hash, password_salt) VALUES ($1, $2, $3) RETURNING *",
            email,
            password_hash,
            password_salt
        ).fetch_one(&ctx.pool).await?)
    }
}

async fn hash_password(password: String) -> Result<([u8; 16], String)> {
    Ok(tokio::task::spawn_blocking(
        move || -> Result<([u8; 16], String)> {
            //
        },
    ))
}
