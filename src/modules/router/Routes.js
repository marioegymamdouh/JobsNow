import Home from "../components/pages/Home/Home";

const routes = [
    {
        name: 'home',
        path: '/',
        component: <Home/>
    },
    {
        name: 'search',
        path: '/search',
        component: <div>search</div>
    },
    {
        name: 'history',
        path: '/history',
        component: <div>history</div>
    },

];

export default routes;