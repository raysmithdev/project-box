import React from 'react';

const ProjectContext = React.createContext({
    projects: [],
    currentUser: '',
    loginUsername: '',
    handleLogin: () => {},
    handleUsernameChange: () => {},
})

export default ProjectContext;