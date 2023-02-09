import "./BreadCrumb.scss";
import * as React from "react";
import {useState} from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

function Breadcrumb(title) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="breadcrumb--container">
      <div className="breadcrumb--container__wrap">
        <h3>{title.title}</h3>
        <Breadcrumbs separator="\" className="breadcrumb" underline="none">
          <Link
            to="/"
            sx={{
              color: "#68745c",
            }}
            component={RouterLink}
            style={{
              textDecoration: isHovering ? 'underline' : 'none',
              color: '#68745c',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </Link>
          <Typography className="breadcrumb">{title.title}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Breadcrumb;
