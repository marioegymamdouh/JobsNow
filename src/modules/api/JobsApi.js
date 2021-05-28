import jobsAxios from "./axiosInstances";

const JobsApi = {
    getAllJobs: () => jobsAxios.get('/jobs?limit=12'),
    getRelatedSkills: (id) => jobsAxios.get(`/jobs/${id}/related_skills`)
}

export default JobsApi;