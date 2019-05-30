import config from "../config";

const ProjectsApiService = {
  getProjects() {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      headers: {},
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getProject(projectId) {
    return fetch(`${config.API_ENDPOINT}/projects/${projectId}`, {
      headers: {},
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default ProjectsApiService;
