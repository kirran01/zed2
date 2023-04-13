import fetchData from "../../components/userinfo";
import React from "react";

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
  const filteredUsers = users.filter((user) => user.username === "@kirran");
  console.log(users, "userdata");
  return (
    <div>
      <h1 className="text-3xl text-center">User Profile</h1>
      <table className="border-collapse border-2 border-black m-5 p-5 rounded-lg">
        <tbody>
          {filteredUsers.map((user) => (
            <React.Fragment key={user.user_id}>
              <tr>
                <td className="border-2 border-black p-2">Email:</td>
                <td className="border-2 border-black p-2">{user.email}</td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2">Phone Number:</td>
                <td className="border-2 border-black p-2">
                  {user.phone_number}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2">Username:</td>
                <td className="border-2 border-black p-2">{user.username}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default userPage;
