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
      />
      <Footer />
    </div>
  );

}

export default AppContainer;
