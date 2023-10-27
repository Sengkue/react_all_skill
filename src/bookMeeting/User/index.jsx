import React from 'react';
import './style.css'; // Import the CSS file
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function StoryBook() {
    const data = [
        { id: 1, FirstName: 'John', LastName: 'Doe', Age: 30, Department: 'IT', Phone: '123-456-7890', Address: '123 Main St' },
        { id: 2, FirstName: 'Alice', LastName: 'Smith', Age: 25, Department: 'HR', Phone: '987-654-3210', Address: '456 Elm St' },
        { id: 3, FirstName: 'Bob', LastName: 'Johnson', Age: 35, Department: 'Marketing', Phone: '555-123-4567', Address: '789 Oak St' },
        { id: 4, FirstName: 'Emily', LastName: 'Brown', Age: 28, Department: 'Finance', Phone: '777-888-9999', Address: '321 Maple Ave' },
        { id: 5, FirstName: 'David', LastName: 'Wilson', Age: 40, Department: 'Sales', Phone: '222-333-4444', Address: '654 Pine Rd' },
        { id: 6, FirstName: 'Linda', LastName: 'Clark', Age: 29, Department: 'Customer Support', Phone: '333-222-1111', Address: '987 Cedar Ln' },
        { id: 7, FirstName: 'Mark', LastName: 'Roberts', Age: 33, Department: 'R&D', Phone: '999-888-7777', Address: '234 Birch St' },
        { id: 8, FirstName: 'Sarah', LastName: 'Taylor', Age: 27, Department: 'Operations', Phone: '666-555-4444', Address: '567 Redwood Dr' },
        
    ];
    

    return (
        <div>
            <h2 style={{ color: '#0A376E', paddingTop: '10px', paddingBottom: '10px' }}><strong>Users</strong></h2>
            <table>
                <thead>
                    <tr style={{ backgroundColor: '#2F80ED', color: 'white' }}>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Department</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td data-label="ID">{item.id}</td>
                            <td data-label="First Name">{item.FirstName}</td>
                            <td data-label="Last Name">{item.LastName}</td>
                            <td data-label="Age">{item.Age}</td>
                            <td data-label="Department">{item.Department}</td>
                            <td data-label="Phone">{item.Phone}</td>
                            <td data-label="Address">{item.Address}</td>
                            <td data-label="Actions">
                                <ModeEditIcon color="primary" /> <DeleteForeverIcon color="error" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StoryBook;
