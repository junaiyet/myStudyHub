import "./Blog.scss"

import Blog1 from "../../assets/images/blog1.png"
import Blog2 from "../../assets/images/blog2.png"
import Blog3 from "../../assets/images/blog3.png"
import redArrow from "../../assets/images/icons/redArrow.svg"
function Blog() {
  return (
    <div className="blogBg">
        <div className="container">
        <div className="sectionHEading">
            <h2>News & Blogs</h2>
               <p>Let’s help you live your dream</p>
               <div className="rectangle"></div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="blog-item">
                    <div className="image">
                    <img src={Blog1} alt="" />
                    </div>
                    <div className="text">
                        <span>Dec 03rd, 2022</span>
                        <h3>Controlled Substance Convictions & Immigration Laws</h3>
                        <a href="">Read More <img src={redArrow} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="blog-item">
                    <div className="image">
                    <img src={Blog2} alt="" />
                    </div>
                    <div className="text">
                        <span>Dec 03rd, 2022</span>
                        <h3>Controlled Substance Convictions & Immigration Laws</h3>
                        <a href="">Read More <img src={redArrow} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="blog-item">
                    <div className="image">
                    <img src={Blog3} alt="" />
                    </div>
                    <div className="text">
                        <span>Dec 03rd, 2022</span>
                        <h3>Controlled Substance Convictions & Immigration Laws</h3>
                        <a href="">Read More <img src={redArrow} alt="" /></a>
                    </div>
                </div>
            </div>
       
        </div>

        </div>
    </div>
  )
}

export default Blog