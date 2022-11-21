import axios from 'axios'
import { useState } from 'react'
function App() {
  const [Attendance, setAttendance] = useState({
    P_no: "",
    Date: "",
    Timein: "",
    Timeout: ""
  })
  const clickhandal = (e) => {
    setAttendance({ ...Attendance, [e.target.name]: e.target.value });
  }
  const handalsumit = () => {


    const options = {
      method: 'POST',
      url: 'http://localhost:4000/attendance/todayatt',
      data: Attendance
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <><div className='container'>
      <div className='h1 text-center text-primary mt-2'>Today Attendance</div>
      <label className="form-label">Choose Date</label>
      <input className="form-control" type="date" name="Date" onChange={clickhandal} value={Attendance.Date} /><br />
      <label className="form-label">Enter P_no</label>
      <input className="form-control" type="number" name="P_no" onChange={clickhandal} value={Attendance.P_no} /><br />
      <label className="form-label"> Choose Timein</label>
      <input className="form-control" type="time" name="Timein" onChange={clickhandal} value={Attendance.Timein} /><br />
      <label className="form-label"> Choose Timeout</label>
      <input className="form-control" type="time" name="Timeout" onChange={clickhandal} value={Attendance.Timeout} /><br />
      <button className='btn btn-success' type='button' onClick={handalsumit}>Submit</button>
      </div>
    </>
  );
}

export default App;
