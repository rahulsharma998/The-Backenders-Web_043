import React, { useState, useRef } from 'react';
import "./Prescription.css"
import Navbar from '../Main/Navbar/navbar';


function Prescription() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { 
      setSelectedFile(file);
    } else {
      alert('File size should be less than 10MB');
    }
  };

  const handleGalleryClick = () => {
    fileInputRef.current.click();
  };

  return (
    <> 
    <Navbar/>
     <h2>UPLOAD PRESCRIPTIONS</h2>
      <div className="prescription-container">
    
      
      <div className="upload-container">
        <div className="upload-panel">
          <h2>Choose from the following to upload prescription:</h2>
          
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            style={{ display: 'none' }}
          />
          
          <button className="gallery-btn" onClick={handleGalleryClick}>
            <span className="icon">🖼️</span>
            CHOOSE FROM GALLERY
          </button>
          
          <div className="divider">OR</div>
          
          <button className="eprescription-btn">
            <span className="icon">📄</span>
            SELECT FROM E-PRESCRIPTION
          </button>
          
          <div className="preview-area">
            {selectedFile && (
              <div className="selected-file">
                <img 
                  src={URL.createObjectURL(selectedFile)} 
                  alt="Selected prescription"
                />
              </div>
            )}
            {!selectedFile && (
              <p>Uploaded Prescriptions will be shown here</p>
            )}
          </div>
        </div>

        <div className="requirements-panel">
          <h2>Make sure the prescription you upload contains the following elements:</h2>
          
          <div className="requirements-grid">
            <div className="requirement-item">
              <img src="https://images.apollo247.in/images/upload_prescription/ic_doctor2.svg?tr=q-80,w-100,dpr-1,c-at_max" alt="Doctor" />
              <p>Doctor Details</p>
            </div>
            
            <div className="requirement-item">
              <img src="https://images.apollo247.in/images/upload_prescription/ic_date.svg?tr=q-80,w-100,dpr-1,c-at_max" alt="Date" />
              <p>Date of Prescription</p>
            </div>
            
            <div className="requirement-item">
              <img src="https://images.apollo247.in/images/upload_prescription/ic_mother.svg?tr=q-80,w-100,dpr-1,c-at_max"alt="Patient" />
              <p>Patient Details</p>
            </div>
            
            <div className="requirement-item">
              <img src="https://images.apollo247.in/images/upload_prescription/ic_medicine.svg?tr=q-80,w-100,dpr-1,c-at_max" alt="Medicine" />
              <p>Medicine Details</p>
            </div>
            
            <div className="requirement-item">
              <div className="size-limit">10 MB</div>
              <p>Maximum File Size</p>
            </div>
          </div>
          
          <div className="warning">
            <span className="warning-icon">⚠️</span>
            <p>Our pharmacist will dispense medicines only if the prescription is valid & it meets all government regulations.</p>
          </div>
        </div>

       
        <div className="sample-panel">
          <h2>View Sample Prescription below:</h2>
          <div className="sample-prescription">
            <img src="https://images.apollo247.in/images/prescriptionsampleImg/Samle_rx_3.svg?tr=q-60,w-400,dpr-2,c-at_max" alt="Sample prescription" />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Prescription;