import React, { useState } from 'react';
import '@/components/AllRequest/AllRequest.scss';

const AllRequest = () => {
    // Sample data
    const initialData = [
        { requestID: 1, requestDate: '2024-08-01', territory: 'North', requesterName: 'John Doe', investmentType: 'Marketing', investmentAmount: 5000, requestStatus: 'Approved', approvalDate: '2024-08-10', cafAdmin: 'Alice Smith', budgetID: 'BUD123' },
        { requestID: 2, requestDate: '2024-08-02', territory: 'South', requesterName: 'Jane Smith', investmentType: 'Operations', investmentAmount: 7500, requestStatus: 'Pending', approvalDate: '', cafAdmin: 'Bob Brown', budgetID: 'BUD124' },
        { requestID: 3, requestDate: '2024-08-03', territory: 'East', requesterName: 'Michael Johnson', investmentType: 'Infrastructure', investmentAmount: 12000, requestStatus: 'Rejected', approvalDate: '2024-08-12', cafAdmin: 'Charlie Black', budgetID: 'BUD125' },
        { requestID: 4, requestDate: '2024-08-04', territory: 'West', requesterName: 'Emily Davis', investmentType: 'R&D', investmentAmount: 15000, requestStatus: 'Approved', approvalDate: '2024-08-15', cafAdmin: 'David White', budgetID: 'BUD126' },
        { requestID: 5, requestDate: '2024-08-05', territory: 'North', requesterName: 'William Brown', investmentType: 'Marketing', investmentAmount: 8000, requestStatus: 'Pending', approvalDate: '', cafAdmin: 'Emma Green', budgetID: 'BUD127' },
        { requestID: 6, requestDate: '2024-08-06', territory: 'South', requesterName: 'Olivia Wilson', investmentType: 'Operations', investmentAmount: 6400, requestStatus: 'Approved', approvalDate: '2024-08-16', cafAdmin: 'Lucas Gray', budgetID: 'BUD128' },
        { requestID: 7, requestDate: '2024-08-07', territory: 'East', requesterName: 'James Taylor', investmentType: 'Infrastructure', investmentAmount: 10000, requestStatus: 'Rejected', approvalDate: '2024-08-17', cafAdmin: 'Sophia Blue', budgetID: 'BUD129' },
        { requestID: 8, requestDate: '2024-08-08', territory: 'West', requesterName: 'Isabella Moore', investmentType: 'R&D', investmentAmount: 13400, requestStatus: 'Approved', approvalDate: '2024-08-18', cafAdmin: 'Mason Black', budgetID: 'BUD130' },
        { requestID: 9, requestDate: '2024-08-09', territory: 'North', requesterName: 'Mia Anderson', investmentType: 'Marketing', investmentAmount: 9200, requestStatus: 'Pending', approvalDate: '', cafAdmin: 'Charlotte White', budgetID: 'BUD131' },
        { requestID: 10, requestDate: '2024-08-10', territory: 'South', requesterName: 'Liam Thompson', investmentType: 'Operations', investmentAmount: 7600, requestStatus: 'Approved', approvalDate: '2024-08-19', cafAdmin: 'Aiden Blue', budgetID: 'BUD132' },
        { requestID: 11, requestDate: '2024-08-11', territory: 'East', requesterName: 'Noah Martinez', investmentType: 'Infrastructure', investmentAmount: 11000, requestStatus: 'Rejected', approvalDate: '2024-08-20', cafAdmin: 'Avery Gray', budgetID: 'BUD133' },
        { requestID: 12, requestDate: '2024-08-12', territory: 'West', requesterName: 'Sophia Clark', investmentType: 'R&D', investmentAmount: 9800, requestStatus: 'Approved', approvalDate: '2024-08-21', cafAdmin: 'Harper Green', budgetID: 'BUD134' },
        { requestID: 13, requestDate: '2024-08-13', territory: 'North', requesterName: 'Elijah King', investmentType: 'Marketing', investmentAmount: 8900, requestStatus: 'Pending', approvalDate: '', cafAdmin: 'Benjamin Brown', budgetID: 'BUD135' },
        { requestID: 14, requestDate: '2024-08-14', territory: 'South', requesterName: 'Charlotte Harris', investmentType: 'Operations', investmentAmount: 7300, requestStatus: 'Approved', approvalDate: '2024-08-22', cafAdmin: 'Amelia White', budgetID: 'BUD136' },
        { requestID: 15, requestDate: '2024-08-15', territory: 'East', requesterName: 'Luna Walker', investmentType: 'Infrastructure', investmentAmount: 10200, requestStatus: 'Rejected', approvalDate: '2024-08-23', cafAdmin: 'Ethan Blue', budgetID: 'BUD137' }
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

    return (
        <div className="all-requests">
            <h2>All Requests</h2>

            <div className="filters">
                <div>
                    <label>Request ID:</label>
                    <input
                        type="text"
                        value={requestID}
                        onChange={(e) => setRequestID(e.target.value)}
                    />
                </div>
                <div>
                    <label>Min Investment Amount:</label>
                    <input
                        type="number"
                        value={minInvestmentAmount}
                        onChange={(e) => setMinInvestmentAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label>Max Investment Amount:</label>
                    <input
                        type="number"
                        value={maxInvestmentAmount}
                        onChange={(e) => setMaxInvestmentAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label>Request Status:</label>
                    <select
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
                    <label>Territory:</label>
                    <select
                        value={territory}
                        onChange={(e) => setTerritory(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                    </select>
                </div>
                <div>
                    <label>Investment Type:</label>
                    <select
                        value={investmentType}
                        onChange={(e) => setInvestmentType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Operations">Operations</option>
                        <option value="Infrastructure">Infrastructure</option>
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
                        <tr key={row.requestID} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
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

export default AllRequest;
