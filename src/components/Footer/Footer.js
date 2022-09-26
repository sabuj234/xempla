import "./Footer.css";
import Pagination from "@mui/material/Pagination";

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterLeft">Showing 1 to 10 off 112 entries</div>
      <div className="FooterRight">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
}
