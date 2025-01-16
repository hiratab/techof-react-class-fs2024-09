import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function CheckNumber() {
  const NumberRangeChecker = (number) => {
    if (number < 50) {
      return 'Under 50';
    }

    if (number >= 50 && number <= 100) {
      return '50-100'
    }

    return 'Over 100';
  }

  return (<p>{NumberRangeChecker(120)}</p>)
}

function Greeting(props) {
  return (<p>Olá, {props.name}</p>)
}

function App() {

  return (
    <div>
      <Title title="Aula sobre Components e Props"/>
      <CheckNumber />
      <Greeting name="Bruno Hirata" />
    </div>
  );
}

export default App;
