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
  let users = data.app_user;
  console.log(users, "userdata");
  return (
    <div>
      <h1>UserPage</h1>
      {users.map((user) => {
        return (
          <div className="border-2 border-black m-5 p-5">
            <p>Email:{user.email}</p>
            <p>Phone Number:{user.phone_number}</p>
            <p>Username:{user.username}</p>
          </div>
        );
      })}
    </div>
  );
}

export default userPage;
