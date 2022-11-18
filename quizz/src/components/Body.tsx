import "./Body.css";

export const Body = (props: any) => {
  return (
    <div className="body">
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
  );
};
