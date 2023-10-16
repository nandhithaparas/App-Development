import React, { useState } from 'react';
import axios from 'axios';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Function to open the modal
  const openModal = () => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      setIsModalOpen(true);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.put(`http://localhost:8081/auth/users/put/${email}`, { password: newPassword });

      if (response.status === 200) {
        setMessage('Password updated successfully.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Forget Password</h1>
      <button onClick={openModal}>Forget Password</button>
      <div className={`modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Reset Password</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              disabled
            />
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="button" onClick={handleResetPassword}>Reset Password</button>
          </form>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
