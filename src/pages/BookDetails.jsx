import { useParams } from "react-router-dom";
import { Books } from "../utils/dummy_data";
import { Link } from "react-router-dom";
import arrowIcon from "../utils/arrow.png";
function BookDetails() {
  const param = useParams();
  console.log(param);
  const data = Books;

  const book = data.find((book) => book.id == param.id);
  console.log(book.id);
  return (
    <div className="h-screen bg-gradient-to-b from-gray-800 to-gray-900 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 md:flex gap-8 text-gray-200">
        {/* Book Image */}
        <div className="w-full md:w-1/3">
          <img
            src={book.cover}
            alt={book.title}
            className="rounded-xl object-cover w-full h-64 md:h-full shadow-md"
          />
        </div>

        {/* Book Info */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{book.title}</h1>
            <p className="text-lg text-gray-400 mb-2">
              <span className="font-semibold text-gray-300">Author:</span>{" "}
              {book.author}
            </p>
            <p className="text-gray-300 mb-4">{book.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <span className="font-semibold text-gray-300">Rating:</span>
              <span className="text-yellow-400 font-medium">
                {book.rating} / 5 ⭐
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              to="/browsebooks"
              className="bg-gray-600 hover:bg-gray-900 text-white font-medium px-5 py-2 rounded-lg shadow transition duration-200 flex items-center gap-2"
            >
              <img src={arrowIcon} alt="Back" className="  w-7 h-7" />
              Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
