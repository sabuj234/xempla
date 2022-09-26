import "./Card.css";
import CardTop from "./CardTop/CardTop";
import CardMiddle from "./CardMiddle/CardMiddle";
import CardBottom from "./CardBottom/CardBottom";

export default function Card() {
  return (
    <div className="CardContainer">
      <CardTop />
      <CardMiddle />
      <CardBottom />
    </div>
  );
}
