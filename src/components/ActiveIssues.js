import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActiveIssues = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/issues')
            .then(res => setIssues(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Active Issues</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No Book/Movie</th>
                        <th>Name of Book/Movie</th>
                        <th>Membership Id</th>
                        <th>Date of Issue</th>
                        <th>Date of Return</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue) => (
                        <tr key={issue._id}>
                            <td>{issue.serialNo}</td>
                            <td>{issue.name}</td>
                            <td>{issue.membershipId}</td>
                            <td>{new Date(issue.dateOfIssue).toLocaleDateString()}</td>
                            <td>{issue.dateOfReturn ? new Date(issue.dateOfReturn).toLocaleDateString() : 'Pending'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    );
};

export default ActiveIssues;
