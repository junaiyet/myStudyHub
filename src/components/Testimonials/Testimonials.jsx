
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import testiOne from "../../assets/images/testiOne.png"
import testiTwo from "../../assets/images/testiTwo.png"
import testiThree from "../../assets/images/testiThree.png"
import testiFour from "../../assets/images/testiFour.png"
import CircledPlay from "../../assets/images/icons/CircledPlay.png"
import "./Testimonials.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonials() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
            <div className="sectionHEading">
            <h2>Student Testimonials</h2>
               <div className="rectangle"></div>
        </div>
        <div className="container">
        <Slider {...settings}>
          <div className="testimonialItem">
          <div className="testiItem">
                    <div className="image">
                      <img className='img' src={testiOne} alt="" />
                      <div className="img2">
                        <img onClick={handleShow} src={CircledPlay} alt="" />
                      </div>
                    </div>
                  </div>
          </div>
          <div className="testimonialItem">
          <div className="testiItem">
                    <div className="image">
                      <img className='img' src={testiTwo} alt="" />
                      <div className="img2">
                        <img onClick={handleShow} src={CircledPlay} alt="" />
                      </div>
                    </div>
                  </div>
          </div>
          <div className="testimonialItem">
          <div className="testiItem">
                    <div className="image">
                      <img className='img' src={testiThree} alt="" />
                      <div className="img2">
                        <img onClick={handleShow} src={CircledPlay} alt="" />
                      </div>
                    </div>
                  </div>
          </div>
          <div className="testimonialItem">
          <div className="testiItem">
                    <div className="image">
                      <img className='img' src={testiFour} alt="" />
                      <div className="img2">
                        <img onClick={handleShow} src={CircledPlay} alt="" />
                      </div>
                    </div>
                  </div>
          </div>
 
        </Slider>
            {/* <div className="row">
                <div className="col-md-3">
                  <div className="testiItem">
                    <div className="image">
                      <img className='img' src={testiOne} alt="" />
                      <div className="img2">
                        <img onClick={handleShow} src={CircledPlay} alt="" />
                      </div>
                    </div>
                  </div>
        

                </div>
            </div> */}
        </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/wSbejcs0R3s" title="Student Promo Video   CFA Australia v5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Testimonials