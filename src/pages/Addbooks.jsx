import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../utils/booksSclice";
import { useNavigate } from "react-router-dom";
function AddBook() {
  const data = useSelector((store) => store.Book.Books);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: data.length + 1,
    title: "",
    author: "",
    category: "",
    rating: "",
    publishedYear: "",
    cover: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    }
    if (formData.rating && (formData.rating < 1 || formData.rating > 5)) {
      newErrors.rating = "Rating must be between 1 and 5";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addBook(formData));
    navigate("/browsebooks");
    console.log("Form data ready to submit:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        <h2 className="text-3xl font-mono font-bold text-center text-purple-400 mb-6">
          Add a New Book
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-purple-500 outline-none"
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-purple-500 outline-none"
          />
          {errors.author && (
            <p className="text-red-400 text-sm mt-1">{errors.author}</p>
          )}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-purple-500 outline-none"
          />
          {errors.category && (
            <p className="text-red-400 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Rating (1 to 5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-purple-500 outline-none"
          />
          {errors.rating && (
            <p className="text-red-400 text-sm mt-1">{errors.rating}</p>
          )}
        </div>

        {/* Published Year */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Published Year</label>
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-purple-500 outline-none"
          />
          {errors.publishedYear && (
            <p className="text-red-400 text-sm mt-1">{errors.publishedYear}</p>
          )}
        </div>

        {/* Cover URL */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Cover Image URL</label>
          <input
            type="text"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-purple-500 outline-none"
          />
          {errors.cover && (
            <p className="text-red-400 text-sm mt-1">{errors.cover}</p>
          )}
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-700 transition duration-300 font-semibold text-white"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
