import React from "react";

const ProjectContext = React.createContext({
  currentUser: "",
  project: "",
  handleLogin: () => {},
  handleUsernameChange: () => {},
  handleSubmitNewProject: () => {},
  setCurrentUser: () => {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setProject: () => {},
  clearProject: () => {},
  setProjectList: () => {},
});

export default ProjectContext;
