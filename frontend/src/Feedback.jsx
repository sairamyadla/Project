import React, { useState } from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!customerName) {
      validationErrors.customerName = 'Customer name is required';
    }
    if (!rating) {
      validationErrors.rating = 'Rating is required';
    }
    if (!comments) {
      validationErrors.comments = 'Comments are required';
    }
    
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the feedback
      alert('Feedback submitted successfully');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="feedback-form">
      <h2>Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Chef Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className={errors.customerName ? 'error' : ''}
          />
          {errors.customerName && <span className="error-message">{errors.customerName}</span>}
        </div>
        
        <div className="form-group">
          <label>Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className={errors.rating ? 'error' : ''}
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          {errors.rating && <span className="error-message">{errors.rating}</span>}
        </div>
        
        <div className="form-group">
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className={errors.comments ? 'error' : ''}
          />
          {errors.comments && <span className="error-message">{errors.comments}</span>}
        </div>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
