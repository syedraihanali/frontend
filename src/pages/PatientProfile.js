// /Users/star/Capstone/Capstone-Project-/frontend/src/pages/PatientProfile.js

import React, { useState, useEffect, useContext } from 'react';
import './PatientProfile.css';
import { AuthContext } from '../AuthContext'; // Import AuthContext

function PatientProfile() {
  const { auth } = useContext(AuthContext); // Access auth state
  const [patient, setPatient] = useState(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track any errors

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        // Fetch patient details
        const patientResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/patients/${auth.user.id}`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`,
          },
        });

        if (!patientResponse.ok) {
          throw new Error('Failed to fetch patient data');
        }

        const patientData = await patientResponse.json();
        setPatient(patientData);

        // Fetch upcoming appointments
        const upcomingResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/patients/${auth.user.id}/upcomingAppointments`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`,
          },
        });

        if (!upcomingResponse.ok) {
          throw new Error('Failed to fetch upcoming appointments');
        }

        const upcomingData = await upcomingResponse.json();
        setUpcomingAppointments(upcomingData);

        // Fetch appointment history
        const historyResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/patients/${auth.user.id}/appointmentHistory`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`,
          },
        });

        if (!historyResponse.ok) {
          throw new Error('Failed to fetch appointment history');
        }

        const historyData = await historyResponse.json();
        setAppointmentHistory(historyData);

        setLoading(false); // Set loading to false once all data is fetched
      } catch (err) {
        console.error('Error fetching patient data:', err);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchPatientData();
  }, [auth.user.id, auth.token]);

  if (loading) {
    return <div className="patient-profile">Loading patient data...</div>;
  }

  if (error) {
    return <div className="patient-profile">{error}</div>;
  }

  if (!patient) {
    return <div className="patient-profile">No patient data available.</div>;
  }

  return (
    <div className="patient-profile">
      <h1>Welcome back, {patient.FullName}</h1>
      <h2>Welcome to Destination Health. How can we help you today?</h2>

      {/* Patient Details Section */}
      <section className="patient-details">
        <h3>Your Details</h3>
        <p><strong>Full Name:</strong> {patient.FullName}</p>
        <p><strong>Email:</strong> {patient.Email}</p>
        <p><strong>Phone Number:</strong> {patient.PhoneNumber}</p>
        <p><strong>Birth Date:</strong> {patient.BirthDate}</p>
        <p><strong>Address:</strong> {patient.Address}</p>
        <p><strong>Gender:</strong> {patient.Gender}</p>
      </section>

      {/* Upcoming Appointments Section */}
      <section className="appointments-section">
        <h3>Upcoming Appointments</h3>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {upcomingAppointments && upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <tr key={appointment.AppointmentID}>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td>
                  <td>{`${appointment.startTime} - ${appointment.endTime}`}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No upcoming appointments.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Appointment History Section */}
      <section className="history-section">
        <h3>Appointment History</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointmentHistory && appointmentHistory.length > 0 ? (
              appointmentHistory.map((appointment) => (
                <tr key={appointment.AppointmentID}>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No appointment history.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default PatientProfile;
