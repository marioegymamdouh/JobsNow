import jobsAxios from "./axiosInstances";

const JobsApi = {
    getAllJobs: () => jobsAxios.get('/jobs?limit=12'),
    getJobInfo: (id) => jobsAxios.get(`/jobs/${id}`),
    getRelatedSkills: (id) => jobsAxios.get(`/jobs/${id}/related_skills`),
    getRelatedJobs: (id) => jobsAxios.get(`/jobs/${id}/related_jobs`),
}

export default JobsApi;