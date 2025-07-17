# NoteSavingApp

A full-stack note-taking application built with Spring Boot, Angular, and MySQL.

## Project Structure

```
note-app/
├── note-app-backend/      # Spring Boot backend
└── note-app-frontend/     # Angular frontend
```

## Prerequisites

- Java 17 or higher
- Node.js and npm
- MySQL Server
- Maven
- Angular CLI

## Setup Instructions

### Backend Setup

1. Install MySQL Server and create a database named `note_app_db`
2. Update the database credentials in `note-app-backend/src/main/resources/application.properties`
3. Navigate to the backend directory and run:
   ```bash
   cd note-app-backend
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup

1. Install Angular CLI globally if not already installed:
   ```bash
   npm install -g @angular/cli
   ```
2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd note-app-frontend
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```

## Running the Application

- Backend runs on: http://localhost:8080
- Frontend runs on: http://localhost:4200

## Features

- Create new notes
- View all notes
- Edit existing notes
- Delete notes
- Responsive UI
- Real-time updates

## Technologies Used

- Backend: Spring Boot 3.2.0
- Frontend: Angular 17
- Database: MySQL

