import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Popup from "@/components/PopUps/PopUp.jsx";  // Ensure this component is properly imported
import './TRDetails.scss';

const data = [
    { requestID: 1, territory: 'Japan', requesterName: 'John Doe', investmentType: 'Marketing', investmentAmount: 5000, requestStatus: 'Approved', cafAdmin: 'Alice Smith', budgetID: 'BUD123' },
    { requestID: 2, territory: 'China', requesterName: 'Jane Smith', investmentType: 'IT', investmentAmount: 10000, requestStatus: 'Pending', cafAdmin: 'Bob Brown', budgetID: 'BUD124' },
    { requestID: 3, territory: 'Canada', requesterName: 'Michael Johnson', investmentType: 'R&D', investmentAmount: 15000, requestStatus: 'Rejected', cafAdmin: 'Charlie Adams', budgetID: 'BUD125' },
    // Add more data as required...
];

const TRDetails = () => {
    const { requestID } = useParams();
    const navigate = useNavigate();
    const [requestDetails, setRequestDetails] = useState(() => data.find(req => req.requestID === parseInt(requestID, 10)));
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState('');

    const handleAction = (type) => {
        setRequestDetails(prevDetails => ({ ...prevDetails, requestStatus: type.toUpperCase() }));
        setPopupType(type);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1000); // Automatically hide popup after 3 seconds
    };

    const goBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    if (!requestDetails) {
        return <div className="cr-details">Request not found.</div>;
    }

    return (
        <div className="cr-details">
            <h2>Request Details - ID: {requestDetails.requestID}</h2>
            <div className="details">
                <p><strong>Territory:</strong> {requestDetails.territory}</p>
                <p><strong>Requester Name:</strong> {requestDetails.requesterName}</p>
                <p><strong>Investment Type:</strong> {requestDetails.investmentType}</p>
                <p><strong>Investment Amount:</strong> ${requestDetails.investmentAmount}</p>
                <p><strong>Request Status:</strong> {requestDetails.requestStatus}</p>
                <p><strong>CAF Admin:</strong> {requestDetails.cafAdmin}</p>
                <p><strong>Budget ID:</strong> {requestDetails.budgetID}</p>
            </div>
            <div className="actions">
                <button className="approve" onClick={() => handleAction('approve')}>Approve</button>
                <button className="reject" onClick={() => handleAction('reject')}>Reject</button>
                <button className="back" onClick={goBack}>Back to Previous Page</button>
            </div>
            {showPopup && <Popup type={popupType} />}
        </div>
    );
};

export default TRDetails;
