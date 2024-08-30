import React, { useState } from 'react';
import "@/components/NewRequest/NewRequest.scss"; // Make sure to import the SCSS file

const NewRequest = () => {
  const [formData, setFormData] = useState({
    requesterName: '',
    requestDate: '',
    territory: '',
    investmentType: '',
    investmentName: '',
    investmentAmount: '',
    investmentDetails: '',
    supportingDocuments: [],
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: Array.from(files),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Process the submitted formData as needed, e.g., send it to a server

    // Clear the form inputs after submission
    setFormData({
      requesterName: '',
      requestDate: '',
      territory: '',
      investmentType: '',
      investmentName: '',
      investmentAmount: '',
      investmentDetails: '',
      supportingDocuments: [],
    });
  };

  return (
    <div id="request-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="requesterName">Requester Name:</label>
          <input
            type="text"
            id="requesterName"
            name="requesterName"
            placeholder="Enter your name"
            value={formData.requesterName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="requestDate">Request Date:</label>
          <input
            type="date"
            id="requestDate"
            name="requestDate"
            value={formData.requestDate}
            onChange={handleInputChange}
            required
            // Ensuring the calendar input is clickable and functional
            onClick={(e) => (e.target.type = 'date')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="territory">Territory:</label>
          <select
            id="territory"
            name="territory"
            value={formData.territory}
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

        <div className="form-group">
          <label htmlFor="investmentType">Investment Type:</label>
          <select
            id="investmentType"
            name="investmentType"
            value={formData.investmentType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select investment type</option>
            <option value="technology upgrade">Technology Upgrade</option>
            <option value="strategic initiative">Strategic Initiative</option>
            <option value="talent acquisition">Talent Acquisition</option>
            <option value="client engagement">Client Engagement</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="investmentName">Investment Name:</label>
          <input
            type="text"
            id="investmentName"
            name="investmentName"
            placeholder="Enter investment name"
            value={formData.investmentName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="investmentAmount">Investment Amount:</label>
          <input
            type="number"
            id="investmentAmount"
            name="investmentAmount"
            placeholder="Enter investment amount"
            value={formData.investmentAmount}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="investmentDetails">Investment Details:</label>
          <textarea
            id="investmentDetails"
            name="investmentDetails"
            placeholder="Enter investment details"
            value={formData.investmentDetails}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="supportingDocuments">Supporting Documents:</label>
          <input
            type="file"
            id="supportingDocuments"
            name="supportingDocuments"
            onChange={handleInputChange}
            multiple
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default NewRequest;
