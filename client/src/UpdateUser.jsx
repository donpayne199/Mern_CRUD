const UpdateUser = () => {
  return (
    <>
      <form>
        <h2>Update User</h2>
        <div className="anInput">
          <input type="text" placeholder="Enter Name" className="form-controls" />
        </div>
        <div className="anInput">
          <input type="text" placeholder="Enter Email" className="form-controls" />
        </div>
        <div className="anInput">
          <input type="text" placeholder="Enter Age" className="form-controls" />
        </div>
        <button className="submit-btn">Update</button>
      </form>
    </>
  );
};
export default UpdateUser;
