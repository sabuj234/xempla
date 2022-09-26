import PositionedMenu from "./CardDropDown";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ShareIcon from "@mui/icons-material/Share";
import SharePositionedMenu from "../../../view/PositionedMenus/SharePositionedMenu";
import SnoozePositionedMenu from "../../../view/PositionedMenus/SnoozePositionedMenu";

export default function CardUpperSection() {
  return (
    <div className="CardUpperSection">
      <div className="SectionLeft">
        <span className="CardType">New</span>
        <b className="CardDemo">Demo - 1</b>
        <span className="CardDate">2021-07-16 15:52:41</span>
      </div>
      <div className="SectionRight">
        <PositionedMenu text="Acknowledged"></PositionedMenu>
        <SnoozePositionedMenu text={<AccessAlarmsIcon style={{fontSize:"15px"}}/>}></SnoozePositionedMenu>
        <SharePositionedMenu text={<ShareIcon  style={{fontSize:"15px"}}/>}></SharePositionedMenu>
      </div>
    </div>
  );
}
