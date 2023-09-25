import { useState } from "react";
import Payment from "./Payment";
import UserDetails from "./UserDetails";

const CheckoutForm = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [error, setError] = useState(true);

  return (
    <div className="content-form-block-2">
      <div className="w-layout-blockcontainer container-21 w-container">
        <div className="w-layout-blockcontainer w-container">
          <div className="offer-message">
            <div className="text-block-34">
              Get LinkedIn Workshop for special price of{" "}
              <strong>Rs 499 </strong>only
            </div>
          </div>
          <div
            data-current="Tab 2"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="tabs w-tabs"
          >
            <div className="tabs-menu w-tab-menu">
              <a
                data-w-tab="Tab 1"
                className={`tab-link-tab-2 tab w-inline-block w-tab-link ${
                  activeTab ? "w--current" : ""
                }`}
                onClick={() => setActiveTab(true)}
              >
                <div className="text-block-18 _1">
                  <strong className="bold-text-8">1</strong>
                </div>
                <div className="text-block-18">
                  <strong className="bold-text-4">Your Details</strong>
                  <br />
                  <span className="text-span-7">For Access</span>
                </div>
              </a>
              <a
                id="Payment"
                data-w-tab="Tab 2"
                second="2"
                className={`tab-link-tab-2 tab w-inline-block w-tab-link ${
                  !activeTab ? "w--current" : ""
                }`}
                onClick={() => setActiveTab(false)}
              >
                <div className="text-block-18 _1">
                  <strong className="bold-text-9">2</strong>
                </div>
                <div className="text-block-18">
                  <strong className="bold-text-4">Payment</strong>
                  <br />
                  <span className="text-span-7">Of Your Program</span>
                </div>
              </a>
            </div>
            <div className="w-tab-content">
              {activeTab ? (
                <UserDetails error={error} />
              ) : (
                <Payment />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
