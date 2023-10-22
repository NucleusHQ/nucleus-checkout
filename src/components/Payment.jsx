import { calculateFullPrice } from "../utils";
import AddonsList from "./AddonsList";
import InstructionsSection from "./Instructions";
import ItemLabel from "./ItemLabel";
import PaymentGatewaySection from "./PaymentGatewaySection";

const Payment = ({addons, selectedAddonIds, setSelectedAddonIds, programInfo, email, phone, isPaid, handleRazorpayDisplay}) => {

  const {strikeThroughPrice: programStrikeThroughPrice, title: programTitle} = programInfo;

  const selectedAddons = addons.filter((addon) =>
    selectedAddonIds.includes(addon.id)
  );

  const {subTotal, gst, discount, discountPercentage, totalPayable} = calculateFullPrice(programInfo, addons, selectedAddonIds);


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
          <ItemLabel label = {programTitle} price = {programStrikeThroughPrice}/>
          {selectedAddons.map(addon => {
            const {title, price, strikeThroughPrice} = addon; 
            return <ItemLabel label = {title} price={strikeThroughPrice}/>
          })}
        </ul>
      </section>
      <section className="section-10">
        <div className="subtota_div">
          <div className="w-layout-blockcontainer container-26 w-container">
            <div>Subtotal</div>
          </div>
          <div className="w-layout-blockcontainer container-27 w-container">
            <div className="text-block-27">₹{subTotal}</div>
          </div>
        </div>
        <div className="gst_div">
          <div className="w-layout-blockcontainer container-26 w-container">
            <div>GST @ 18%</div>
          </div>
          <div className="w-layout-blockcontainer container-27 w-container">
            <div className="text-block-27">₹{gst}</div>
          </div>
        </div>
        <div className="gst_div green">
          <div className="w-layout-blockcontainer container-26 w-container">
            <div>Discount ({discountPercentage}%)</div>
          </div>
          <div className="w-layout-blockcontainer container-27 w-container">
            <div className="text-block-27">-₹{discount}</div>
          </div>
        </div>
      </section>
      <section className="section-11">
        <div className="total_div">
          <div className="w-layout-blockcontainer container-26 w-container">
            <div>
              <strong>Total Payable</strong>
            </div>
          </div>
          <div className="w-layout-blockcontainer container-27 w-container">
            <div className="text-block-27">
              ₹<strong>{totalPayable}</strong>
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
          
      <AddonsList addons = {addons} setSelectedAddonIds = {setSelectedAddonIds} selectedAddonIds = {selectedAddonIds}/>
      <InstructionsSection 
        email={email}
        phone={phone}
      />
      <PaymentGatewaySection 
        handleRazorpayDisplay={handleRazorpayDisplay}
        totalPayable={totalPayable}
      />
    </div>
  );
};


export default Payment;