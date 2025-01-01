
# Chat Application

This repository contains a real-time Chat Application developed using Go for the backend and ReactJS for the frontend. The application leverages WebSocket for real-time communication and is containerized and deployed via Docker.

---

## Features

- **Real-time Messaging**: Seamless communication using WebSocket.
- **User-Friendly Interface**: Interactive and responsive UI built with ReactJS.
- **Scalable Backend**: Go-powered server ensuring high performance.
- **Cross-Platform**: Fully containerized using Docker for consistent deployments.
- **Lightweight**: Optimized for speed and efficiency.

---

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Go (Golang)
- **Real-time Communication**: WebSocket
- **Containerization**: Docker

---

## Prerequisites

Make sure you have the following installed:

- [Go](https://golang.org/dl/)
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/products/docker-desktop)

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/Ankityadhuvansi/Chat-App.git
```

This repository contains the backend and frontend components of a real-time Chat Application. Below are separate setup instructions for both components.

---

## Backend Setup

This is the backend of the Chat Application, built using Go (Golang) to provide real-time messaging functionality through WebSocket.

### Features

- **WebSocket**: Enables real-time communication.
- **Scalability**: Lightweight and efficient backend server.
- **Ease of Deployment**: Dockerized for seamless setup.

### Prerequisites

Make sure you have the following installed:

- [Go](https://golang.org/dl/) (1.18 or higher)
- [Docker](https://www.docker.com/products/docker-desktop) (optional for containerization)

### Local Setup

#### Step 1: Navigate to the Backend Directory

```bash
cd Chat-App/backend
```

#### Step 2: Install Dependencies

```bash
go mod tidy
```

#### Step 3: Start the Backend Server

```bash
go run main.go
```

By default, the backend server runs on `http://localhost:8080`.

---

### Using Docker for Backend

#### Step 1: Build the Docker Image

```bash
docker build -t backend .
```

#### Step 2: Run the Docker Container

```bash
docker run -d -p 8080:8080 backend
```

---

### Folder Structure for Backend

```plaintext
backend/
├── main.go         # Entry point of the application
├── handlers/       # WebSocket and HTTP handlers
├── models/         # Data models used in the application
├── go.mod          # Dependency configuration
└── Dockerfile      # Dockerfile for backend
```

### Backend Environment Variables

| Variable  | Description                 | Default Value |
|-----------|-----------------------------|---------------|
| `PORT`    | Port for the backend server | `8080`        |

---

## Frontend Setup

This is the frontend of the Chat Application, developed using ReactJS to provide an intuitive and responsive user interface.

### Features

- **Real-Time Messaging**: Integration with WebSocket for instant communication.
- **Responsive Design**: Works across devices.
- **Containerized Deployment**: Dockerized for easy setup.

---

### Local Setup

#### Step 1: Navigate to the Frontend Directory

```bash
cd Chat-App/frontend
```

#### Step 2: Install Dependencies

```bash
npm install
```

#### Step 3: Start the Frontend Server

```bash
npm start
```

The frontend server will start on `http://localhost:3000`.

---

### Using Docker for Frontend

#### Step 1: Build the Docker Image

```bash
docker build -t frontend .
```

#### Step 2: Run the Docker Container

```bash
docker run -d -p 3000:3000 frontend
```

---

### Folder Structure for Frontend

```plaintext
frontend/
├── src/
│   ├── components/    # React components
│   ├── pages/         # Application pages
│   ├── App.js         # Main application component
│   └── index.js       # Entry point for React
├── public/            # Static assets
├── package.json       # Dependency configuration
└── Dockerfile         # Dockerfile for frontend
```

### Frontend Environment Variables

| Variable        | Description            | Default Value        |
|-----------------|------------------------|----------------------|
| `REACT_APP_API` | URL of the backend API | `http://localhost:8080` |

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add new feature'`.
4. Push the branch: `git push origin feature-name`.
5. Open a Pull Request.

---

## License

