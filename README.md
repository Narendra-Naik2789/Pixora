Pixora - Social Media App 🎨

Pixora is a simple yet powerful social media application built using modern web technologies. It allows users to create, view, edit, and delete posts with ease. Each post includes a username, caption, and an image URL. The application follows RESTful API principles and uses UUID for unique post identification.

🌐 Live Demo

You can view this project live here.

🛠️ Technologies Used

Frontend:

HTML - For structuring the web pages.

CSS - For styling the application.

JavaScript - For dynamic client-side functionality.

Backend:

Node.js - JavaScript runtime for server-side logic.

Express.js - Web framework for building RESTful APIs.

Templating Engine:

EJS (Embedded JavaScript) - For server-side rendering of dynamic content.

Other Tools:

UUID - For generating unique IDs for posts.

Method-Override - To support PATCH and DELETE requests in forms.

✨ Features

Create Posts: Add new posts with a username, caption, and image URL.

View Posts: View all posts on the home page or individual posts in detail.

Edit Posts: Update the caption or image URL of an existing post.

Delete Posts: Remove posts from the feed.

RESTful API: Follows REST principles for CRUD operations.

🚀 Setup Instructions

Prerequisites

Node.js and npm installed on your machine.

Steps to Run the Project

Clone the repository:

git clone https://github.com/Narendra-Naik2789/Pixora.git
cd pixora

Install dependencies:

npm install

Start the server:

node app.js

Access the application:
Open your browser and go to http://localhost:3000.

👤 Folder Structure

pixora/
├── public/
│   ├── assets/       # Static assets (images, etc.)
│   ├── script/       # JavaScript files
│   └── style/        # CSS files
├── views/
│   ├── assets/       # EJS assets
│   ├── partials/     # EJS partials (header, footer, etc.)
│   ├── add.ejs       # Page to add a new post
│   ├── edit.ejs      # Page to edit a post
│   ├── index.ejs     # Home page (list of all posts)
│   ├── view.ejs      # Page to view a single post
│   └── (other EJS files)
├── app.js            # Main application file
├── package.json      # Project dependencies
└── README.md         # Project documentation

🌐 API Endpoints

HTTP Method

Endpoint

Description

GET

/

Render the home page with all posts.

GET

/new

Render the form to add a new post.

POST

/new

Create a new post.

GET

/:id

View a single post.

GET

/:id/edit

Render the form to edit a post.

PATCH

/:id

Update a post.

DELETE

/:id

Delete a post.

💻 Commands

Start the Server

node app.js

Install Dependencies

npm install

Debugging

To debug the application, you can use console.log() statements or a debugging tool like Node Inspector.

📝 Example Requests

Create a New Post

URL: /new

Method: POST

Body:

{
  "username": "traveler_tom",
  "caption": "Exploring the mountains today! 🏔️",
  "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
}

Update a Post

URL: /:id/edit

Method: PATCH

Body:

{
  "caption": "Updated caption!",
  "image": "https://new-image-url.com"
}

Delete a Post

URL: /:id

Method: DELETE

📸 Screenshots

Home Page

Add Post

Edit Post

🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Submit a pull request with a detailed description of your changes.

🐜 License

This project is licensed under the MIT License. See the LICENSE file for details.

💎 Contact

For questions or feedback, feel free to reach out:

Email: naik929356@gmail.com

GitHub Issues: Open an Issue

Enjoy building and using Pixora! 🚀

