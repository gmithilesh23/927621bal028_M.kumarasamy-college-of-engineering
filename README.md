# Average Calculator

This is a simple React application that fetches numbers from an API, calculates their average, and displays various states of a window.

## Features

- Fetches numbers from an API based on a qualified ID
- Displays the previous and current state of the window
- Calculates and displays the average of fetched numbers
- Error handling for API requests

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/average-calculator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd average-calculator
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Configuration

Ensure you have configured your proxy and API token correctly.

- Proxy: Defined in `src/setupProxy.js` to forward API requests to `http://20.244.56.144`.
- API Token: Update the `accessToken` variable in `src/App.js` with your actual API token.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.

## Code Overview

### App Component

The `App` component is the main component of the application. It:

- Initializes state variables `qualifiedId`, `result`, and `error`.
- Fetches data from the API when the component mounts and when the user requests it.
- Renders the input field, fetch button, and results.

### Proxy Middleware

The proxy middleware is set up to forward requests from `/api` to `http://20.244.56.144/test/rand`.

### API Request

The `fetchData` function makes an API request to fetch numbers based on the `qualifiedId` and sets the result or error state based on the response.

## Example Output

When the user inputs a `qualifiedId` and clicks the "Fetch Numbers" button, the application fetches the numbers from the API and displays:

- Previous state of the window
- Current state of the window
- Fetched numbers
- Calculated average of the numbers
