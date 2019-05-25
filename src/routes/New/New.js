import React, { Fragment } from "react";
import Form from '../../../src/components/Form/Form'

function New() {
  return(
    <Fragment>
      <h1 className="large-text">New Project</h1>
      <Form params={{ edit: 'N' }} />
    </Fragment>
  )
}

export default New;
