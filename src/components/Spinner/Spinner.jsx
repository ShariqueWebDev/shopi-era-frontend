import React from 'react'
import "./Spinner.scss";
import spinner from "../../assets/spinner.gif"

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <img src={spinner} alt="" />
    </div>
  )
}

export default Spinner
