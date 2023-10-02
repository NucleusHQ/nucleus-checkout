import rzpPayment from "../assets/images/rzp_payment_icon.svg";
import AddonCard from "./AddonCard";
import ItemLabel from "./ItemLabel";

const Payment = ({addons, selectedProductIds, setSelectedProductIds}) => {

  const selectedAddons = addons.filter((addon) =>
    selectedProductIds.includes(addon.productId)
  );

  // Initialize a variable to store the total price
  let totalPrice = Number(addons[0].price);

  // Loop through selectedAddons and add their prices to totalPrice
  selectedAddons.forEach((addon) => {
    totalPrice += parseFloat(addon.price); // Assuming the price is in string format
  });

  // Round totalPrice to 2 decimal places
  totalPrice = totalPrice.toFixed(2);


  return (
    <div data-w-tab="Tab 2" className="tab-pane-tab-2">
      <section className="section-9">
        <div className="w-layout-blockcontainer container-26 w-container">
          <div>
            <strong>Product</strong>
          </div>
        </div>
        <div className="w-layout-blockcontainer container-27 w-container">
          <div className="text-block-27">
            <strong>Subtotal</strong>
          </div>
        </div>
      </section>
      <section>
        <ul role="list" className="list-3 w-list-unstyled">
          <ItemLabel label = {addons[0].label} price = {addons[0].price}/>
          {selectedAddons.map(addon => {
            const {label, price} = addon; 
            return <ItemLabel label = {label} price={price}/>
          })}
        </ul>
      </section>
      <section className="section-10">
        <div className="subtota_div">
          <div className="w-layout-blockcontainer container-26 w-container">
            <div>Subtotal</div>
          </div>
          <div className="w-layout-blockcontainer container-27 w-container">
            <div className="text-block-27">₹2,997.20</div>
          </div>
        </div>
        <div className="gst_div">
          <div className="w-layout-blockcontainer container-26 w-container">
            <div>GST</div>
          </div>
          <div className="w-layout-blockcontainer container-27 w-container">
            <div className="text-block-27">₹297.80</div>
          </div>
        </div>
      </section>
      <section className="section-11">
        <div className="total_div">
          <div className="w-layout-blockcontainer container-26 w-container">
            <div>
              <strong>Total</strong>
            </div>
          </div>
          <div className="w-layout-blockcontainer container-27 w-container">
            <div className="text-block-27">
              ₹<strong>{totalPrice}</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="section-12">
        <div className="form-block w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            method="get"
            className="form-7"
            data-wf-page-id="64fda7155a16efb4bef04c53"
            data-wf-element-id="81cd4478-9c1d-c522-fa2d-a758a9427ffa"
          >
            <input
              type="text"
              className="text-field-3 w-input"
              maxLength="256"
              name="name-4"
              data-name="Name 4"
              placeholder="Coupon Code"
              id="name-4"
            />
            <input
              type="submit"
              value="Apply"
              data-wait="Please wait..."
              className="submit-button-4 w-button"
            />
          </form>
          <div className="success-message w-form-done">
            <div className="text-block-30">
              Coupon code applied successfully!
            </div>
          </div>
          <div className="w-form-fail">
            <div>Invalid Code!</div>
          </div>
        </div>
      </section>
      {addons.filter(item => item.type == "addon").map(addon => {

        const {productId} = addon;

        const isSelected = selectedProductIds.includes(productId);

        return <AddonCard addon = {addon} setSelectedProductIds = {setSelectedProductIds} selectedProductIds = {selectedProductIds} isSelected = {isSelected} />
        })
      }
      {/* <AddonCard addons = {addons} /> */}
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
            <a href="#" className="submit-button-5 w-button">
              Place Order{" "}
              <span>
                <strong className="bold-text-5">₹1,999.00</strong>
              </span>
            </a>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Payment;