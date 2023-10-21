import vectorImage from "../assets/images/Vectors-Wrapper.svg";
import securityImage from "../assets/images/icons8-security-lock.png";
import starImage from "../assets/images/trustpilot-logo-1.png";
import trustImage from "../assets/images/icons8-trust-48-1.png";

const Header = (props) => {

  const {headerTitle} = props;

  return (
      <section className="top-section">
        <div className="heading-content">
          <div className="w-layout-blockcontainer heading-img w-container">
            <div className="logo-img-2">
              <h1 className="heading-6">nucleus</h1>
            </div>
            <div className="w-layout-blockcontainer container-15 w-container">
              <img src={vectorImage} loading="lazy" alt="" className="image-5" />
              <div className="text-block-4">
                LinkedIn
                <br />
                <span className="text-span-3">Fastest Growing 2023</span>
              </div>
            </div>
          </div>
          <div className="w-layout-blockcontainer text-container w-container caption">
            <div className="text-payment">{headerTitle}</div>
          </div>
          <div className="w-layout-blockcontainer text-container w-container">
            <div className="div-elementor-image-box-wrapper">
              <div className="figure">
                <img
                  src={securityImage}
                  loading="lazy"
                  width="31"
                  height="31"
                  alt=""
                  className="icons8-security-lock-48-1-png"
                />
              </div>
              <div className="div-elementor-image-box-content">
                <div className="text-9">Secure Payment</div>
                <div className="text-10">By Razorpay</div>
              </div>
            </div>
            <div className="div-elementor-image-box-wrapper">
              <div className="figure-2">
                <img
                  src={starImage}
                  loading="lazy"
                  width="26"
                  height="24"
                  alt=""
                  className="icons8-security-lock-48-1-png"
                />
              </div>
              <div className="div-elementor-image-box-content-2">
                <div className="text-9">TrustScore 4.7/5</div>
                <div className="text-10">After 5000+ reviews</div>
              </div>
            </div>
            <div className="div-elementor-image-box-wrapper">
              <div className="figure user_img">
                <img
                  src={trustImage}
                  loading="lazy"
                  width="31"
                  height="31"
                  alt=""
                  className="icons8-security-lock-48-1-png"
                />
              </div>
              <div className="div-elementor-image-box-content-3">
                <div className="text-9">User Trusted</div>
                <div className="text-10">500,000+ Happy Learners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Header;
