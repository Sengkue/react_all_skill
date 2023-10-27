import React from 'react';
import './style.css'; // Import the CSS file
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function StoryBook() {
    const data = [
        { id: 1, date: '24.10.2023', time: '9:00-9:30', amount: '30ms', department: 'It department', detail: 'begin new project' },
        { id: 2, date: '25.10.2023', time: '10:00-10:30', amount: '45ms', department: 'HR department', detail: 'interview candidates' },
        { id: 3, date: '26.10.2023', time: '14:00-14:30', amount: '25ms', department: 'Marketing department', detail: 'campaign planning' },
        { id: 4, date: '27.10.2023', time: '11:30-12:00', amount: '30ms', department: 'Finance department', detail: 'budget review' },
        { id: 5, date: '28.10.2023', time: '13:45-14:15', amount: '30ms', department: 'Sales department', detail: 'sales meeting' },
        { id: 6, date: '29.10.2023', time: '15:00-15:30', amount: '30ms', department: 'Customer Support', detail: 'customer inquiries' },
        { id: 7, date: '30.10.2023', time: '9:30-10:00', amount: '30ms', department: 'Research & Development', detail: 'product development' },
        { id: 8, date: '31.10.2023', time: '14:30-15:00', amount: '30ms', department: 'Operations', detail: 'process optimization' },
        { id: 9, date: '01.11.2023', time: '16:15-16:45', amount: '30ms', department: 'Legal department', detail: 'contract review' },
        { id: 10, date: '02.11.2023', time: '10:45-11:15', amount: '30ms', department: 'Quality Assurance', detail: 'quality control' }
     ];

    return (
        <div>
                <h2 style={{ color: '#0A376E' , paddingTop: '10px', paddingBottom: '10px'}}><strong>Story of booking meeting</strong></h2>
            <table>
                <thead >
                    <tr style={{backgroundColor: '#2F80ED', color: 'white'}}>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Department</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td data-label="ID">{item.id}</td>
                            <td data-label="Date">{item.date}</td>
                            <td data-label="Time">{item.time}</td>
                            <td data-label="Amount">{item.amount}</td>
                            <td data-label="Department">{item.department}</td>
                            <td data-label="Detail">{item.detail}</td>
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
