import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './CRDetails.scss';

const data = [
    { requestID: 1, territory: 'Japan', requesterName: 'John Doe', investmentType: 'Marketing', investmentAmount: 5000, requestStatus: 'Approved', cafAdmin: 'Alice Smith', budgetID: 'BUD123' },
    { requestID: 2, territory: 'China', requesterName: 'Jane Smith', investmentType: 'IT', investmentAmount: 10000, requestStatus: 'Pending', cafAdmin: 'Bob Brown', budgetID: 'BUD124' },
    { requestID: 3, territory: 'Canada', requesterName: 'Michael Johnson', investmentType: 'R&D', investmentAmount: 15000, requestStatus: 'Rejected', cafAdmin: 'Charlie Adams', budgetID: 'BUD125' },
    // Add more dummy data as needed...
];

const CRDetails = () => {
    const { requestID } = useParams();
    const history = useHistory();

    // Find the request details using the requestID from the URL parameter
    const [requestDetails, setRequestDetails] = useState(data.find((req) => req.requestID === parseInt(requestID, 10)));

    const handleApprove = () => {
        setRequestDetails(prevDetails => ({
            ...prevDetails,
            requestStatus: 'Approved'
        }));
    };

    const handleReject = () => {
        setRequestDetails(prevDetails => ({
            ...prevDetails,
            requestStatus: 'Rejected'
        }));
    };

    const goBack = () => {
        history.goBack();
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
                <button className="approve" onClick={handleApprove}>Approve</button>
                <button className="reject" onClick={handleReject}>Reject</button>
                <button className="back" onClick={goBack}>Back to Previous Page</button>
            </div>
        </div>
    );
};

export default CRDetails;
