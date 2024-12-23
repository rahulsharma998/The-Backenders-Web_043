// import Underconstruction from '../underconstruction/underconstruction'

import React, { useState } from "react";
import "./LocationPharma.css";
import Navbar from "../Main/Navbar/navbar"
import Footer from "../Main/Footer/footer"
import { FaUserDoctor } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaLaptopMedical } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";

function Specialties() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Today");
  const [speciality, setSpeciality] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const cities = [
    "New Delhi",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Mumbai",
    "Bangalore",
    "All Cities",
  ];

  const specialties = [
    {
      name: "Cardiology",
      description: "For heart and blood pressure problems Chest pain, Heart Failure, Cholesterol",
      img: "https://cdn-icons-png.flaticon.com/512/387/387577.png",
    },
    {
      name: "Dermatology",
      description: "Specialists for skin and hair treatments,Rashes, Pimples, Acne, Hairfall, Dandruff",
      img: "https://cdni.iconscout.com/illustration/premium/thumb/dermatologist-illustration-download-in-svg-png-gif-file-formats--skin-doctor-specialist-derma-online-healthcare-mobile-app-pack-medical-illustrations-3783994.png?f=webp",
    },
    {
      name: "ENT",
      description: "ENT specialists for Ear, Nose and Throat,Earache, Bad breath, Swollen neck, Vertigo",
      img: "https://icon-library.com/images/ent-icon/ent-icon-7.jpg",
    },
    {
      name: "Neurology",
      description: "Managing issues the nervous system, brain,Stroke, Dementia, Epilepsy",
      img: "https://cdn-icons-png.flaticon.com/512/3974/3974920.png",
    },
    {
      name: "Orthopaedics",
      description: "Managing issues of bones, joints, knees,Knee Pain, Shoulder Pain, Bone deformity",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yEOpNuOX2oehzu1rFyzy-M9pUaPVckuHzg&s",
    },
    {
      name: "General Physician",
      description: "Managing acute medical conditions,Typhoid, Abdominal Pain, Migraine, Infections",
      img: "https://i.pinimg.com/originals/00/f8/e6/00f8e62a60bba40c1cbc109b2a8c559a.png",
    },
   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", {
      location,
      date,
      speciality,
      selectedCity,
      searchInput,
    });
    alert("Your Appointment Successfully Booked")
  };

  return (
    <>
    <Navbar/>
    <div className="location-pharma-container">
      <div className="left_box">
        <div className="find-doctors-container">
          <h2 className="find-doctors-heading">Find Doctors</h2>
          <div className="search-bar">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="city-dropdown"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search Doctors, Specialties, Symptoms, Hospitals etc."
              className="search-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="most-searched">
            <p>Most Searched Cities</p>
            <div className="city-buttons">
              {cities.map((city) => (
                <button
                  key={city}
                  className={`city-button ${
                    selectedCity === city ? "active" : ""
                  }`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="appointment-container">
          <h2 className="sub-heading">Book an Appointment in 3 Simple Steps</h2>
          <div className="appointment-banner">
            <img
              src="https://images.apollo247.in/images/quickBook/quick-book-09-11.png"
              alt="Book Appointment"
              className="appointment-image"
            />
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Preferred Location/Pincode <span className="required">*</span>
              </label>
              <input
                type="text"
                id="location"
                placeholder="Search location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input-field"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Select Date <span className="required">*</span>
              </label>
              <select
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="select-field"
                required
              >
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Custom">Custom</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="speciality" className="form-label">
                Select Speciality <span className="required">*</span>
              </label>
              <select
                id="speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="select-field"
                required
              >
                <option value="">Select Speciality</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className="form-button">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="top_specialties">
          <h3>TOP SPECIALTIES</h3>
        </div>
        <div className="Feeling_container">
            {specialties.map((specialty) => (
              <div key={specialty.name} className="feeling_box">
                <h3>{specialty.name}</h3>
                <img src={specialty.img} alt={specialty.name} />
                <p className="spc_text1">{specialty.description}</p>
              </div>
            ))}
          </div>
      </div>

      <div className="right_box">
        <div className="top-bar">
          <h2 className="section-title">Why Purepharma</h2>
          <a href="tel:+918040245807" className="phone-link">
            +91-8040245807
          </a>
        </div>
        <ul className="list">
          <li>Round-the-clock doctor availability</li>
          <li>Broad range of Specialties</li>
          <li>Order medicines & tests online</li>
          <li>Digitized health records</li>
        </ul>
        <div className="buttons">
          <button className="selected">Text/Audio/Video</button>
          <button>Meet in Person</button>
        </div>
        <div className="instructions">
          <p>
            <FaUserDoctor /> Choose the doctor
          </p>
          <p>
            <FaCalendarAlt /> Book a slot
          </p>
          <p>
            <FaCreditCard /> Make payment
          </p>
          <p>
            <FaLaptopMedical /> Be present in the consult room on Purepharma.com at
            the time of consult
          </p>
          <p>
            <FaClipboardCheck /> Follow Up via text - Valid up to 7 days
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
 
}

export default Specialties
