import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CAllRequest.scss';

const CAllRequest = () => {
    const navigate = useNavigate();

    const initialData = [
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
    

    // State to manage filters
    const [requestID, setRequestID] = useState('');
    const [minInvestmentAmount, setMinInvestmentAmount] = useState('');
    const [maxInvestmentAmount, setMaxInvestmentAmount] = useState('');
    const [requestStatus, setRequestStatus] = useState('');
    const [territory, setTerritory] = useState('');
    const [investmentType, setInvestmentType] = useState('');

    // Filtered data based on filters
    const filteredData = initialData.filter((row) => {
        const matchesRequestID = !requestID || row.requestID.toString().includes(requestID);
        const withinAmountRange =
            (!minInvestmentAmount || row.investmentAmount >= parseInt(minInvestmentAmount, 10)) &&
            (!maxInvestmentAmount || row.investmentAmount <= parseInt(maxInvestmentAmount, 10));
        const matchesStatus = !requestStatus || row.requestStatus === requestStatus;
        const matchesTerritory = !territory || row.territory === territory;
        const matchesInvestmentType = !investmentType || row.investmentType === investmentType;

        return (
            matchesRequestID &&
            withinAmountRange &&
            matchesStatus &&
            matchesTerritory &&
            matchesInvestmentType
        );
    });

    const handleRowClick = (requestID) => {
        navigate(`/cr-details/${requestID}`);
    };

    return (
        <div className="all-requests">
            <h2>All Requests</h2>

            <div className="filters">
                <div>
                    <label htmlFor="requestID">Search by Request ID:</label>
                    <input
                        type="text"
                        id="requestID"
                        value={requestID}
                        onChange={(e) => setRequestID(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="minInvestmentAmount">Min Investment Amount:</label>
                    <input
                        type="number"
                        id="minInvestmentAmount"
                        value={minInvestmentAmount}
                        onChange={(e) => setMinInvestmentAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="maxInvestmentAmount">Max Investment Amount:</label>
                    <input
                        type="number"
                        id="maxInvestmentAmount"
                        value={maxInvestmentAmount}
                        onChange={(e) => setMaxInvestmentAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="requestStatus">Request Status:</label>
                    <select
                        id="requestStatus"
                        value={requestStatus}
                        onChange={(e) => setRequestStatus(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="territory">Territory:</label>
                    <select
                        id="territory"
                        value={territory}
                        onChange={(e) => setTerritory(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="investmentType">Investment Type:</label>
                    <select
                        id="investmentType"
                        value={investmentType}
                        onChange={(e) => setInvestmentType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Marketing">Marketing</option>
                        <option value="IT">IT</option>
                        <option value="R&D">R&D</option>
                    </select>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Request Date</th>
                        <th>Territory</th>
                        <th>Requester Name</th>
                        <th>Investment Type</th>
                        <th>Investment Amount</th>
                        <th>Request Status</th>
                        <th>Approval Date</th>
                        <th>CAF Admin</th>
                        <th>Budget ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                        <tr
                            key={row.requestID}
                            className={index % 2 === 0 ? 'even-row' : 'odd-row'}
                            onClick={() => handleRowClick(row.requestID)}
                        >
                            <td>{row.requestID}</td>
                            <td>{row.requestDate}</td>
                            <td>{row.territory}</td>
                            <td>{row.requesterName}</td>
                            <td>{row.investmentType}</td>
                            <td>{row.investmentAmount}</td>
                            <td>{row.requestStatus}</td>
                            <td>{row.approvalDate}</td>
                            <td>{row.cafAdmin}</td>
                            <td>{row.budgetID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CAllRequest;
