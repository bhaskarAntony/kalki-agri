import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Seller() {
  const [loading,setloading] = useState(false)
  const navigate = useNavigate()
  const [isFPO, setIsFPO] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    state: "",
    contact: "",
    isFpo:isFPO,
    fpoName: "",
    ceoName: "",
    fpoRegNo: "",
    fpoType: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFPOChange = (e) => {
    setIsFPO(e.target.value === "yes");
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setloading(true)
   try {
    console.log(formData);
    const response=await axios.post("https://kalkiagri-backend.onrender.com/api/new/kalki/seller",formData)
    if(response.status==200){
      setloading(false)
      alert("Form Submitted!");
      navigate("/")

    }
    
   } catch (error) {
    console.log(error)
    setloading(false)
   }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      address: "",
      district: "",
      state: "",
      contact: "",
      isFpo:"",
      fpoName: "",
      ceoName: "",
      fpoRegNo: "",
      fpoType: "",
      agree: false,
    });
    setIsFPO(false);
  };

  return (
    <section className="about-container">
      <div className="banner-top my-100">
        <h1 className="fs-1 fw-bold text-light">Are you Buyer?</h1>
      </div>
    <div className="container-fluid">
    <div className="row p-0 p-md-5 py-3">
    <div className="col-md-8 m-auto">
    <div className="card p-3 form-container">
        <h2>Seller Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="align-form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Eg:Suresh.M"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label>Address:</label>
          <textarea
            type="text"
            name="address"
            placeholder="Street address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <label>District:</label>
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleInputChange}
          />
          <label>State:</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
          />
          <label>Contact No:</label>
          <input
            type="tel"
            name="contact"
            placeholder="Enter 10-Digit number"
            value={formData.contact}
            onChange={handleInputChange}
          />
          <label>
            Do you<br></br> come under FPO/C?
          </label>
          <div className="Yes-No">
            <input
              type="radio"
              name="fpoStatus"
              value="yes"
              onChange={handleFPOChange}
            />{" "}
            Yes
            <input
              type="radio"
              name="fpoStatus"
              value="no"
              onChange={handleFPOChange}
            />{" "}
            No
          </div>
          </div>

          <div className={`fpo-section ${isFPO ? "show" : "hide"}`} >
            <h3>If Yes:</h3>
            <div className="fpo-section-form">
            <label>Name of the FPO:</label>
            <input
              type="text"
              name="fpoName"
              placeholder="Name of the FPO"
              value={formData.fpoName}
              onChange={handleInputChange}
            />

            <label>CEO Name:</label>
            <input
              type="text"
              name="ceoName"
              placeholder="CEO Name"
              value={formData.ceoName}
              onChange={handleInputChange}
            />

            <label>FPO Reg. No:</label>
            <input
              type="text"
              name="fpoRegNo"
              placeholder="Reg. No"
              value={formData.fpoRegNo}
              onChange={handleInputChange}
            />

            <label>Type of FPO:</label>
            <input
              type="text"
              name="fpoType"
              placeholder="Type of FPO"
              value={formData.fpoType}
              onChange={handleInputChange}

            />
            </div>
            <div className="fpo-section-button mt-3">

            <button type="submit" className="submit-btn">
              Submit
             </button>
             <button type="button" className="clear-btn" onClick={handleClear}>
            Clear
          </button>
          </div>
            
          </div>
          <div className="fpo-section-checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleInputChange}
          />{" "}
         <span> I agree to sell the yield through the Kalki Agri platform <a href="#">Learn more</a> </span>
          </div>
          
          <button type="submit" className="submit-btn-1">
            {
              loading?"Please wait...":"Register"
            }
          </button>
         
        </form>
      </div>
    </div>
     </div>
    </div>
    </section>
  );
}

export default Seller;