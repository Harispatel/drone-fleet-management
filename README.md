# Drone Fleet Management

This is a React.js project for managing a fleet of drones, including user authentication, drone overview, detailed drone information, and maintenance management. The project uses Bootstrap for responsive styling and is containerized using Docker.

## Features

- **User Authentication:** Login with username "admin" and password "password123".
- **Drone Fleet Overview:** View a list of all drones with basic information.
- **Drone Details View:** View detailed statistics for each drone.
- **Maintenance Management:** View and manage maintenance activities for the drones.

## Technologies Used

- React.js
- Bootstrap
- Docker

## Screenshots

### Login Page
![Login Page](src/Assets/Images/LoginPage.jpg)

### Drone Fleet Overview
![Drone Fleet Overview](src/Assets/Images/OverviewPage.jpg)

### Drone Details View
![Drone Details View](src/Assets/Images/DetailsPage.jpg)

## Getting Started

### Prerequisites

- Node.js
- Docker

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harispatel/drone-fleet-management.git
   cd drone-fleet-management

2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm start

4. **Open your browser:**
   Go to `http://localhost:3000`

## Docker Instructions

1. **Build and run the Docker container:**
   
   docker-compose up --build

2. **Access the application:**
   
   Open your web browser and go to http://localhost:3000.

## Project Structure

1. **Structure:**
    - src/components: Contains the React components for the project.
    - src/data.json: Contains the mock data for users and drones.
    - Dockerfile: Configuration for Docker.
    - docker-compose.yml: Configuration for Docker Compose.
    