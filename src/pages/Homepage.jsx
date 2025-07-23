import BookCard from "../components/BookCard";
import { Books } from "../utils/dummy_data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Homepage = () => {
  const topBooks = useSelector((store) => store.Book.Books).slice(0, 5);
  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 px-6 ">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              Libris Nexus
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Discover your next adventure in our vast collection of books.
            Whether you're looking for knowledge or entertainment, we've got you
            covered.
          </p>
        </div>

        {/* Book Categories */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Explore Our Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Science Fiction",
              "Fantasy",
              "Classic	",
              "Thriller	",
              "Self-Help	",
              "Psychological Thriller	",
              "Memoir	",
              "History	",
              "Psychology	",
              "Spirituality	",
              "Autobiography	",
              "Personal Development",
            ].map((category) => (
              <Link to={`/browsebooks/${category}`}>
                <div className="max-w-3xl bg-gray-800 hover:bg-gray-900 border border-gray-700 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center bg-gray-700 rounded-full">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-white text-sm w-full truncate">
                    {category}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Popular
              </span>{" "}
              This Month
            </h2>
            <Link to="/browsebooks">
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                View All
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 m-5">
            {topBooks.map((book) => (
              <Link to={`/bookdetails/${book.category}/${book.id}`}>
                <BookCard
                  cover={book.cover}
                  title={book.title}
                  author={book.author}
                  category={book.category}
                  rating={book.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
