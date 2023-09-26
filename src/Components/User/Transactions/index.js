import { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getUserTransactions } from '../../../Functions/user';
import TransactionTable from './TransactionTable';
import './Transactions.css';
import { calcAdditionalCharges } from '../util';

const TotalBalance = ({ transactionsData = {} }) => {
  const { total_balance = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l trx-card'>
      <b>Total Balance: </b>₹ {total_balance}
    </article>
  )
};

const InitialInvestment = ({ transactionsData={} }) => {
  const { initial_investment = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l trx-card'>
      <b>Initial Investment: </b>₹ { initial_investment }
    </article>
  )
};

const TDS = ({ transactionsData={} }) => {
  console.log({ transactionsData })
  const { initial_investment = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l trx-card'>
      <b>TDS: </b>₹ { calcAdditionalCharges(initial_investment) }
    </article>
  );
};


const AdminCharges = ({ transactionsData={} }) => {
  const { initial_investment = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l trx-card'>
      <b>Admin Charges: </b>₹ { calcAdditionalCharges(initial_investment) }
    </article>
  );
};

const Transactions = ({ userProfileData }) => {
  const [transactionsData, setTransactionsData] = useState(null);
  const [transactionsHistory, setTransactionsHistory] = useState([]);

  useEffect(() => {
    getUserTransactions()
    .then(({ result={} }) => {
      setTransactionsData({ ...result, TDS: 0, admin_charges: 0 });
      const allTransactions = [];
      const direct = result?.all_transaction?.DIRECT_CREDIT;
      const commission = result?.all_transaction?.COMMISSION;
      const cashback = result?.all_transaction?.CASHBACK;
      allTransactions.push(...direct);
      allTransactions.push(...commission);
      allTransactions.push(...cashback);
      setTransactionsHistory([ ...allTransactions ]);
    });
  }, []);


  return (
    <article className='transactions-page'>
      <header>
        <h1>Financial Details</h1>
        <br />
        <div className='flex gap-5xl align-center transaction-cards-wrapper'>
          <TDS transactionsData={transactionsData} />
          <InitialInvestment transactionsData={transactionsData} />
          <TotalBalance transactionsData={transactionsData} />
          <AdminCharges transactionsData={transactionsData} />
        </div>
      </header>
      <br />
      <hr />
      <br /> 
      <main>
        <h1>Transaction History</h1>
        <br />
        <TransactionTable transactionRecords={transactionsHistory} />
      </main>
    </article>
  )
}

export default Transactions