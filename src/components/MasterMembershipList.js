import React, { useEffect, useState } from 'react';

const MasterMembershipList = () => {
    const [books, setMembership] = useState([]);

    return (
        <div>
            <h2>Master List of Memberships</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Name of Member</th>
                        <th>Contact Number</th>
                        <th>Aadhar Card No</th>
                        <th>Start Date of Membership</th>
                        <th>End Date of Membership</th>
                        <th>Status(Active/Inactive)</th>
                        <th>Amount Pending(Fine)</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.serialNo}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.category}</td>
                            <td>{book.status}</td>
                            <td>{book.cost}</td>
                            <td>{new Date(book.procurementDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MasterMembershipList;
