import { useState } from "react";
import axios from "axios";
import "./CreateUserCSS.css";

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3040/createUser", {
        name,
        email,
        age,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={Submit}>
        <h2>Add User</h2>
        <div className="anInput">
          <input
            type="text"
            placeholder="Enter Name"
            className="form-controls"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="anInput">
          <input
            type="text"
            placeholder="Enter Email"
            className="form-controls"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </>
  );
};
export default CreateUser;
