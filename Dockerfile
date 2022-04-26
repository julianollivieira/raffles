FROM ubuntu:21.10
WORKDIR /home/apps

# Install some required packages
RUN apt-get update
RUN apt-get -y install curl
RUN apt-get -y install build-essential curl


# Install Node.js and Yarn
RUN curl -sL https://deb.nodesource.com/setup_17.x  | bash -
RUN apt-get -y install nodejs
RUN npm install --global yarn

# Install Rust, Cargo and Cargo-watch
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
RUN cargo install cargo-watch

# Install Node.js dependencies and run the web server
WORKDIR /home/apps/web
CMD ["yarn", "dev"]