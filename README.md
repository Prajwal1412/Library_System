📚 Libris Nexus - Online Library System – React Project

This is a React-based web application that simulates an Online Library System. Users can browse books by category, view detailed book information, and add new books using a form powered by Redux.
🚀 Features
✅ Home Page

    Welcome message with clean UI

    List of book categories

    Popular books section with details link

    Navigation bar with links to all pages

✅ Browse Books Page

    Filter books by category via dynamic routing (/books/:category)

    Search functionality by title or author

    Responsive grid of book cards with images and ratings

    "View Details" link for each book

✅ Book Details Page

    Displays selected book info: title, author, description, rating, etc.

    Dynamic route for each book

    "Back to Browse" button

✅ Add Book Page

    Form to input new book details including title, author, category, cover URL, rating, pages, language, etc.

    Redux used for managing global books state

    Form validation for required fields and rating bounds

    Redirects to Browse Books page after successful submission

✅ 404 Page

    Custom "Page Not Found" message

    Link to return to the Home page

🛠 Tech Stack

    React

    React Router v6

    Redux + Redux Toolkit

    Tailwind CSS

    JavaScript (ES6+)

📦 Installation & Running the App

    Clone the repository:

git clone https://github.com/Prajwal1412/Library_System
cd online-library-system

    Install dependencies:

npm install

    Start the development server:

npm start

    Visit http://localhost:3000 to use the app.

📂 Folder Structure

src/
│
├── components/ # Reusable components (e.g., BookCard,Navbar)
├── pages/ # Page components (Home, BrowseBooks, AddBook, BookDetails, Errorpage)
├── utils/ # Dummy book data,Redux Store,Slices
├── App.jsx # App routes and layout
└── index.js # React entry point
