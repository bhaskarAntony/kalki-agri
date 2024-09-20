import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Buyer() {

  // useEffect(() => {
  //   function updateLabelContent() {
  //     const label = document.querySelector('.responsive-buyer-label');
  //     if (window.innerWidth < 600) {
  //       label.textContent = "Mobile.No";
  //     } else {
  //       label.textContent = "Mobile.No(+91)";
  //     }
  //   }

  //   // Run on component mount
  //   updateLabelContent();

  //   // Add event listeners
  //   window.addEventListener('resize', updateLabelContent);

  //   // Clean up event listeners on component unmount
  //   return () => {
  //     window.removeEventListener('resize', updateLabelContent);
  //   };
  // }, []);
  const [loading,setloading] = useState(false)
  const navigate = useNavigate()
  const [isFPO, setIsFPO] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    state: "",
    contact: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    setloading(true)
   try {
    console.log(formData);
    const response=await axios.post("https://kalkiagri-backend.onrender.com/api/new/kalki/buyer",formData)
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
      agree: false,
    });
  };


  return (
    <section className='Buyer-Section '>
      <div className="banner-top  w-100">
        <h1 className="fs-1 fw-bold text-light">
          Are You Buyer?
        </h1>
        <p className="heading"> Register here to directly connect with farmers</p>
      </div>
    <section className="p-3 p-md-5">
   
      <form onSubmit={handleSubmit} className='p-3 p-md-5'>
        <h3>Buyers Register Form</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder='Eg:Suresh N' value={formData.name}
            onChange={handleInputChange} id="name" name='name'/>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea placeholder='Street Address' id="address" rows="3" value={formData.address}
            onChange={handleInputChange} name='address'></textarea>
        </div>
        <div>
          <label htmlFor="district">District:</label>
          <input type="text" placeholder='Eg:Shivmogga' id="district" value={formData.district}
            onChange={handleInputChange} name='district' />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" placeholder='Eg:Karnataka' id="state" value={formData.state}
            onChange={handleInputChange} name='state'/>
        </div>
        <div>
          <label htmlFor="mobile" className='responsive-buyer-label'>Mobile.No:</label>
          <input type="tel" placeholder='Eg:9998887744' id="mobile" required pattern="[0-9]{10}" maxLength={10} value={formData.contact}
            onChange={handleInputChange} name='contact'/>
        </div>
        <span className='Agree-container'>
          <input type='checkbox' id="agree" value={formData.agree}
            onChange={handleInputChange} name='agree'/>
          <p className='declarion-txt'>I Agree to buy yield through the Kalki Agri platform, and I agree to all terms and conditions <a href="#">Learn more.</a></p>
        </span>
        <button>
          {
            loading?"Please wait...":"Register"
          }
        </button>
      </form>
    </section>
    </section>
  );
}

export default Buyer;