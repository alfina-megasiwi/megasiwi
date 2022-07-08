import './Website.css'
import React from 'react'
import Repair from './repair.svg'

const Website = () => {
  return (
    <div className="remindme-home-sect-2-bg">
    <div className="website-sect-2-container">
        <div className="website-sect-2-icon">
            <img src={Repair} alt="Walkiddie Icon"></img>
        </div>
    </div>
    <div className="website-sect-3-container">
        <h3>This page is under construction</h3>
    </div>
</div>


  )
}

export default Website