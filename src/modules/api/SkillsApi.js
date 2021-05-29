import jobsAxios from "./axiosInstances";

const JobsApi = {
    getSkillInfo: (skillId) => jobsAxios.get(`/skills/${skillId}`),
    getRelatedSkills: (skillId) => jobsAxios.get(`/skills/${skillId}/related_skills`),
    getRelatedJobs: (skillId) => jobsAxios.get(`/skills/${skillId}/related_jobs`),
}

export default JobsApi;