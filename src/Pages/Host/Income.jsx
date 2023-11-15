import React from 'react'
import incomeGraph from "../../Assets/images/incomeGraph.png"

function Income() {
  const transactionsData = [
    { amount: 720, date: "3/1/23", id: "1" },
    { amount: 560, date: "12/12/22", id: "2" },
    { amount: 980, date: "3/12/22", id: "3" },
  ]
return (
    <div className="hostIncome-container">
        <section className="hostIncome">
            <div className="hostIncome-header-div">
                <h1 className='hostIncome-header'>Income</h1>
                <p className='hostIncome-headerP'>
                    Last <span>30 days</span>
                </p>
                <h2 className='hostIncome-header-number'>$2,260</h2>
            </div>
            <img
                className="hostIncome-graph"
                src={incomeGraph}
                alt="Income graph"
            />
            <div className="hostIncome-info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="hostIncome-transactions-div">
                {transactionsData.map((item) => (
                    <div key={item.id} className="hostIncome-transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
)
}

export default Income