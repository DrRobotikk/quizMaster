import "./Body.css";

const Body = (props) => {
  return (
    <div className="Body">
      <h1>{props.name}</h1>
      <p>{props.article}</p>
    </div>
  );
};

export default Body;
