import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss"
import arrowIcon from "../../assets/images/icons/arrow-icon.png"
function Banner() {
  const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
  <div className="slider-part">
 
        <Slider {...settings}>
          <div className="bannerBg">
            <div className="container">
            <h1>Begin Your Australia <br />
            Education Dream</h1>
            <p>Ready to go for higher education opportunity?</p>
            <a href="" className="btn btn-primary">
             <div className="d-flex text-start align-items-center">
              <span>BOOK YOUR <br />
             APPOINMENT</span>
           <img className="w-100 h-100 ms-3" src={arrowIcon} alt="" />
             </div>
            </a>
            </div>
          </div>
          <div className="bannerBg bannerBgTwo">
          <div className="container">
            <h1>Begin Your Australia <br />
            Education Dream</h1>
            <p>Ready to go for higher education opportunity?</p>
            <a href="" className="btn btn-primary">
             <div className="d-flex text-start align-items-center">
              <span>BOOK YOUR <br />
             APPOINMENT</span>
           <img className="w-100 h-100 ms-3" src={arrowIcon} alt="" />
             </div>
            </a>
            </div>
          </div>
          <div className="bannerBg bannerBgThree">
          <div className="container">
            <h1>Begin Your Australia <br />
            Education Dream</h1>
            <p>Ready to go for higher education opportunity?</p>
            <a href="" className="btn btn-primary">
             <div className="d-flex text-start align-items-center">
              <span>BOOK YOUR <br />
             APPOINMENT</span>
           <img className="w-100 h-100 ms-3" src={arrowIcon} alt="" />
             </div>
            </a>
            </div>
          </div>
        
        </Slider>
  </div>
  );
}

export default Banner;