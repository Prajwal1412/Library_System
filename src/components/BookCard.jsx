import { Link } from "react-router-dom";

function BookCard(props) {
  return (
    <>
      <div className="flex-col max-w-xs h-[350px] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/10 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1.5 border border-gray-700">
        <div className="flex items-center justify-center h-48  overflow-hidden">
          <img
            src={props.cover}
            alt={props.title}
            className=" h-full  object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white line-clamp-2">
              {props.title}
            </h3>
            <span className="flex items-center bg-gray-700 text-yellow-400 text-xs px-2 py-1 rounded-full ml-2">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {props.rating}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-3">by {props.author}</p>
          <span className="inline-block  bg-gray-700 text-gray-100 text-xs px-2 py-1 rounded-full mb-0">
            {props.category}
          </span>
        </div>
      </div>
    </>
  );
}
export default BookCard;
