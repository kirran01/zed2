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
  let outGoingTransactions = transactions.filter(
    (t) => t.sentBy.app_user.username == "@kirran"
  );
  let incomingTransactions = transactions.filter(
    (t) => t.recievedBy.app_user.username == "@kirran"
  );
  let outGoingTotal = outGoingTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );
  let incomingTotal = incomingTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );
  let balance = incomingTotal - outGoingTotal;
  const combinedTransactions = [
    ...outGoingTransactions,
    ...incomingTransactions,
  ];

  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <p className="text-3xl text-center my-2">Transactions</p>
      <p className="text-xl my-2">Balance: {balance.toLocaleString()}</p>
      <div className="bg-slate-50">
        {combinedTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`border-2 w-60 p-5 rounded-md m-3 ${
              transaction.sentBy.app_user.username === "@kirran"
                ? "border-red-400"
                : "border-green-400"
            }`}
          >
            <p>
              Amount:{" "}
              {transaction.recievedBy.app_user.username === "@kirran"
                ? ""
                : "-"}
              {transaction.amount}
            </p>
            <p>Received By: {transaction.recievedBy.app_user.username}</p>
            <p>Sent By:{transaction.sentBy.app_user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionPage;
