
# AI-Powered Decentralized Content Moderation System

## Overview
This project combines blockchain technology and AI to create a decentralized content moderation system. It leverages Ethereum for decentralized record keeping and TensorFlow for AI-based content moderation.

## Components
1. **Smart Contract (Solidity)**: Handles the recording and moderation of content reports.
2. **AI Model (TensorFlow/Python)**: Detects inappropriate content.
3. **Backend (Node.js/Express.js)**: Connects the blockchain with the frontend.
4. **Frontend (React.js)**: Allows users to report and moderate content.

## Setup

### Prerequisites
- Node.js
- Truffle
- Ganache
- Python
- TensorFlow

### Steps

1. **Clone the repository**:
    ```sh
    git clone <repo-url>
    cd AI-Powered-Decentralized-Content-Modenration-System
    ```

2. **Install dependencies**:
    - Backend:
      ```sh
      cd backend
      npm install
      ```
    - Frontend:
      ```sh
      cd frontend
      npm install
      ```

3. **Compile and deploy the smart contract**:
    ```sh
    truffle compile
    truffle migrate
    ```

4. **Run the backend server**:
    ```sh
    cd backend
    node server.js
    ```

5. **Train the AI model**:
    ```sh
    cd ai_model
    python train_model.py
    ```

6. **Run the frontend**:
    ```sh
    cd frontend
    npm start
    ```

## Usage
- Use the frontend to report content and moderate reported content.
- The backend connects the frontend with the blockchain and handles requests.
- The AI model automatically detects inappropriate content.

## License
This project is licensed under the MIT License.
