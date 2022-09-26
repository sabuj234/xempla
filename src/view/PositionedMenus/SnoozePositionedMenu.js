import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../components/Card/CardBottom/CardBottom.css";
import ChatImg from "../../assets/images/Image 18.png";
import TeamImg from "../../assets/images/teams.png";
import SlackImg from "../../assets/images/slack.png";
import Divider from "@mui/material/Divider";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { Input } from "@mui/material";

export default function SnoozePositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ minWidth: "auto" }}
      >
        {props.text}
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "600",
            opacity: "1",
          }}
          onClick={handleClose}
        >
          <p className="ShareIn"><span className="snooze">Snooze Alerts</span></p>
          <p className="ResetFilter">Reset</p>
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleClose}><AccessAlarmsIcon/> 7 Days</MenuItem>
        <Divider />
        <MenuItem sx={{ gap: "5px" }} onClick={handleClose}>
        <AccessAlarmsIcon/> 14 Days
        </MenuItem>
        <MenuItem sx={{ gap: "5px" }} onClick={handleClose}>
        <AccessAlarmsIcon/> 30 Days
        </MenuItem>
        <MenuItem sx={{ gap: "5px" }} onClick={handleClose}>
        <AccessAlarmsIcon/> 90 Days
        </MenuItem>
        <span className="custom">Custom</span>
        <MenuItem sx={{ gap: "5px" }} onClick={handleClose}>
            <Input/> Days
        </MenuItem>
      </Menu>
    </div>
  );
}
