import './App.css';
import { useSelector } from "react-redux";
import BalanceForm from "./components/BalanceForm";

export default function App() {
  const checking = useSelector((state) => state.checking);
  const savings = useSelector((state) => state.savings);
  // the above line is the same as this longer form arrow function
  // const balance = useSelector((state) => {
  //   return state.balance
  // })

  return (
    <div className="App">
      <h1>Bank Account</h1>
      <h2>Checking: {checking}</h2>
      <h2>Savings: {savings}</h2>
      <BalanceForm />
    </div>
  );
}

