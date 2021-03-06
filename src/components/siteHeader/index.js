import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { TemporaryDrawer } from "../nav";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <link className=" text-white" to="/">
        </link>
      </nav>
      
      <TemporaryDrawer/>
      <nav className="navbar-brand text-white">
      
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/Upcoming">
             Upcoming
            </Link>
          </li>
{/*           
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlist">
              Watch List
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li> */}

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/topRated">
            Top rated
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/nowPlaying">
            Now Playing
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;

    