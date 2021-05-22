import React from "react";
import PropTypes from "prop-types";

const PatientDetails = ({ patient }) => {
  console.log(patient);
  return (
    <div className="container">
      <div className="col-md-12">
        {patient.length > 0 &&
          patient?.map((p) => (
            <>
              <h1>{p.userName}</h1>
              <h3>{p.userDob}</h3>
            </>
          ))}
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Diagnosis</th>
              <th>Weight</th>
              <th>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {patient?.map((p) => (
              <tr>
                {console.log(p)}
                <td>{p.userId}</td>
                <td>{p.userDob}</td>
                <td>{p.diagnosis.name}</td>
                <td>{p.meta.weight}</td>
                <td>{p.doctor.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientDetails;
