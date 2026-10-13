const MyButton = ({ message }) => {
    alert("Insde MyBUtton, outerside")
  return (
    <div>
      <button className="btn btn-warning" onClick={message}>
        Click ME
      </button>
    </div>
  );
};

export default MyButton;