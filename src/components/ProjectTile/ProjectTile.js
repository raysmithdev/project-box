import React from "react";
import "./ProjectTile.css";
import { Link } from "react-router-dom";

function ProjectTile(props) {
  return (
    <Link to={`/project/${props.project.id}`} className="tile">
      {/* <p className="tile-img">[placeholder image]</p> */}
      <img src={props.project.img} alt="hi" className="tile-img"/>
      <h3 className="tile-title">{props.project.title}</h3>
    </Link>
  );
}
export default ProjectTile;
