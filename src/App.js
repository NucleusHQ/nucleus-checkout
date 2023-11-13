import { addons } from './data/JSMastery.js';
import "./css/normalize.css";
import "./css/pay-details.webflow.css";
import "./css/webflow.css";
import CheckoutForm from "./components/CheckoutForm";
import Footer from "./components/Footer";
import Header from './components/Header.jsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tofu from "./content/tofu.json";
import course from "./content/course.json";
import { getRazorPayOptions, loadRazorPay } from './utils.js';
import { razorpayLoadLink } from './constants.js';
import config from './config.js';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';


function AppContainer() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const category = query.get('category');
  const programId = query.get('programId');
  const type = query.get('type');

  let relevantData;
  
  if (category === 'tofu') {

    relevantData = tofu[programId][type];
  } else if (category === 'course') {
    relevantData = course[programId][type];
  } else {
    return <PageNotFound />
  }

  const { addons, formTitle, headerTitle, primaryBtnContent, programInfo } = relevantData || {};
  const {title: programtitle} = programInfo || {};

  // ----------------------------- //

  async function handleRazorpayDisplay(totalPayable) {

    const res = await loadRazorPay(razorpayLoadLink);

    if(!res) {
      alert("Razorpay SDK failed to load. Please try again later")
      return
    }

    const rzOrderResponse = await fetch(config.razorpay, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalPayable
      }), 
    })
    .then(res => res.json())
    .catch(err => {
      console.error(err);
    })

  const userInfo = {
    fullName: firstName + " " + lastName, 
    phone: "91" + phone, 
    email: email, 
    tofuId: category == "tofu" && programId
  }

  const programInfo = {
    programId, 
    category, 
    programtitle
  }

  const options = getRazorPayOptions(rzOrderResponse, userInfo, programInfo, setShowConfirmation);

  const paymentObject = new window.Razorpay(options);  
  paymentObject.open();
}

  if(showConfirmation) {
     return <ConfirmationPage title={programtitle} />
  }

  return (
    <div className="body">
      <Header
        headerTitle={headerTitle}
      />
      <CheckoutForm
        addons={addons}
        category={category}
        programId={programId}
        formTitle={formTitle}
        primaryBtnContent={primaryBtnContent}
        programInfo={programInfo}
        type={type}
        handleRazorpayDisplay={handleRazorpayDisplay}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        setShowConfirmation={setShowConfirmation}
      />
      <Footer />
    </div>
  );

}

export default AppContainer;
