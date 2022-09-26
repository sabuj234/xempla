import "./CardMiddle.css";

export default function CardMiddle() {
  return (
    <div className="CardMiddleContainer">
      <p className="Heading">Information</p>
      <p className="Text">
        Consistency index is increasing and is expected to stay below 50% over
        the next two weeks.
      </p>
      <div className="Info">
        <p>
          <span>Past Occurrences</span>
          <span>8 times</span>
        </p>
        <p>
          <span>Past Work orders generated</span>
          <span>01</span>
        </p>

        <p>
          <span>Work order</span>
          <span style={{ color: "red", opacity: "1" }}>Closed</span>
        </p>
      </div>
      <div className="Priority">
        <span>Priority : </span>
        <span className="PriorityType">High</span>
      </div>
    </div>
  );
}
