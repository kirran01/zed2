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
  console.log(data, "transactionData");
  return (
    <div>
      <h1>transactions</h1>
    </div>
  );
}

export default TransactionPage;
