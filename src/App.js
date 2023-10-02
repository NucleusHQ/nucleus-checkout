import Checkout from './containers/Checkout.jsx'
import { addons } from './data/JSMastery.js';

function App() {
  return (
    <div>
     <Checkout addons = {addons}/>
    </div>
  );
}

export default App;
