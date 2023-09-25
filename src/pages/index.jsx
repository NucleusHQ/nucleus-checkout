import "../css/normalize.css";
import "../css/pay-details.webflow.css";
import "../css/webflow.css";
import Header from "../components/Header";
import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div className="body">
      <Header />
      <CheckoutForm />
      <Footer/>
    </div>
  );
};

export default Checkout;
