import { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getUserTransactions } from '../../../Functions/user';
import TransactionTable from './TransactionTable';
import './Transactions.css';

const InitialInvestment = ({ transactionsData = {} }) => {
  const { total_balance = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l balance-card'>
      <b>Total Balance: </b>₹ {total_balance}
    </article>
  )
};

const TotalBalance = ({ transactionsData={} }) => {
  const { initial_investment = 0 } = transactionsData || {};
  return (
    <article className='flex align-center gap-l investment-card'>
      <b>Initial Investment: </b>₹ { initial_investment }
    </article>
  )
};

const Transactions = ({ userProfileData }) => {
  const [transactionsData, setTransactionsData] = useState(null);
  const [transactionsHistory, setTransactionsHistory] = useState([]);
  // const transactionHistoryMutation = useMutation(getUserTransactions);

  // const { isLoading, isError, error } = useQuery(
  //   ['getTransactionHistory'],
  //   {
  //     queryFn: () => {
  //       console.log({ userId })
  //       transactionHistoryMutation({ userId })
  //     },
  //     onSuccess: (data=null) => {
  //       console.log({ transactionsData: data })
  //     }
  //   }
  // );
  useEffect(() => {
    getUserTransactions()
    .then(({ result={} }) => {
      setTransactionsData(result);
      const segregatedTransactions = result?.all_transaction;
      const allTransactions = [];
      allTransactions.push(...segregatedTransactions?.DIRECT_CREDIT);
      allTransactions.push(...segregatedTransactions?.COMMISION);
      allTransactions.push(...segregatedTransactions?.CASHBACK);
      setTransactionsHistory([...allTransactions]);
    });
  }, []);

  return (
    <article className='transactions-page'>
      <div className='flex gap-5xl align-center'>
        <InitialInvestment transactionsData={transactionsData} />
        <TotalBalance transactionsData={transactionsData} />
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