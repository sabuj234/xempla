import "../Header.css";
import { Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuPopupState from "../../PositionedMenus/FilterPositionedMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginTop:"7px",
  width: "100%",
  height:"2.4rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const searchValue = function (event) {
  console.log(event.target.value);
};

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const filterBtn = (
  <Button
    variant="contained"
    startIcon={<TuneIcon />}
    sx={{ bgcolor: "#0097DA", fontSize: 10, padding: "10px" }}
  >
    Filter
    <Avatar
      sx={{
        color: "black",
        bgcolor: "white",
        width: 20,
        height: 20,
        fontSize: "12px",
        marginLeft: "10px",
      }}
    >
      03
    </Avatar>
  </Button>
);
export default function Lowerheader() {
  return (
    <div className="LowerHeader">
      <div className="Buttons-Cont">
        <MenuPopupState text={filterBtn}></MenuPopupState>
        <Search
          className="SearchBox"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchValue(e);
            }
          }}
        >
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#707070" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
    </div>
  );
}
