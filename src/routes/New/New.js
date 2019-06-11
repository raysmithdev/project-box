import React, { Fragment } from "react";
import ProjectForm from '../../components/ProjectForm/ProjectForm'

function New() {
  return(
    <Fragment>
      <h1 className="large-text">New Project</h1>
      <ProjectForm params={{ edit: 'N' }} />
    </Fragment>
  )
}

export default New;
