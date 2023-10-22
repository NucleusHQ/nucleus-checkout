import rzpPayment from "../assets/images/rzp_payment_icon.svg";

const PaymentGatewaySection = (props) => {
    const {handleRazorpayDisplay, totalPayable} = props;

    const handlePaymentClick = () => {
      handleRazorpayDisplay(totalPayable);
    }
    return (
        <section className="section-15">
        <div className="div-block-12">
          <div className="w-layout-blockcontainer container-30 w-container">
            <div className="text-block-33">
              <strong className="bold-text-6">
                Credit Card/Debit Card/NetBanking{" "}
              </strong>
            </div>
            <img
              width="189"
              loading="lazy"
              alt=""
              src={rzpPayment}
              className="image-3"
            />
          </div>
          <div className="w-layout-blockcontainer container-31 w-container">
            <div className="text-block-37">
              Pay securely by Credit or Debit card or Internet Banking through
              Razorpay.
            </div>
          </div>
        </div>
        <div className="form-block-2 w-form">
          <form
            id="email-form-4"
            name="email-form-4"
            data-name="Email Form 4"
            method="get"
            data-wf-page-id="64fda7155a16efb4bef04c53"
            data-wf-element-id="37ce50dc-c5ee-add9-eb7f-e318a236fc77"
          >
            <label htmlFor="name" className="field-label-9">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <a href="#" target="_blank">
                privacy policy
              </a>
              .
            </label>
            <div onClick={handlePaymentClick} href="#" className="submit-button-5 w-button">
              Place Order{" "}
              <span>
                <strong className="bold-text-5">₹{totalPayable}</strong>
              </span>
            </div>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </section>
    )
}

export default PaymentGatewaySection;