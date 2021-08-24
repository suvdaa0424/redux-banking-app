import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import action creators from redux folder
import { actionDeposit, actionWithdrawal } from "../redux/actions/account";

function BalanceForm() {
    // use the dispatch hook so we can dispatch actions
    const dispatch = useDispatch();
    // form state values
    const [amount, setAmount] = useState(0);
    const [account, setAccount] = useState("savings");
    const [action, setAction] = useState("Deposit");

    const handleSubmit = (e) => {
        e.preventDefault();
        // change the action type to dispatch based on the form action
        if (action === "Deposit") {
            dispatch(actionDeposit(amount, account));
        } else if (action === "Withdrawal") {
            dispatch(actionWithdrawal(amount, account));
        }
    };

    return (
        // handle form submit with a function
        <form onSubmit={handleSubmit}>
            <label>
                <span>Amount</span>
                {/* connected input */}
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <br />
            <label>
                <span>Action</span>
                {/* connected input */}
                <select value={action} onChange={(e) => setAction(e.target.value)}>
                    <option>Deposit</option>
                    <option>Withdrawal</option>
                </select>
            </label>
            <br />
            <label>
                <span>Account</span>
                {/* connected input */}
                <select value={account} onChange={(e) => setAccount(e.target.value)}>
                    <option value="checking">Checking</option>
                    <option value="savings">Savings</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BalanceForm;
