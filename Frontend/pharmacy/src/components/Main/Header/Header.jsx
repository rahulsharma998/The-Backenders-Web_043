import React from 'react'
import {Link} from 'react-router-dom'
import DoctorLogo from '../../../assets/Images/Doc1.png'
import doctor2 from '../../../assets/Images/Doc2.png'
import medicine from '../../../assets/Images/medicine-1.png'
import medicine2 from '../../../assets/Images/medicine-2.png'
import pharmacyLogo from '../../../assets/Images/icons/drugstore.png'
import prescriptionLogo from '../../../assets/Images/icons/prescription.png'
import hospitalLogo from '../../../assets/Images/icons/hospital.png'
import onlineConsultationLogo from '../../../assets/Images/icons/online.png'
import rightArrow from '../../../assets/Images/icons/right-arrow.svg'
import healthRecord from '../../../assets/Images/icons/medical-report.png'
import './Header.css'
import Navheader from './Nav-header'


const buttonData = [
    {
        id: "pharmacy-logo-div",
        logo: pharmacyLogo,
        logoClass: "pharmacy-logo",
        title: "Pharmacy Near Me",
        subtitle: "FIND STORE",
        styles: {
            backgroundColor: "#e0f7fa", // Light cyan
            borderColor: "#00acc1",    // Cyan border
            color: "#00796b",          // Dark cyan text
            borderRadius: "10px", // Rounded corners
            width: "200px", // Specific width
        },
        route: "/store",
    },
    {
        id: "prescription-logo-div",
        logo: prescriptionLogo,
        logoClass: "logo",
        title: "Get 15% off on Medicines",
        subtitle: "UPLOAD NOW",
        styles: {
            backgroundColor: "#fff3e0", // Light orange
            borderColor: "#ffb74d",     // Orange border
            color: "#e65100",           // Dark orange text
            borderRadius: "10px", // Rounded corners
            width: "200px", // Specific width
        },
        route: "/prescription",
    },
    {
        id: "hospital-logo-div",
        logo: hospitalLogo,
        logoClass: "logo",
        title: "Hospital Visit",
        subtitle: "PRE-BOOK",
        styles: {
            backgroundColor: "#e8f5e9", // Light green
            borderColor: "#66bb6a",     // Green border
            color: "#2e7d32",           // Dark green text
            borderRadius: "10px", // Rounded corners
            width: "200px", // Specific width
        },
        route: "/specialties"
    },
    {
        id: "online-consultation-div",
        logo: onlineConsultationLogo,
        logoClass: "logo",
        title: "Video Consult",
        subtitle: "IN 15 MINS",
        styles: {
            backgroundColor: "#ede7f6", // Light purple
            borderColor: "#7e57c2",     // Purple border
            color: "#4a148c",           // Dark purple text
            borderRadius: "10px", // Rounded corners
            width: "200px", // Specific width
        },
        route: "/specialties"
    },
    {
        id: "health-record-div",
        logo: healthRecord,
        logoClass: "logo",
        title: "Health Records",
        subtitle: "CHECK YOUR UPDATES",
        styles: {
            backgroundColor: "#e3f2fd", // Light purple
            borderColor: "#bbdefb",     // Purple border
            color: "#546e7a",           // Dark purple text
            borderRadius: "10px", // Rounded corners
            width: "200px", // Specific width
        },
        route: "/records"
    },
];
function Header() {
  return (
    <>
    <div className="container2">

        <img src={DoctorLogo} alt="Doctor-Img" id='Doc1' />

        <div className="midBlock">
            <div className="medicine1">
                <img src={medicine} alt="" />
            </div>
            <p>Buy Medicine and Essential</p>
            <div className="medicine2">
                <img src={medicine2} alt="" />
            </div>
        </div>
        <img src={doctor2} alt="" id='Doc2'/>
    </div>

    {/*Third Container for display of */}
    <div className="container3">
    {buttonData.map((button) => (
        <Link
        key={button.id}
        to={button.route}
        style={{
            textDecoration: 'none',
        }}>
        <button
            key={button.id}
            className="homepage-category-btn"
            style={{
                backgroundColor: button.styles.backgroundColor,
                borderColor: button.styles.borderColor,
                color: button.styles.color,
                borderRadius: button.styles.borderRadius,
                width: button.styles.width,
                textAlign: button.styles.textAlign,
                overflow: "hidden",
                whiteSpace: "normal",
                wordBreak: "break-word",
                display: "flex",
                flexDirection: "row", // Align items in a row
                alignItems: "start",
                justifyContent: "start", 
                gap: "13px", // Add spacing between logo and text
            }}
        >
            <div id={button.id} style={{ width: "100%" }}>
                <img
                    src={button.logo}
                    alt=""
                    className={button.logoClass}
                    style={{ marginBottom: "5px" }}
                />
                <div>
                    <p style={{ color: button.styles.color, textAlign: "left" }}>
                        <strong>{button.title}</strong>
                    </p>
                    <p style={{ color: button.styles.color, textAlign:"left",fontSize:"10px" }}>{button.subtitle}</p>
                </div>
                <img src={rightArrow} alt="" className="right-arrow" style={{paddingLeft:"8px"}}/>
            </div>
        </button>
        </Link>
    ))}
</div>
    <div className='container4'>
        <img src="https://images.apollo247.in/images/category/consult_doctor_symtom_checker_web_new..jpeg?tr=q-80,f-webp,w-1250,dpr-3,c-at_max 3750w" alt="" />
    </div>
    </>
  )
}

export default Header

