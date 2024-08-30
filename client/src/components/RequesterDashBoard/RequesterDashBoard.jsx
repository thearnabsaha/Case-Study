import React, { useState } from 'react'
import "@/components/RequesterDashBoard/RequesterDashBoard.scss"
import { FaPlus, FaList, FaCheck, FaTimes, FaUser } from 'react-icons/fa';
import NewRequest from '../NewRequest/NewRequest';
import AllRequest from '../AllRequest/AllRequest';
import Profile from '../Profile/Profile';
const RequesterDashBoard = () => {
    const [activeTab, setActiveTab] = useState('new-request');

    // Function to render the corresponding content based on activeTab
    const renderContent = () => {
        switch (activeTab) {
            case 'new-request':
                return <NewRequest/>;
            case 'all-request':
                return <AllRequest/>;
            case 'approved-request':
                return <div><h2>Approved Request Component</h2></div>;
            case 'rejected-request':
                return <div><h2>Rejected Request Component</h2></div>;
            case 'your-profile':
                return <Profile/>;
            default:
                return <NewRequest/>;
        }
    };
  return (
    <>
        <div className="sidebar">
                <ul>
                    <li 
                        className={activeTab === 'new-request' ? 'active' : ''} 
                        onClick={() => setActiveTab('new-request')}
                    >
                        <a href="#new-request">
                            <FaPlus className="icon" /> New Request
                        </a>
                    </li>
                    <li 
                        className={activeTab === 'all-request' ? 'active' : ''} 
                        onClick={() => setActiveTab('all-request')}
                    >
                        <a href="#all-request">
                            <FaList className="icon" /> All Request
                        </a>
                    </li>
                    <li 
                        className={activeTab === 'approved-request' ? 'active' : ''} 
                        onClick={() => setActiveTab('approved-request')}
                    >
                        <a href="#approved-request">
                            <FaCheck className="icon" /> Approved Request
                        </a>
                    </li>
                    <li 
                        className={activeTab === 'rejected-request' ? 'active' : ''} 
                        onClick={() => setActiveTab('rejected-request')}
                    >
                        <a href="#rejected-request">
                            <FaTimes className="icon" /> Rejected Request
                        </a>
                    </li>
                    <li 
                        className={activeTab === 'your-profile' ? 'active' : ''} 
                        onClick={() => setActiveTab('your-profile')}
                    >
                        <a href="#your-profile">
                            <FaUser className="icon" /> Your Profile
                        </a>
                    </li>
                </ul>
            </div>
            <div className="content">
                {renderContent()}
            </div>
    </>
  )
}

export default RequesterDashBoard