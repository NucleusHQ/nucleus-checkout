import { useState } from "react";
import PaymentTabContent from "./Payment";
import UserDetailsTabContent from "./UserDetails";
import TabList from "./TabList";
import { getCurrentFormattedDate, sendPostRequest } from "../utils";
import config from "../config";


const CheckoutForm = (props) => {

  const {addons, formTitle, primaryBtnContent, programInfo, isPaid, handleRazorpayDisplay,
    firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, type, programId, setShowConfirmation
  } = props;


  const [activeTab, setActiveTab] = useState(true);
  const [error, setError] = useState(true);
  const [selectedAddonIds, setSelectedAddonIds] = useState([]);


  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            firstName: "First Name is required",
          }));
        }
        break;
      case "lastName":
        if (!value.trim()) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            lastName: "Last Name is required",
          }));
        }
        break;
      case "email":
        if (!value.trim()) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Email is required",
          }));
        } else if (!isValidEmail(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Invalid email format",
          }));
        }
        break;
      case "phone":
        if (!value.trim()) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "Phone Number is required",
          }));
        } else if (!isValidPhoneNumber(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "Invalid phone number format",
          }));
        }
        break;
      default:
        break;
    }

    // Update state with the input value
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const validateInput = (name, value) => {
    return value.trim() !== "";
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Validate all fields on form submission
    const isFirstNameValid = validateInput("firstName", firstName);
    const isLastNameValid = validateInput("lastName", lastName);
    const isEmailValid = validateInput("email", email);
    const isPhoneValid = validateInput("phone", phone);

    // Set errors for all fields based on validation result
    setErrors({
      firstName: !isFirstNameValid,
      lastName: !isLastNameValid,
      email: !isEmailValid,
      phone: !isPhoneValid
    });

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid) {

      const contactCreationBody = {
        fullName: firstName + " " + lastName, 
        phone: "91" + phone, 
        email: email, 
        source: "webinar", 
        tofuId: type == "tofu" && programId, 
        batchId: type == "course" && programId
      }

      const activityBody = {
        phone: "91" + phone,
        type: "abandoned",
        time: getCurrentFormattedDate(), 
        source: {
          id: programId,
          type: type == "tofu" ? "tofu" : "course"
        }
      }

      isPaid && setActiveTab("2");
      sendPostRequest(config.contactCreate, contactCreationBody);
      !isPaid && setShowConfirmation(true);
      isPaid && sendPostRequest(config.activityRegister, activityBody);
    }
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Add your phone number validation logic here
    return /^[0-9]{10}$/.test(phone);
  };


  return (
    <div className="content-form-block-2">
      <div className="w-layout-blockcontainer container-21 w-container">
        <div className="w-layout-blockcontainer w-container">
          <div className="offer-message">
            <div className="text-block-34">
              {formTitle}
            </div>
          </div>
          <div
            data-current="Tab 2"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="tabs w-tabs"
          >
            <TabList 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              handleSubmit={handleSubmit}
              isPaid={isPaid}
            />
            <div className="w-tab-content">
              {activeTab == "1" ? (
                <UserDetailsTabContent 
                  error={error} 
                  handleChange={handleChange} 
                  handleSubmit={handleSubmit}
                  firstName={firstName} 
                  lastName={lastName}
                  errors={errors} 
                  phone={phone}
                  email={email}
                  primaryBtnContent={primaryBtnContent}
                />
              ) : (
                <PaymentTabContent 
                  addons = {addons} 
                  selectedAddonIds = {selectedAddonIds} 
                  setSelectedAddonIds = {setSelectedAddonIds} 
                  programInfo={programInfo}
                  email={email}
                  phone={phone}
                  handleRazorpayDisplay={handleRazorpayDisplay}
                  setActiveTab={setActiveTab}
                  />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
