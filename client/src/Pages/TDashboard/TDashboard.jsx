import React, { useState } from 'react';
import './TDashboard.scss'; // Adjust the path as necessary
import { FaList, FaUser } from 'react-icons/fa';
import Profile from '@/components/Profile/Profile';
import TallRequest from '@/components/TallRequest/TallRequest';

const TDashboard = () => {
    const [activeTab, setActiveTab] = useState('all-request');

    // Function to render the corresponding content based on activeTab
    const renderContent = () => {
        switch (activeTab) {
            case 'all-request':
                return <TallRequest />;
            case 'your-profile':
                return <Profile />;
            default:
                return <TallRequest />;
        }
    };

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li 
                        className={activeTab === 'all-request' ? 'active' : ''} 
                        onClick={() => setActiveTab('all-request')}
                    >
                        <a href="#all-request">
                            <FaList className="icon" /> All Request
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
    );
};

export default TDashboard;
