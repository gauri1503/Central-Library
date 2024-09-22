import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/books')
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Master List of Books</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Name of Book</th>
                        <th>Author Name</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Cost</th>
                        <th>Procurement Date</th>
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

export default BookList;
