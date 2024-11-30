import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflix Ethiopia - Watch TV Shows Online, Watch Movies Online_files/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Header() {
  return (
    <div>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header-left">
            <ul>
              <li className="netflixlogo">
                <img src={NetflixLogo} alt="Netflix Logo" />
              </li>
              <li>Home</li>
              <li>TVshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li><SearchIcon /></li>
              <li><NotificationsNoneIcon /></li>
              <li><AccountBoxIcon /></li>
              <li><ArrowDropDownIcon /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
