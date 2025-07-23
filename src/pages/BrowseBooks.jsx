import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function BrowseBooks() {
  const [searchBook, setSearchBook] = useState("");
  const data = useSelector((store) => store.Book.Books);

  const params = useParams();

  const filteredBooks = data
    .filter((book) => book.category === params.category)
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase()) ||
        book.author.toLowerCase().includes(searchBook.toLowerCase())
    )
    .reverse();

  const allBooks = data
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase()) ||
        book.author.toLowerCase().includes(searchBook.toLowerCase())
    )
    .reverse();

  if (!params.category) {
    return (
      <>
        <div className="min-h-[90vh]  from-gray-800 to-gray-900 text-white">
          <h1 className="mt-10 text-4xl font-sans font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
            All Books
          </h1>
          {/*  Search Bar */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchBook}
              onChange={(e) => setSearchBook(e.target.value)}
              className="px-4 m-10 text-amber-50 py-2 w-full max-w-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-15 m-5">
            {allBooks.length !== 0 ? (
              allBooks.map((book) => (
                <Link to={`/bookdetails/${book.category}/${book.id}`}>
                  <BookCard
                    cover={book.cover}
                    title={book.title}
                    author={book.author}
                    category={book.category}
                    rating={book.rating}
                  ></BookCard>
                </Link>
              ))
            ) : (
              <>
                <div className="col-span-full flex flex-col items-center justify-center ">
                  <svg
                    className="w-12 h-12 text-purple-500 mb-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    />
                  </svg>
                  <h2 className="text-2xl font-semibold text-purple-400">
                    No books found
                  </h2>
                  <p className="text-md text-gray-500">
                    Try a different title or author name.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-[90vh]  from-gray-800 to-gray-900 text-white">
        <h1 className="mt-10 text-4xl font-bold font-sans  text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
          {params.category} Books
        </h1>

        {/* 🔍 Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            className="px-4 m-10  py-2 w-full max-w-md border border-purple-400 rounded-md shadow-md focus:outline-none  group-placeholder-shown:  focus:ring focus:border-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 m-5">
          {filteredBooks.length !== 0 ? (
            filteredBooks.map((book) => (
              <Link to={`/bookdetails/${book.category}/${book.id}`}>
                <BookCard
                  cover={book.cover}
                  title={book.title}
                  author={book.author}
                  category={book.category}
                  rating={book.rating}
                ></BookCard>
              </Link>
            ))
          ) : (
            <>
              <div className="col-span-full flex flex-col items-center justify-center mt-10">
                <svg
                  className="w-12 h-12 text-purple-500 mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  />
                </svg>
                <h2 className="text-xl font-semibold text-purple-600">
                  No books found
                </h2>
                <p className="text-sm text-gray-500">
                  Try a different title or author name.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BrowseBooks;
