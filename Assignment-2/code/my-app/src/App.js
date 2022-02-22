import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */}
      <div className="image-container">
        <img className="profile-pic" src={employee.profileImg} alt={"pic"} />
      </div>
      <h1 className="Name">{employee.name}</h1>
      <div>
        <label>Location</label>
        <p>
          <strong>{employee.location}</strong>
        </p>
      </div>
      <div>
        <label>Blood group</label>
        <p>
          <b>{employee.bloodGroup}</b>
        </p>
      </div>
      <div>
        <label>Age</label>
        <p>
          <b>{employee.age}</b>
        </p>
      </div>
    </div>
  );
}

export default App;
