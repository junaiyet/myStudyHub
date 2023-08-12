import "./Contact.scss"
import { Link } from "react-router-dom";
import contactBg from "../../assets/images/contactBg.png"
import arrowIcon from "../../assets/images/icons/arrow-icon.png"
import call from "../../assets/images/icons/call.png"
import mail from "../../assets/images/icons/mail.png"
import map from "../../assets/images/icons/map.png"
function Contact() {
  return (
    <div>
    <div className="sectionHEading">
        <h2>Get In Touch With Us</h2>
           <p>Please leave a message if you have any question or experiencing any <br /> diffculty using our webs.Our team will get back to you shortly.</p>
           <div className="rectangle"></div>
    </div>
    <div className="container">
    <div  className="bookFrom">
    <Link to="/asdf" className="inputbox row">
           <div className="col-md-6">
            <input type="text" readOnly placeholder="Full Name *" name="" id="" />
           </div>
           <div className="col-md-6">
           <input type="text" readOnly placeholder="Last Name *" name="" id="" />
           </div>
           <div className="col-md-6">
           <input type="text" readOnly placeholder="Email Address *" name="" id="" />
           </div>
           <div className="col-md-6">
           <input type="text" readOnly placeholder="Mobile Number *" name="" id="" />
           </div>
           <div className="col-md-6">
           <input type="text" readOnly placeholder="Study Destination" name="" id="" />
           </div>
           <div className="col-md-6">
           <input type="text" readOnly placeholder="When Do You Plan To Study?" name="" id="" />
           </div>
           <div className="col-md-12">
           <input type="text" readOnly placeholder="Preferred Study Level" name="" id="" />
           </div>
           <div className="col-md-6">
           <a href="" className="btn btn-primary">
         <div className="d-flex text-start align-items-center">
          <span>BOOK YOUR SEAT</span>
           <img className="ms-3" src={arrowIcon} alt="" />
         </div>
        </a>
           </div>
        </Link>
        <div className="image">
            <img src={contactBg} alt="" />
            <div className="content">
                <h4>Contact Details</h4>
                <a href="callto:+91 9999999999"><img src={call} alt="" /> +91 9999999999</a>
                <a href="mailto:hello@globalcounsel.com"><img src={mail} alt="" /> hello@globalcounsel.com</a>
                <a href=""> <img src={map} alt="" /> SCO - 252/545 Mohali, Chandigarh, 160022</a>
            </div>
        </div>
        
    </div>

    </div>
</div>
  )
}

export default Contact