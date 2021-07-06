import "./controls.scss";
const Controls = ({ completedCount, setFilterBy, clear }) => {
  return (
    <div className="controls__container">
      <div className="controls_wrapper">
        <div className="control__count">
          <p>{completedCount} items left</p>
        </div>
        <div className="control__clear">
          <button onClick={clear}>Clear Completed</button>
        </div>
        <div className="control__filters">
          <button onClick={() => setFilterBy("")}>All</button>
          <button onClick={() => setFilterBy("ACTIVE")}>Active</button>
          <button onClick={() => setFilterBy("COMPLETED")}>Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
