import React, { useEffect, useState } from 'react';

const IssueRequests = () => {
    const [requests, setIssueRequests] = useState([]);

    return (
        <div>
            <h2>Pending Issue Requests</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Membership Id</th>
                        <th>Name of Book/Movie</th>
                        <th>Requested Date</th>
                        <th>Request Fulfilled Date</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request._id}>
                            <td>{request.membershipId}</td>
                            <td>{request.name}</td>
                            <td>{new Date(request.dateOfIssue).toLocaleDateString()}</td>
                            <td>{request.dateOfRequests ? new Date(request.dateOfRequests).toLocaleDateString() : 'Pending'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    );
};

export default IssueRequests;
