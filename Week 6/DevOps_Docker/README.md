# DevOps & Docker Containerization Guide

## Build and Run Single Container
```bash
docker build -t python-devops-app .
docker run -p 8000:8000 python-devops-app
```

## Run Multi-Container with Docker Compose
```bash
docker-compose up --build
```
