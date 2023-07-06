import React from 'react'
// import { FaWallet, FaTree, FaSocks } from 'react-icons/fa';
const Service = ({ icon, title, text }) => {
  return (
    <div className="service d-flex gap-5">
      <div className="service-icon">{icon}</div>
      <div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description fst-italic">{text}</p>
      </div>
    </div>
  )
}

export default Service
