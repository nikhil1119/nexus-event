

# Nexus Events

**Nexus Events** is a full-stack web application for event management, utilizing Spring Boot for the backend and React for the frontend.

## Key Features

- **Hosts** can log in or sign up.
- **Hosts** can add, update, or delete multiple events.
- **Participants** can browse various events.
- **Participants** can express interest in attending by sharing their details with organizers.
- **Hosts** can view a list of attendees.

## Getting Started

To get started with the Nexus Events project, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Java (JDK 8 or higher)
- Node.js and npm
- Maven

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nikhil1119/nexus-events.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd nexus-events
   ```

3. **Backend Setup (Spring Boot)**:

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Build the project using Maven:

     ```bash
     mvn clean install
     ```

   - Run the Spring Boot application:

     ```bash
     mvn spring-boot:run
     ```

4. **Frontend Setup (React)**:

   - Open a new terminal and navigate to the frontend directory:

     ```bash
     cd frontend
     ```

   - Install the dependencies:

     ```bash
     npm install
     ```

   - Start the React development server:

     ```bash
     npm start
     ```

### Accessing the Application

Once the backend and frontend servers are running, you can access the application by navigating to:

```
http://localhost:3000
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
