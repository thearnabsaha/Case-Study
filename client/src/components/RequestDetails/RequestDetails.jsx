import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RequestDetails.scss';

const data = [
    { requestID: 1, requestDate: '2024-08-01', territory: 'Japan', requesterName: 'John Doe', investmentType: 'Marketing', investmentAmount: 5000, requestStatus: 'Approved', approvalDate: '2024-08-10', cafAdmin: 'Alice Smith', budgetID: 'BUD123' },
    { requestID: 2, requestDate: '2024-08-02', territory: 'China', requesterName: 'Jane Smith', investmentType: 'IT', investmentAmount: 10000, requestStatus: 'Pending', approvalDate: '2024-08-15', cafAdmin: 'Bob Brown', budgetID: 'BUD124' },
    { requestID: 3, requestDate: '2024-08-03', territory: 'Canada', requesterName: 'Michael Johnson', investmentType: 'R&D', investmentAmount: 15000, requestStatus: 'Rejected', approvalDate: '2024-08-20', cafAdmin: 'Charlie Adams', budgetID: 'BUD125' },
    { requestID: 4, requestDate: '2024-08-04', territory: 'United States', requesterName: 'Emily Davis', investmentType: 'Marketing', investmentAmount: 7000, requestStatus: 'Approved', approvalDate: '2024-08-22', cafAdmin: 'Dana White', budgetID: 'BUD126' },
    { requestID: 5, requestDate: '2024-08-05', territory: 'Hong Kong', requesterName: 'David Wilson', investmentType: 'IT', investmentAmount: 3000, requestStatus: 'Pending', approvalDate: '2024-08-25', cafAdmin: 'Eva Green', budgetID: 'BUD127' },
    { requestID: 6, requestDate: '2024-08-06', territory: 'Brazil', requesterName: 'Sophia Martinez', investmentType: 'R&D', investmentAmount: 12000, requestStatus: 'Approved', approvalDate: '2024-08-28', cafAdmin: 'Frank Miller', budgetID: 'BUD128' },
    { requestID: 7, requestDate: '2024-08-07', territory: 'Mexico', requesterName: 'Chris Lee', investmentType: 'Marketing', investmentAmount: 8000, requestStatus: 'Rejected', approvalDate: '2024-08-30', cafAdmin: 'Grace Allen', budgetID: 'BUD129' },
    { requestID: 8, requestDate: '2024-08-08', territory: 'Singapore', requesterName: 'Isabella Hernandez', investmentType: 'IT', investmentAmount: 11000, requestStatus: 'Pending', approvalDate: '2024-09-01', cafAdmin: 'Harry Roberts', budgetID: 'BUD130' },
    { requestID: 9, requestDate: '2024-08-09', territory: 'Australia', requesterName: 'Daniel Young', investmentType: 'R&D', investmentAmount: 9000, requestStatus: 'Approved', approvalDate: '2024-09-05', cafAdmin: 'Irene King', budgetID: 'BUD131' },
    { requestID: 10, requestDate: '2024-08-10', territory: 'India', requesterName: 'Oliver Scott', investmentType: 'Marketing', investmentAmount: 6000, requestStatus: 'Approved', approvalDate: '2024-09-10', cafAdmin: 'Jack Baker', budgetID: 'BUD132' },
    { requestID: 11, requestDate: '2024-08-11', territory: 'Japan', requesterName: 'Ava Patel', investmentType: 'IT', investmentAmount: 4000, requestStatus: 'Pending', approvalDate: '2024-09-12', cafAdmin: 'Karen Carter', budgetID: 'BUD133' },
    { requestID: 12, requestDate: '2024-08-12', territory: 'China', requesterName: 'Mia Zhang', investmentType: 'R&D', investmentAmount: 14000, requestStatus: 'Rejected', approvalDate: '2024-09-14', cafAdmin: 'Leo Turner', budgetID: 'BUD134' },
    { requestID: 13, requestDate: '2024-08-13', territory: 'Canada', requesterName: 'Noah Thomas', investmentType: 'Marketing', investmentAmount: 2000, requestStatus: 'Approved', approvalDate: '2024-09-16', cafAdmin: 'Mia Scott', budgetID: 'BUD135' },
    { requestID: 14, requestDate: '2024-08-14', territory: 'United States', requesterName: 'Liam Brown', investmentType: 'IT', investmentAmount: 18000, requestStatus: 'Pending', approvalDate: '2024-09-18', cafAdmin: 'Nathan Walker', budgetID: 'BUD136' },
    { requestID: 15, requestDate: '2024-08-15', territory: 'Hong Kong', requesterName: 'Ethan Davis', investmentType: 'R&D', investmentAmount: 13000, requestStatus: 'Rejected', approvalDate: '2024-09-20', cafAdmin: 'Olivia Young', budgetID: 'BUD137' },
];

const RequestDetails = () => {
    const { requestID } = useParams();
    const navigate = useNavigate();

    // Find the request details using the requestID from the URL parameter
    const requestDetails = data.find((req) => req.requestID === parseInt(requestID, 10));

    if (!requestDetails) {
        return <div className="request-details">Request not found.</div>;
    }

    return (
        <div className="request-details">
            <h2>Request Details - ID: {requestDetails.requestID}</h2>
            <div className="details">
                <p><strong>Request Date:</strong> {requestDetails.requestDate}</p>
                <p><strong>Territory:</strong> {requestDetails.territory}</p>
                <p><strong>Requester Name:</strong> {requestDetails.requesterName}</p>
                <p><strong>Investment Type:</strong> {requestDetails.investmentType}</p>
                <p><strong>Investment Amount:</strong> ${requestDetails.investmentAmount}</p>
                <p><strong>Request Status:</strong> {requestDetails.requestStatus}</p>
                <p><strong>Approval Date:</strong> {requestDetails.approvalDate}</p>
                <p><strong>CAF Admin:</strong> {requestDetails.cafAdmin}</p>
                <p><strong>Budget ID:</strong> {requestDetails.budgetID}</p>
            </div>
            <button className="back-button" onClick={() => navigate(-1)}>Back to All Requests</button>
        </div>
    );
};

export default RequestDetails;
