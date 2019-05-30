import React from 'react';

const ProjectContext = React.createContext({
    projects: [],
    currentUser: '',
    loginUsername: '',
    handleLogin: () => {},
    handleUsernameChange: () => {},
    handleSubmitNewProject: () => {},
    setCurrentUser: () => {},
})

export default ProjectContext;