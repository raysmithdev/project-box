import React from "react";
import "./ProjectTile.css";
import { Link } from "react-router-dom";

function ProjectTile(props) {
  return (
    <Link to={`/project/${props.project.id}`} className="tile">
      <div className="tile-container">
        <p className="tile-img">{props.project.title.charAt(0).toUpperCase()}</p>
      </div>
      <h3 className="tile-title">{props.project.title}</h3>
    </Link>
  );
}
export default ProjectTile;
