import { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getUserTransactions } from '../../../Functions/user';
import TransactionTable from './TransactionTable';
import './Transactions.css';

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
  const { initial_investment = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l trx-card'>
      <b>TDS: </b>₹ { initial_investment * 0.05 }
    </article>
  );
};


const AdminCharges = ({ transactionsData={} }) => {
  const { initial_investment = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l trx-card'>
      <b>Admin Charges: </b>₹ { initial_investment * 0.05 }
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
      <div className='flex gap-5xl align-center transaction-cards-wrapper'>
        <TDS transactionsData={transactionsData} />
        <InitialInvestment transactionsData={transactionsData} />
        <TotalBalance transactionsData={transactionsData} />
        <AdminCharges transactionsData={transactionsData} />
      </div>
      <br />
      <hr />
      <br /> 
      <div>
        <h2>Transaction History</h2>
        <br />
        <TransactionTable transactionRecords={transactionsHistory} />
      </div>
    </article>
  )
}

export default Transactions