import React, { useState } from "react";
import Modal from "react-modal";
import Rate from "./Ratings";

Modal.setAppElement("#root");

const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    let newMovie = {
      name,
      date,
      rating,
      image,
      description,
    };
    addNewMovie(e, newMovie);
    setIsOpen(false);
    setName("");
    setDate("");
    setRating("");
    setImage("");
    setDescription("");
  };

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          + Add new movie
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label>Movie Rate</label>
            <div className="rating-search">
              <Rate rating={rating} setRatingSearch={setRating} />
            </div>
           
            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />

            <label>Movie Description</label>
            <textarea
              type="text"
              name="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
