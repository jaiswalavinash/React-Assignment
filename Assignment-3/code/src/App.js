import React from "react";
import logo from "./logo.svg";
import "./App.css";

var arrowLeft = "<";
var arrowRight = ">";
function App() {
  const employeeInfo = {
    Name: "Alan Ford",
    EmployeeId: "00005152",
    Appointment: new Date().toLocaleDateString(),
    Email: "alon.form@email.nl",
    phone: "+" + 31123456789,
  };
  const orderInfo = {
    status: "In Progress",
    Door: "Mark",
    Time: new Date().toLocaleTimeString(),
  };
  const productList = {
    img: "https://www.w3schools.com/howto/img_avatar.png",
    title: "Boltaart Bosbessen",
  };
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className="header-container">
        <div className="nav">
          <label>{arrowLeft}</label>
          <h1 className="name">{employeeInfo.Name}</h1>
          <span className="id">{employeeInfo.EmployeeId}</span>
          <button className="btn">Print</button>
        </div>
      </div>
      <div className="customer-info">
        <p className="text">
          <span>
            <b>
              Appointment On <span></span>
            </b>
          </span>
          {employeeInfo.Appointment}
        </p>
        <p className="text">
          <b>
            Email: <span></span>
          </b>
          {employeeInfo.Email}
        </p>
        <p className="text">
          <span>
            <b>
              Phone <span></span>
            </b>
          </span>
          {employeeInfo.phone}
        </p>
      </div>
      <div className="order-info">
        <div className="child">
          <p className="text1">
            <b>Status</b>
          </p>
          <p className="status">
            <span className="dot"></span>
            <span> </span>
            {orderInfo.status}
          </p>
        </div>
        <div className="child">
          <p className="text1">
            <b>Door</b>
          </p>
          <p className="order-status">{orderInfo.Door}</p>
        </div>
        <div className="child">
          <p className="text1">
            <b>Time</b>
          </p>
          <p className="order-status">{orderInfo.Time}</p>
        </div>
      </div>
      <div className="product-list">
        <div className="check">
          <input type="checkbox" />
        </div>
        <div className="pic">
          <img src={productList.img} alt="pic" width={"150px"} />
        </div>
        <div className="title">
          <p>
            <b>{productList.title}</b>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            aut nostrum molestiae rem dicta, doloremque atque, temporibus
            laborum earum accusantium perferendis vero itaque eum expedita!
          </p>
        </div>
        <div className="arrowright">{arrowRight}</div>
      </div>
    </div>
  );
}
export default App;
