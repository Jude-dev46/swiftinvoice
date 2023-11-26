// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const CreateInvoice = ({ isOpen, onRequestClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleModalClose = () => {
    setInputValue(''); // Clear input when modal is closed
    onRequestClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
    handleModalClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="flex justify-end">
        <button className="text-2xl" onClick={handleModalClose}>
          &times;
        </button>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Modal Content</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="modalInput" className="block mb-2">
            Enter something:
          </label>
          <input
            type="text"
            id="modalInput"
            value={inputValue}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateInvoice;
