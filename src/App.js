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


function loadRazorPay(src = "https://checkout.razorpay.com/v1/checkout.js") {

  return new Promise((resolve, reject) => {

    const script = document.createElement("script");

    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true)
    }

    script.onerror = () => {
      resolve(false)
    }

    document.body.appendChild(script)

  })
}

const __DEV__ = document.domain === "localhost";

function AppContainer() {

  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const type = query.get('type');
  const programId = query.get('programId');
  const isPaid = query.get('isPaid');

  let relevantData;
  
  if (type === 'tofu') {
    relevantData = tofu[programId][isPaid ? 'paid' : 'free'];
  } else if (type === 'program') {
    relevantData = course[programId][isPaid ? 'paid' : 'free'];
  } else {
    console.log('Invalid type provided.');
  }

  const { addons, formTitle, headerTitle, primaryBtnContent, programInfo } = relevantData || {};

  async function handleRazorpayDisplay() {

    const res = await loadRazorPay("https://checkout.razorpay.com/v1/checkout.js");

    if(!res) {
      alert("Razorpay SDK failed to load. Please try again later")
      return
    }

    const data = await fetch("http://localhost:3000/razorpay", {
      method: "POST"
    }).then(res => res.json());


    const options = {
      "key": __DEV__ ? "rzp_test_AfDEedK2bfu2QD" : "PRODUCTION_KEY", // Enter the Key ID generated from the Dashboard
      "name": "Nucleus HQ",
      "amount": data.amount.toString(), 
      "currency": data.currency,
      "description": "Thank you for nothing. Please give us some money",
      "image": "https://example.com/your_logo",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };

  const paymentObject = new window.Razorpay(options);  
  paymentObject.open();
}

  return (
    <div className="body">
      <Header
        headerTitle={headerTitle}
      />
      <CheckoutForm
        addons={addons}
        formTitle={formTitle}
        primaryBtnContent={primaryBtnContent}
        programInfo={programInfo}
        isPaid={isPaid}
        handleRazorpayDisplay={handleRazorpayDisplay}
      />
      <Footer />
    </div>
  );

}

export default AppContainer;


// rzp_test_AfDEedK2bfu2QD

// qVT0ZNFsRVeGAr6ammwJ5boK