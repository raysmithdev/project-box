import React from "react";

const ProjectContext = React.createContext({
  currentUser: "",
  currentUserId: '',
  project: "",
  projectList: [],
  handleLogin: () => {},
  handleUsernameChange: () => {},
  handleSubmitNewProject: () => {},
  editProject: () => {},
  setCurrentUser: () => {},
  setCurrentUserId: () => {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setProject: () => {},
  clearProject: () => {},
  setProjectList: () => {},
  deleteProject: () => {},
  handleClickCancel: () => {},
});

export default ProjectContext;
