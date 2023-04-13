import fetchData from "../../components/transactions.jsx";

export async function getServerSideProps() {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
}
function TransactionPage({ data }) {
  let transactions = data.transaction;
  console.log(transactions, "transactions");
  return (
    <div>
      <h1>Transactions</h1>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="border-2 border-black m-5">
          <p>Amount: {transaction.amount}</p>
          <p>Received By: {transaction.recievedBy.app_user.username}</p>
          <p>Sent By:{transaction.sentBy.app_user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionPage;
