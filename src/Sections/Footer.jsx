import React from 'react'
import './Footer.css'
import phone from '../Media/Icons/phone.svg'
import mail from '../Media/Icons/mail.svg'
import copy from '../Media/Icons/copy.svg'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="foot_wrap">
                <span><img src={phone} alt="" /> <p>+2348121538461</p></span>
                <span><img src={mail} alt="" /> <p>onabulefemi@gmail.com</p></span>
            </div>
            <div className="foot_wrap">
                <span><img src={copy} alt="" /> <p>Copyright - Oluwafemi O.O - 2023</p></span>
            </div>
        </div>
    </div>
  )
}

export default Footer