import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus, updateUserStatus } from '../../store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Modal, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

const AdminHome = () => {
  const data = useSelector((state) => state.hr.data);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setMessage('');
  };

  const handleSendMessage = () => {
    if (selectedUser) {
      dispatch(updateUserStatus({ userId: selectedUser.id,  }));
      handleCloseModal();
    }
  };

  const handleStatusChange = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  const generatePDF = (user) => {
    const doc = new jsPDF();
  
    // Add a centered and bold heading
    const headingText = 'User Information';
    const headingFontType = 'bold';
    const headingFontSize = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const headingTextWidth = doc.getStringUnitWidth(headingText) * headingFontSize / doc.internal.scaleFactor;
    const headingX = (pageWidth - headingTextWidth) / 2;
    doc.setFont('helvetica', headingFontType);
    doc.setFontSize(headingFontSize);
    doc.text(headingX, 20, headingText);
  
    // Add user information to the PDF with improved formatting
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(`User ID: ${user.id}`, 20, 40);
    doc.text(`Name: ${user.firstname} ${user.lastname}`, 20, 50);
    doc.text(`Email: ${user.email}`, 20, 60);
    doc.text(`Phone: ${user.mobile}`, 20, 70);
    doc.text(`Role: ${user.role}`, 20, 80);
    doc.text(`Address: ${user.address}`, 20, 90);
    doc.text(`Education: ${user.Education}`, 20, 100);
  
    // Add work experience with improved formatting
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Work Experience', 20, 120);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    let startY = 130;
    user.work.forEach((workItem) => {
      doc.text(`Job Title: ${workItem.jobtitle}`, 20, startY);
      doc.text(`Company: ${workItem.company}`, 20, startY + 10);
      doc.text(`Start Date: ${workItem.startdate}`, 20, startY + 20);
      doc.text(`End Date: ${workItem.enddate}`, 20, startY + 30);
      startY += 40;
    });
  
    // Add technical skills with improved formatting
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Technical Skills', 20, startY + 10);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(user.techinical_skill.join(', '), 20, startY + 20);
  
    // Save the PDF with the user's name as the file name
    doc.save(`${user.firstname}_${user.lastname}_profile.pdf`);
  };

  return (
    <div>
      <h1>User Management</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Address</th>
            <th>Education</th>
            <th>Work Experience</th>
            <th>Technical Skills</th>
            <th>Status</th>
            <th>More data</th>
            <th>Download data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.firstname} ${user.lastname}`}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.Education}</td>
              <td>{user.address}</td>
              <td>{user.Education}</td>
              <td>
                {user.work.map((workItem) => (
                  <div key={workItem.jobtitle}>
                    <strong>{workItem.jobtitle}</strong> at {workItem.company}
                    <br />
                    Start Date: {workItem.startdate}, End Date: {workItem.enddate}
                    <br />
                  </div>
                ))}
              </td>
              <td>{user.techinical_skill.join(', ')}</td>
              <td>
                <button
                  className={`btn btn-${user.status ? '' : 'primary'}`}
                  onClick={() => handleStatusChange(user.id)}
                >
                  {user.status ? 'Accept' : 'Click to accept'}
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => handleShowModal(user)}>
                  Request more data
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => generatePDF(user)}>
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for More Data */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Request More Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="messageInput">Enter your message:</label>
            <input
              type="text"
              id="messageInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminHome;
