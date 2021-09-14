import React from 'react';
import './Bank.css';

const Bank = ({ total }) => {
    return (
        <section className="bank-container">
            <h2>Current Balance:</h2>
            <div className="total">
                {total}
            </div>
            {total < 0 ? <p className="dangerText">📢DANGER: You are now in the red. Please consider depositing to be in good standing</p> : null}
        </section>
    );
};


export default Bank;