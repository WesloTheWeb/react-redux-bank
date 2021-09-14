import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "./store/index";
import Bank from './components/Bank/Bank';
import Controls from './components/Controls/Controls';

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  // Binds action creators to give them dispatch
  const { depositMoney, withDrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <Bank total={account}/>
      <div className="Divider">
        <Controls typeOfAction="Withdraw" action={withDrawMoney}/>
        <Controls typeOfAction="Deposit" action={depositMoney} />
      </div>
    </div>
  );
}

export default App;
