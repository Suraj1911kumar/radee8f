import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/images/cunstructq.jpg"
import './undermaintain.css'

const UnderMaintainance = () => {
    return (
        <div className='undermaintain'>
            <img src={image} alt='page under construction' />
            <h3>This page is under maintainance</h3>
            <h4>Please Go back to HOME</h4>
            <Link to="/home">
                <button className='btn' > Home </button>
            </Link>
        </div>
    )
}

export default UnderMaintainance
