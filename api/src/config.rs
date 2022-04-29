use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct Config {
    pub pg_max_connections: u32,
    pub database_url: String,
    pub app_url: String,
    pub api_port: u16,
}
