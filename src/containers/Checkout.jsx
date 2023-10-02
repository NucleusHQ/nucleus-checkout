import "../css/normalize.css";
import "../css/pay-details.webflow.css";
import "../css/webflow.css";
import Header from "../components/Header";
import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";

const Checkout = (props) => {

  const {addons} = props;

  return (
    <div className="body">
      <Header />
      <CheckoutForm addons = {addons} />
      <Footer/>
    </div>
  );
};

export default Checkout;
