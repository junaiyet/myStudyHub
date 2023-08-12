import Logo from "../../assets/images/footer-logo.png"
import "./Footer.scss"
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/icons/Facebook.svg"
import InstagramCircle from "../../assets/images/icons/InstagramCircle.svg"
import TwitterCircled from "../../assets/images/icons/TwitterCircled.svg"
import YouTube from "../../assets/images/icons/YouTube.svg"
function Footer() {
  return (
    <div>
        <div className="map">
   
        </div>
        <div className="footerBg">
            <div className="container">
        <div className="row">
            <div className="col-md-4">
               <img src={Logo} alt="" />
                   <div className="icons">
                    <Link to="Facebook">
                        <img src={Facebook} alt="" />
                    </Link>
                    <Link to="InstagramCircle">
                        <img src={InstagramCircle} alt="" />
                    </Link>
                    <Link to="TwitterCircled">
                        <img src={TwitterCircled} alt="" />
                    </Link>
                    <Link to="YouTube">
                        <img src={YouTube} alt="" />
                    </Link>
                   </div>
            </div>
            <div className="col-md-3">
                <h3>Study Abroad</h3>
                <p>How to choose your destination
                    Study abroad intakes
                    Guide for parents
                    THE World University Rankings
                    </p>
            </div>
            <div className="col-md-3">
                <h3>Useful Links</h3>
                <p>StudyHut Blog
                    Information technology
                    Engineering courses
                    Health and medicine
                    Management courses
                    Student Reviews
                    </p>
            </div>
            <div className="col-md-2">
                <h3>IELTS</h3>
                <p>What is IELTS?
                    Prepare for IELTS
                    Book my IELTS test
                    IELTS test dates
                    </p>
            </div>
        </div>

            </div>
        </div>
        <div className="footerBottomBg">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6"><Link>Copyright © 2023 MyStudyHut</Link></div>
                    <div className="col-md-6 text-end"> <Link to="https://junaiyet.netlify.app/" target="_blank">WebDevelop by @Junaiyet</Link></div>
                </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default Footer