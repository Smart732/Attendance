import axios from 'axios'
import { useState } from 'react'
function App() {
  const [set, setiem] = useState(false)
  const [fill, setfill] = useState(false)
  const [insert, setinsert] = useState(false)
  const [Attendance, setAttendance] = useState({
    P_no: "",
    Date: "",
    Timein: "",
    Timeout: "",
    Month: ""
  })
  const clickhandal = (e) => {
    setAttendance({ ...Attendance, [e.target.name]: e.target.value });
  }
  const handalsumit = () => {
    setiem(false)
    setfill(false)
    setinsert(false)
    const options = {
      method: 'POST',
      url: 'https://7yv9hj.deta.dev/att/todayatt',
      data: Attendance
    };

    axios.request(options).then(function (response) {
      // console.log(response.status);
      if (response.status === 211) {
        setiem(true)
        setTimeout(hide, 2000);
        function hide() {
          document.getElementById("hide").style.display = "none";
        }
      }
      else if (response.status === 200) {

        setinsert(true);

        setTimeout(hide1, 2000);
        function hide1() {
          document.getElementById("hide1").style.display = "none";
        }
      } else if (response.status === 212) {

        setfill(true);
        setTimeout(hide2, 2000);
        function hide2() {
          document.getElementById("hide2").style.display = "none";
        }
      }

    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <><div className='container'>
      {set ? <div id="hide" className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attendance </strong>{"Pro_no" + Attendance.P_no} Attendance already Submited
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> : ""}
      {insert ? <div id="hide1" className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attendance </strong>{"Pro_no" + Attendance.P_no} successfully Submited
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> : ""}
      {fill ? <div id="hide2" className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Can't be Blank Any Field</strong>{"Pro_no" + Attendance.P_no} successfully Submited
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> : ""}
      <div className='h1 text-center text-primary mt-2'>Today Attendance</div>
      <label className="form-label">Enter P_no</label>
      <input className="form-control" type="number" name="P_no" onChange={clickhandal} value={Attendance.P_no} /><br />
      <label className="form-label">Choose Month</label>
      <input className="form-control" name='Month' type="month" onChange={clickhandal} value={Attendance.Month} /><br />
      <label className="form-label">Choose Date</label>
      <input className="form-control" type="date" name="Date" onChange={clickhandal} value={Attendance.Date} /><br />
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
