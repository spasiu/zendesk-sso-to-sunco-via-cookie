# zendesk-sso-to-sunco-via-cookie

This project demonstrates an integration between Zendesk's authentication mechanism and Sunco, utilizing Express.js to facilitate JWT-based single sign-on (SSO). It provides a simple server setup to generate tokens required for authenticating a demo user and redirects to an authenticated web chat interface.

## Prerequisites

- Node.js installed on your machine.
- An active Zendesk account with a configured subdomain.
- Sunco account credentials including the key ID and secret.
- A shared SSO secret for JWT token signing.

## Configuration

Before running the server, you must fill in the configuration variables in the script:

- `ZENDESK_SUBDOMAIN`: Your Zendesk subdomain.
- `SUNCO_KEY_ID`: The Key ID obtained from Sunco.
- `SUNCO_KEY_SECRET`: The Secret Key from Sunco.
- `SUNCO_INTEGRATION_ID`: The integration ID provided by Sunco.
- `SHARED_SSO_SECRET`: The secret key shared between your server and Zendesk for SSO.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the dependencies.

## Running the Server

Execute the following command in the project directory:

```
node server.js
```

This will start the server on `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000/`.
2. The server will automatically redirect you to an authenticated web chat interface at `http://localhost:3000/hello` after the authentication process completes.

## Endpoints

- `/config`: Returns the Sunco integration ID.
- `/token`: Generates and returns the SSO and Sunco tokens needed for authentication, along with URLs for submission and redirection.

## Notes

- Ensure that all configuration variables are set correctly before starting the server.
- The demo user data used in `/token` endpoint is hardcoded for demonstration purposes. In a production environment, you should replace this with dynamic user data.
