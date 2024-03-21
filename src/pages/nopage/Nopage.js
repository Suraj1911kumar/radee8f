import React from 'react'
import './nopage.css'
import logo from '../../assets/images/logo.png'
export default function Nopage() {
  return (
    <div>
        <div className='nopage_main'>
            <div className='row  nopage_container '>
                <img src={logo} alt='logo' className=''></img>
                <h2 className=''>404 Page Not Found</h2>
            </div>
        </div>
    </div>
  )
}
