# URL Shortener Backend

This is the backend repository for the URL Shortener Web App. This service handles the URL shortening, captures the IP address and location of users accessing the shortened links, and integrates tracking functionalities for Meta (Facebook) and Google Analytics.

## Features

1. **URL Shortening**: Shortens long URLs and generates a unique ID for each shortened URL.
2. **IP Address and Location Detection**: Captures the IP address and determines the location of users accessing the shortened links.
3. **Tracking Integration**: Supports tracking with Meta (Facebook) tracking ID and Google Analytics tracking ID.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    https://github.com/Uriyo/urlShortener.git
    cd url-shortener-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory with the following content:
    ```env
    MONGODB_URI=your-mongodb-uri
    PORT=8000
    ```

4. **Start the server**:
    ```bash
    npm start
    ```

## API Endpoints

### Shorten URL

- **POST /url/**
    - Request body: `{ "url": "https://example.com" }`
    - Response: `{ "id": "shortenedId" }`

### Get Analytics

- **GET /analytics/:shortId**
    - Response: 
    ```json
    {
        "totalClicks": 1,
        "analytics": [
            {
                "timestamp": 1715637706613,
                "_id": "66428dcac7bf53b92efc7244"
            }
        ]
    }
    ```

## Deployment

### Deploying to Render

1. **Create an account on Render**.
2. **Create a new Web Service** and connect it to your GitHub repository.
3. **Set up environment variables** in the Render dashboard.
4. **Deploy the service**.

## Learning Experience

This project provided a great opportunity to deepen my understanding of building backend services, handling IP and location detection, and integrating tracking functionalities.

## Contributing

If you have any suggestions or improvements, feel free to open an issue or create a pull request.


