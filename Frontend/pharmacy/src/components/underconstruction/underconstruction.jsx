import React from 'react'
import Construction from '../../assets/Images/underconstruction.png'
import Navbar from '../Main/Navbar/navbar'

function Underconstruction() {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center", padding:"50px", gap:"20px"}}>
            <h1>Currently! We are Under Construction</h1>
            <p>This Feature will available soon</p>
            <img src={Construction} alt="construction Image" style={{width:"305px"}}/>

        </div>
    </div>
  )
}

export default Underconstruction
