import client from "../../apollo-client";
import { gql } from "@apollo/client";

export async function getServerSideProps({}) {
  const { data } = await client.query({
    query: gql`
      query {
        transaction {
          amount
          sentBy {
            app_user {
              username
            }
          }
          recievedBy {
            app_user {
              username
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data:data,
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
    <div>
      <h1 className="text-3xl text-center">Transactions</h1>
      <p>{balance.toLocaleString()}</p>
      {combinedTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`border-2 ${
            transaction.sentBy.app_user.username === "@kirran"
              ? "border-red-400"
              : "border-green-400"
          }`}
        >
          <p>
            Amount:{" "}
            {transaction.recievedBy.app_user.username === "@kirran" ? "" : "-"}
            {transaction.amount}
          </p>
          <p>Received By: {transaction.recievedBy.app_user.username}</p>
          <p>Sent By:{transaction.sentBy.app_user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionPage;
