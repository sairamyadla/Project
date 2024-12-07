import React, { useState } from 'react';
import './Subscription.css';

const SubscriptionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Name validation
    if (!name) {
      validationErrors.name = 'Name is required';
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phone) {
      validationErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(phone)) {
      validationErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Subscription Type validation
    if (!subscriptionType) {
      validationErrors.subscriptionType = 'Subscription type is required';
    }

    // Address validation
    if (!address) {
      validationErrors.address = 'Address is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the subscription
      alert('Subscription submitted successfully');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="subscription-form">
      <h2>Subscription Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Subscription Type</label>
          <select
            value={subscriptionType}
            onChange={(e) => setSubscriptionType(e.target.value)}
            className={errors.subscriptionType ? 'error' : ''}
          >
            <option value="">Select Subscription Type</option>
            <option value="one-day">One-Day</option>
            <option value="weekly">Weekly Plan</option>
            <option value="monthly">Monthly Plan</option>
            <option value="3-months">3 Months Plan</option>
            <option value="6-months">6 Months Plan</option>
          </select>
          {errors.subscriptionType && <span className="error-message">{errors.subscriptionType}</span>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <button type="submit" className="submit-btn">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
