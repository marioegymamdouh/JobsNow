import { useEffect, useState } from 'react';
import JobsApi from "../../../api/JobsApi";
import JobCard from "../../organisms/JobCard/JobCard";

const Home = () => {

    const [jobs, setJobs] = useState();

    useEffect(() => {
        JobsApi.getAllJobs().then(({data}) => {
            setJobs(data.splice(0,12))
        })
    }, []);

    return (
        <div>
            <h1>All Jobs ({jobs?.length})</h1>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '15px'}}>
                { jobs && jobs.map((job, index) =>
                    <JobCard
                        key={index}
                        job={job}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;