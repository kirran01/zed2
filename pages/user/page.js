import fetchData from "../../components/userinfo";

export async function getServerSideProps() {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
}

function userPage({ data }) {
  console.log(data, "userdata");
  return (
    <div>
      <h1>UserPage</h1>
    </div>
  );
}

export default userPage;
