import React, { useState } from 'react';
import "@/Pages/Credentials/Credentials.scss";

const Credentials = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    login: { email: '', password: '' },
    signup: { name: '', empcode: '', email: '', password: '', territory: '' },
  });

  const initialFormData = {
    login: { email: '', password: '' },
    signup: { name: '', empcode: '', email: '', password: '', territory: '' },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [activeTab]: {
        ...prevState[activeTab],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = formData[activeTab];
    console.log(`Submitted ${activeTab} data:`, submittedData);
    // You can now send `submittedData` to a server or use it as needed
    // Reset form data after submission
    setFormData(initialFormData);
  };

  return (
    <div id="container">
      <div className="tab-container">
        <div className="tabs">
          <button
            className={activeTab === 'signup' ? 'active' : ''}
            onClick={() => handleTabClick('signup')}
          >
            Sign Up
          </button>
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'login' && (
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.login.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.login.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          )}
          {activeTab === 'signup' && (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.signup.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Employee Code:</label>
                  <input
                    type="text"
                    name="empcode"
                    placeholder="Enter your employee code"
                    value={formData.signup.empcode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.signup.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.signup.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Territory:</label>
                  <select
                    name="territory"
                    value={formData.signup.territory}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your territory</option>
                    <option value="japan">Japan</option>
                    <option value="china">China</option>
                    <option value="canada">Canada</option>
                    <option value="united states">United States</option>
                    <option value="hong kong">Hong Kong</option>
                    <option value="brazil">Brazil</option>
                    <option value="mexico">Mexico</option>
                    <option value="singapore">Singapore</option>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                  </select>
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
