import { Button } from "@mui/material";
import "./CardBottom.css";

export default function CardBottom() {
  return (
    <div className="CardLowerContainer">
      <Button variant="outlined" className="btn" sx={{ fontSize: 10, padding: "5px" }}>
        View All
      </Button>
      <div className="ViewAllRightSection">
        <Button  className="btn" variant="contained" sx={{ fontSize: 10, padding: "5px" }}>
          Timeline
        </Button>
        <Button variant="outlined"  className="btn"  sx={{ fontSize: 10, padding: "5px" }}>Work Order Generated</Button>
      </div>
    </div>
  );
}
