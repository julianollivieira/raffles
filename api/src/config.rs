use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct Config {
    pub pg_user: String,
    pub pg_password: String,
    pub pg_database: String,
    pub pg_port: u16,
    pub pg_max_connections: u32,
    // pub api_url: String,
    pub app_url: String,
    pub api_port: u16,
    // pub app_port: u16,
}
