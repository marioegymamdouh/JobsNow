import Home from "../components/pages/Home/Home";
import Skill from "../components/pages/Skill/Skill";
import Job from "../components/pages/Job/Job";

const routes = [
    {
        name: 'home',
        path: '/',
        component: <Home/>,
        appearInNav: true
    },
    {
        name: 'search',
        path: '/search',
        component: <div>search</div>,
        appearInNav: true
    },
    {
        name: 'history',
        path: '/history',
        component: <div>history</div>,
        appearInNav: true
    },
    {
        name: 'skill',
        path: '/skill/:skillId',
        component: <Skill/>,
        appearInNav: false
    },
    {
        name: 'job',
        path: '/job/:jobId',
        component: <Job/>,
        appearInNav: false
    },

];

export default routes;