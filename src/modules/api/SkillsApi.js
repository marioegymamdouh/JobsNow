import jobsAxios from "./axiosInstances";

const SkillsApi = {
    getSkillInfo: (id) => jobsAxios.get(`/skills/${id}`),
    getRelatedSkills: (id) => jobsAxios.get(`/skills/${id}/related_skills`),
    getRelatedJobs: (id) => jobsAxios.get(`/skills/${id}/related_jobs`),
}

export default SkillsApi;