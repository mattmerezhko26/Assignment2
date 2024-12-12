**Project Description:**

This project is a web application that provides information about climate changes solutions. The application features multiple routes that serve static content (text, JSON) for different data access needs.

**Technologies Used:**

* **Node.js:** The runtime environment for executing JavaScript outside of a web browser.
* **Express.js:** A popular web framework for building Node.js applications.
* **JavaScript:** The primary programming language used throughout the project.
* **JSON:** Data format used for storing and exchanging data between the server and client.

**Key Features:**

* **Data Access Module:** A dedicated module for managing project data, including:
    * Efficiently loading and processing data from external sources.
    * Providing functions to retrieve all projects, specific projects by ID, and projects by sector.
    * Utilizing Promises for asynchronous data handling.
* **RESTful API:** 
    * Routes for accessing all projects.
    * Routes for accessing individual projects by ID.
    * Routes for accessing projects by sector.
* **Error Handling:** Robust error handling mechanisms to gracefully handle potential issues during data retrieval and processing.

**Getting Started:**

1. **Clone the repository:** 
   ```bash
   git clone <repository_url> 
   ```
2. **Install dependencies:**
   ```bash
   cd <project_directory>
   npm install 
   ```
3. **Run the server:**
   ```bash
   npm start 
   ```
