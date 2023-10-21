import { useState } from "react";
import InputError from "./InputError";

const UserDetails = (props) => {

  const {handleChange, handleSubmit, firstName, lastName, email, errors, phone, primaryBtnContent} = props;

  return (
    <div data-w-tab="Tab 1" className="w-tab-pane">
      <div className="w-layout-blockcontainer container-22 w-container">
        <div className="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="post"
            className="form-6"
            data-wf-page-id="64fda7155a16efb4bef04c53"
            data-wf-element-id="a62be3bb-9b5e-1d27-c841-e931c1693448"
            onChange={handleChange}
            onSubmit={handleSubmit}
          >
            <div className="w-layout-grid grid-8">
              <label
                htmlFor="name-3"
                id="w-node-a62be3bb-9b5e-1d27-c841-e931c169344a-bef04c53"
                className="field-label-8"
              >
                First Name <span className="text-span-11">*</span>
              </label>
              <label
                htmlFor="name-3"
                id="w-node-a62be3bb-9b5e-1d27-c841-e931c169344c-bef04c53"
                className="field-label-7"
              >
                Last Name <span className="text-span-12">*</span>
              </label>
              <input
                type="text"
                className="text-field-2 w-input"
                maxLength="256"
                name="firstName"
                data-name="Name 3"
                placeholder="First Name*"
                id="name-3"
                required=""
                value={firstName}
              />
              <input
                type="text"
                className="text-field-2 w-input"
                maxLength="256"
                name="lastName"
                data-name="Name 2"
                placeholder="Last Name*"
                id="name-2"
                required=""
                value={lastName}
              />
              {errors.firstName && <InputError fieldName={"First Name"} />}
              {errors.lastName && <InputError fieldName={"Last Name"} />}
            </div>
            <label htmlFor="email-2" className="field-label-4">
              Email Address <span className="text-span-13">*</span>
            </label>
            <input
              type="email"
              className="w-input"
              maxLength="256"
              name="email"
              data-name="Email 2"
              placeholder="Email address *"
              id="email-2"
              required=""
              value={email}
            />
            {errors.email && <InputError fieldName={"Email"} />}
            <label htmlFor="Phone-2" className="field-label-4">
              Phone Number <span className="text-span-14">*</span>
            </label>
            <input
              type="tel"
              className="w-input"
              maxLength="256"
              name="phone"
              data-name="Phone 2"
              placeholder="Phone Number*"
              id="Phone-2"
              required=""
              value={phone}
            />
            {errors.phone && <InputError fieldName={"Phone Number"} />}
            <label htmlFor="field-2" className="field-label-4">
              Country/Region <span className="text-span-15">*</span>
            </label>
            <select
              id="field-2"
              name="field-2"
              data-name="Field 2"
              required=""
              className="select-field w-select"
            >
              <option value="">India</option>
            </select>
            <button
              type="submit"
              id="Details"
              data-wait="Please wait..."
              className="submit-button-3 w-button"
            >
              ⇨ {primaryBtnContent.line1} <br />{" "}
              <span>{primaryBtnContent.line2}</span>
            </button>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

