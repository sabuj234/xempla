import "./Header.css";
import Lowerheader from "./HeaderBottom/headerBottom";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import DnsIcon from "@mui/icons-material/Dns";

export default function Header() {
  return (
    <div className="Container">
      <div className="UpperHeader">
        <h2>Manage Alerts</h2>
        <p>Filter and snooze your alerts as per your requirement.</p>
      </div>
      <Lowerheader />
      <div className="AppliedFilterContainer">
        <div className="AppliedFilterLeft">
          Applied
          <Badge
            badgeContent={<CloseIcon sx={{ fontSize: 10 }} />}
            color="primary"
            className="Crossbadge"
          ></Badge>
        </div>
        <div className="AppliedFilterRight">
          <span className="BoardView">Board View</span>
          <DnsIcon sx={{ color: "#0097DA" }} />
        </div>
      </div>
    </div>
  );
}
