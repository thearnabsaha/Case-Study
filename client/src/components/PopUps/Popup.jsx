import React from 'react';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import './Popup.scss';

const Popup = ({ type }) => {
    const isApproved = type === 'approve';
    const Icon = isApproved ? IoCheckmarkCircle : IoCloseCircle;
    const iconClass = isApproved ? 'animate-approve' : 'animate-reject';

    return (
        <div className="popup-overlay">
            <div className={`popup-content ${iconClass}`}>
                <Icon size="120" />
                <span className="popup-message">{isApproved ? 'Approved' : 'Rejected'}</span>
            </div>
        </div>
    );
};

export default Popup;
