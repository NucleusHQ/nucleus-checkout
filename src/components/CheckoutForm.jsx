import { useEffect, useState } from "react";
import PaymentTabContent from "./Payment";
import UserDetailsTabContent from "./UserDetails";
import TabList from "./TabList";
import { getCurrentFormattedDate, sendPostRequest } from "../utils";
import config from "../config";
import { CALLBACK, COURSE, PAID, TOFU } from "../constants";


const CheckoutForm = (props) => {

  const { addons, formTitle, primaryBtnContent, programInfo, handleRazorpayDisplay, type,
    firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, category, programId,
    setShowConfirmation, handleCleanup, whatsappInfo, tofuType, date, time, emailInfo
  } = props;

  const { templateName, teamName } = whatsappInfo || {};


  const { title: programtitle } = programInfo || {};


  useEffect(() => {
    window.fbq('track', 'ViewContent', {
      content_name: programtitle + " " + 'Checkout Page',
      content_category: category,
      content_ids: [programId],
    });
  }, [])

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

  const handleSubmit = async (e) => {

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
        tofuId: category == "tofu" && programId,
        batchId: category == "course" && type == PAID && programId
      }

      const activityType = category == "tofu" ? "registration" : "callback"

      const activityBody = {
        phone: "91" + phone,
        type: activityType,
        time: getCurrentFormattedDate(),
        source: {
          id: programId,
          category: category == "tofu" ? "tofu" : "course"
        }
      }

      const emailConfirmationBody = {
        fullName: firstName + " " + lastName,
        email: email, 
        templateId: emailInfo?.templateId
      }

      let whatsAppConfirmationBody;

      if (category == TOFU) {
        whatsAppConfirmationBody = {
          fullName: firstName + " " + lastName,
          phone: "91" + phone,
          tofuType,
          eventName: programInfo?.title,
          date,
          time,
          teamName,
          templateName
        }
      } else if (category == COURSE) {
        whatsAppConfirmationBody = {
          fullName: firstName + " " + lastName,
          phone: "91" + phone,
          templateName,
          teamName
        }
      } else {

      }

      //if JS Mastery, callback API should get triggered

      if(type === PAID) {
        setActiveTab("2");
        return
      }

      type === PAID && setActiveTab("2");
      await sendPostRequest(config.contactCreate, contactCreationBody);
      await sendPostRequest(config.activityRegister, activityBody);
      await sendPostRequest(config.whatsAppConfirmation(category), whatsAppConfirmationBody);
      await sendPostRequest(config.emailConfirmation(category, programId, type), emailConfirmationBody); 

      setShowConfirmation(true);
      handleCleanup();
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
              type={type}
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
                  addons={addons}
                  selectedAddonIds={selectedAddonIds}
                  setSelectedAddonIds={setSelectedAddonIds}
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
