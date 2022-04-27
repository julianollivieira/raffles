CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT uuid_generate_v1mc(),
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password_hash" VARCHAR(255) NOT NULL,
    "password_salt" BYTEA NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);