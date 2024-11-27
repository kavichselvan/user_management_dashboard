User Management Dashboard
This is a simple web application that allows users to view, add, edit, and delete user details from a mock backend API using React and React Router.

Features
View a list of users with details like ID, Name, Email, Address, Phone, Website, and Company.
Add a new user through a form.
Edit existing user details.
Delete users (mock action).
All actions are simulated using the JSONPlaceholder mock API.
Tech Stack
Frontend: React
Routing: React Router v6
API: JSONPlaceholder (https://jsonplaceholder.typicode.com/users)
Requirements
Node.js (>= v14.x)
npm (>= v6.x)
Installation & Setup
1. Clone the repository
bash
Copy code
git clone https://github.com/yourusername/user-management-dashboard.git
2. Navigate to the project folder
bash
Copy code
cd user-management-dashboard
3. Install dependencies
Make sure you have npm installed, then run the following command:

bash
Copy code
npm install
This will install all the required dependencies listed in package.json.

4. Run the application locally
To start the app in development mode, use the following command:

bash
Copy code
npm start
This will start the application on http://localhost:3000 by default. You can view the app in your browser.

5. Open in your browser
Once the app is running, open http://localhost:3000 in your browser to access the user management dashboard.

Folder Structure
src/
components/: Contains reusable components like UserList, UserForm.
pages/: Contains page components like Dashboard, AddUser, EditUser.
App.js: Main entry point for the application.
index.js: Entry point to render the React app.
How It Works
Dashboard Page (/): Fetches and displays the list of users using a GET request to https://jsonplaceholder.typicode.com/users.
Add User Page (/add): Displays a form to add a new user, which is simulated by sending a POST request to the API.
Edit User Page (/edit/:id): Displays a form to edit an existing user's details, fetched using a GET request, and updates the user using a PUT request.
Delete User: The delete action is simulated by a button that alerts the user ID (actual API delete action is not implemented due to the mock API).
