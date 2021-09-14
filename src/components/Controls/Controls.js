import React from 'react';
import './Controls.css';

const Controls = ({ typeOfAction, instructions, action }) => {
    return (
        <section className="control-block">
            <h2>{typeOfAction} by 10</h2>
            <button className={typeOfAction === 'Withdraw' ? "withdrawButton" : "depositButton"}
                onClick={() => { action(10) }}>{typeOfAction}</button>
            <p>{instructions}</p>
        </section>
    );
};


export default Controls;