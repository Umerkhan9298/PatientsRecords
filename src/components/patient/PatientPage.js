import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import PatientDetails from "./PatientDetails";

function PatientPage() {
  let data = useSelector((state) => state.patient[0]?.patientRecordList.data);
  console.log("Global State", data);
  const [patient, setPatient] = useState([]);
  const patientNames = [
    "John Oliver",
    "Bob Martin",
    "Francesco De Mello",
    "Helena Fernandez",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const val = e.target.value;
    console.log(val);
    setPatient(data.filter((data) => data.userName === val));
  };

  return (
    <div className="container">
      <h2>PatientPage</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <select className="form-control col-md-4" onChange={handleChange}>
                <option value="">Select</option>
                {patientNames.map((p, index) => (
                  <option value={p} key={index}>
                    {p}
                  </option>
                ))}
              </select>
              &nbsp;
              {/* <Button
                type="primary"
                onClick={handleSubmit}
                loading
                style={{ height: "38px" }}
              >
                Search
              </Button> */}
            </div>
          </div>
        </div>
      </form>
      {/* {JSON.stringify(data)} */}
      {/*       {data.map((data) => (
        <h1 key={data.id}>{data.userName}</h1>
      ))}*/}
      <PatientDetails patient={patient} />
    </div>
  );
}

export default PatientPage;
