import logo from './logo.svg';
import './App.css';

import TicketDetails from './components/TicketDetails'

function App() {
  return (
    <div>
      <TicketDetails
        name="John Doe"
        destination="New York"
        gender="Mr"
        seat="14 A"
      />
      <TicketDetails
        name="Alex Doe"
        destination="Tel Aviv"
        gender="Mr"
        seat="17 A"
      />
    </div>
  );
}

export default App;
