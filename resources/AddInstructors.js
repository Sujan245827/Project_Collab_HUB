
import AdminNavbar from './AdminNavbar';


import React, { useState } from 'react';

const AddInstructors = () => {
    const [instructorName, setInstructorName] = useState('');
    const [instructorEmail, setInstructorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [instructors, setInstructors] = useState([
        { name: 'Dr Graeme Salter', added: true },
        { name: 'Dr Ali Braytee', added: true }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        openDashboard();
    };

    const openDashboard = () => {
        
    };

    return (
      <>
      <AdminNavbar />
        <section className="p-5 py-5" style={{ marginTop: '50px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <form className="border rounded p-4 shadow-sm" onSubmit={handleSubmit}>
                            <div className="mb-3 text-start">
                                <label htmlFor="instructorName" className="form-label">Instructor's Name:</label>
                                <input type="text" className="form-control" id="instructorName" placeholder="Enter Instructor's Name" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="instructorEmail" className="form-label">Instructor's Email:</label>
                                <input type="email" className="form-control" id="instructorEmail" placeholder="Enter Instructor's Email" value={instructorEmail} onChange={(e) => setInstructorEmail(e.target.value)} />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Done</button>
                        </form>
                    </div>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }} className="col-lg-6 mt-4 mt-lg-0">
                        <table className="table border rounded shadow-sm">
                            {instructors.map((instructor, index) => (
                                <tr key={index}>
                                    <td>{instructor.name} has been {instructor.added ? 'added' : 'removed'} successfully.</td>
                                    <td className="text-end"><button className="btn btn-secondary">Edit</button></td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};


export default AddInstructors;