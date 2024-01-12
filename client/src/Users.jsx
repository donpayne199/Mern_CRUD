import { useState } from "react";
import { Link } from "react-router-dom";
import "./UsersCSS.css";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "don",
      email: "User1@gmail.com",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="user-container">
          {users.map((user) => {
            return (
              <div key={user.id}>
                <div className="component">
                  <div className="individual-div">
                    {user.name}
                  </div>
                  <div className="individual-div">
                    {user.email}
                  </div>

                  <Link
                    to="/update"
                    className="update-user-btn"
                  >
                    <button
                      className="btns"
                      style={{
                        backgroundColor: "green",
                        color: "white",
                      }}
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    className="btns"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <Link to="/create" className="new-user-btn">
            Add A New User
          </Link>
        </div>
      </div>
    </>
  );
};
export default Users;
