import "./BookNow.scss"
import { Link } from "react-router-dom";
import booknow from "../../assets/images/booknow.png"
import arrowIcon from "../../assets/images/icons/arrow-icon.png"
function BookNow() {
  return (
    <div id="StudyAbroad">
        <div className="sectionHEading">
            <h2>Study Abroad free Assessment</h2>
               <p>Fill in your details below to get a personalised advice</p>
               <div className="rectangle"></div>
        </div>
        <div className="container">
        <div  className="bookFrom">
            <div className="image">
                <img src={booknow} alt="" />
            </div>
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
        </div>

        </div>
    </div>
  )
}

export default BookNow