use axum::http::StatusCode;
use axum::response::{IntoResponse, Response};
use axum::Json;
use serde_json::json;

#[derive(thiserror::Error, Debug)]
#[error("...")]
pub enum Error {
    #[error("{0}")]
    Authentication(#[from] AuthenticationError),
    #[error("{0}")]
    General(#[from] GeneralError),
}

impl Error {
    fn get_codes(&self) -> (StatusCode, u16) {
        match *self {
            // 4xx Client errors
            Error::Authentication(AuthenticationError::WrongCredentials) => {
                (StatusCode::UNAUTHORIZED, 1)
            }
            Error::Authentication(AuthenticationError::EmailAlreadyInUse) => {
                (StatusCode::CONFLICT, 2)
            }
            // 5xx Server errors
            Error::General(GeneralError::SomethingWentWrong) => {
                (StatusCode::INTERNAL_SERVER_ERROR, 3)
            }
        }
    }
}

impl IntoResponse for Error {
    fn into_response(self) -> Response {
        let (status_code, code) = self.get_codes();
        let message = self.to_string();
        let body = Json(json!({ "code": code, "message": message }));

        (status_code, body).into_response()
    }
}

#[derive(thiserror::Error, Debug)]
#[error("...")]
pub enum GeneralError {
    #[error("Something went wrong")]
    SomethingWentWrong,
}

#[derive(thiserror::Error, Debug)]
#[error("...")]
pub enum AuthenticationError {
    #[error("Email already in use")]
    EmailAlreadyInUse,
    #[error("Wrong credentials")]
    WrongCredentials,
}
