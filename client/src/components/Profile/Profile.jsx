import React from 'react';
import './Profile.scss';

const Profile = () => {
    // Example profile data
    const profileData = {
        name: "Arnab Saha",
        employeeCode: "EMP12345",
        territory: "India",
        email: "arnab.saha@example.com",
        position: "Software Engineer",
        department: "Technology",
        phone: "+91-9876543210",
    };

    return (
        <div className="profile-page">
            <div className="profile-card">
                <h2>Profile Details</h2>
                <div className="profile-info">
                    <p><strong>Name:</strong> {profileData.name}</p>
                    <p><strong>Employee Code:</strong> {profileData.employeeCode}</p>
                    <p><strong>Territory:</strong> {profileData.territory}</p>
                    <p><strong>Email:</strong> {profileData.email}</p>
                    {/* <p><strong>Position:</strong> {profileData.position}</p> */}
                    {/* <p><strong>Department:</strong> {profileData.department}</p> */}
                    {/* <p><strong>Phone:</strong> {profileData.phone}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
