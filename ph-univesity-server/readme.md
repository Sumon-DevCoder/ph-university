# Backend Project

This project is a Node.js backend application set up with TypeScript, Express, MongoDB (using Mongoose), and other essential tools for development and code quality.

## Project Structure

```

├── src
│   ├── app
│   │   ├── DB
│   │   ├── builder
│   │   ├── config
│   │   ├── error
│   │   ├── interface
│   │   ├── middlewares
│   │   ├── module
│   │   ├── routes
│   │   ├── utils
│   ├── app.ts
│   ├── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

```

## Setup Instructions

### 1. Initialize Project

Initialize a new Node.js project with default settings.

```sh
npm init -y


2. Install Dependencies
Install the necessary packages for the project.

npm install express mongoose nodemon dotenv cors
npm install -D typescript
```

https://backend-project-setup.vercel.app/



### Requirement Analysis

[Link to Requirement Analysis Document](https://docs.google.com/document/d/10mkjS8boCQzW4xpsESyzwCCLJcM3hvLghyD_TeXPBx0/edit?usp=sharing)

Description: This document outlines the detailed analysis of project requirements.

---

### Entity-Relationship Diagrams

![ER DIAGRAM](./erdiagram.png)

Description: This is an updated diagram illustrates the relationships among User, Student, Admin, Faculty, Academic Semester, Academic Faculty, Academic Department , Course , Semester Registration , Offered Couse.

---

![POSTMAN COLLECTION](./postman_collection.json)

Description: This is a postman collection of all the API endpoints.Download this , and import it in your postman if you needed.

---
