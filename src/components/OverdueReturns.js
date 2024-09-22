import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OverdueReturns = () => {
    const [returns, setReturns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/issues')
            .then(res => setReturns(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Overdue Returns</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No Book/Movie</th>
                        <th>Name of Book/Movie</th>
                        <th>Membership Id</th>
                        <th>Date of Issue</th>
                        <th>Date of Return</th>
                        <th>Fine Calculations</th>
                    </tr>
                </thead>
                <tbody>
                    {returns.map((returns) => (
                        <tr key={returns._id}>
                            <td>{returns.serialNo}</td>
                            <td>{returns.name}</td>
                            <td>{returns.membershipId}</td>
                            <td>{new Date(returns.dateOfreturns).toLocaleDateString()}</td>
                            <td>{returns.dateOfReturn ? new Date(returns.dateOfReturn).toLocaleDateString() : 'Pending'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    );
};

export default OverdueReturns;
