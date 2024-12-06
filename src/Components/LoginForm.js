import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: 'Spring',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    let valid = true;

    if (!formData.firstName) {
      tempErrors.firstName = 'First name cannot be empty';
      valid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      tempErrors.firstName = 'First name should contain only alphabets';
      valid = false;
    }

    if (!formData.lastName) {
      tempErrors.lastName = 'Last name cannot be empty';
      valid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      tempErrors.lastName = 'Last name should contain only alphabets';
      valid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email cannot be empty';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
      valid = false;
    }

    if (!formData.password) {
      tempErrors.password = 'Password cannot be empty';
      valid = false;
    } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])(?=.*[A-Z]).{6,}/.test(formData.password)) {
      tempErrors.password = 'Password must contain at least 1 alphabet, 1 number, 1 special character, and 1 uppercase letter';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/profile', { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">User Registration</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" />
          {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" />
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <div className="form-group">
          <label>Favorite Season:</label>
          <select name="favoriteSeason" value={formData.favoriteSeason} onChange={handleChange} className="form-select">
            <option value="Spring">Spring</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;