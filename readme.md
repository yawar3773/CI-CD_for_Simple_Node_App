# Node.js CI/CD Demo Application

A simple Express.js application demonstrating:

* REST API development with Express.js
* Continuous Integration (CI) using GitHub Actions
* Containerization using Docker
* Automated testing on every push and pull request

## Features

* Express.js server with a basic API endpoint
* Environment variable support
* Dockerized application
* GitHub Actions workflow for automated testing

## API Endpoint

### GET /

Returns application information.

**Response**

```json
{
  "message": "Hello, from Express server",
  "env": "development",
  "container": "hostname"
}
```

## Tech Stack

* Node.js
* Express.js
* Docker
* GitHub Actions

## GitHub Actions CI Pipeline

The project includes a GitHub Actions workflow that automatically:

1. Checks out the source code
2. Sets up Node.js
3. Installs dependencies
4. Runs tests
5. Reports build status

### Workflow Trigger

The pipeline runs on:

* Push events

Workflow file:

```text
.github/workflows/main.yml
```

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── main.yml
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## CI/CD Flow

```text
Developer Pushes Code
          │
          ▼
 GitHub Repository
          │
          ▼
 GitHub Actions
          │
          ├── Install Dependencies
          ├── Run Tests
          └── Validate Build
          │
          ▼
      Success/Failure
```

## Learning Objectives

This project demonstrates:

* Writing automated tests for Express APIs
* Implementing Continuous Integration with GitHub Actions
* Building and running Docker containers
* Following DevOps best practices for application deployment

## Author

Created as a CI/CD and Docker learning project using Node.js and GitHub Actions.
