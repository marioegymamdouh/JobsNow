import { useEffect, useState } from 'react';
import JobsApi from "../../../api/JobsApi";
import JobCard from "../../organisms/JobCard/JobCard";
import TwoBigCol from "../../layouts/TwoBigCol/TwoBigCol";
import PageHeader from "../../atoms/PageHeader/PageHeader";

const Home = () => {

    const [jobs, setJobs] = useState();

    useEffect(() => {
        JobsApi.getAllJobs().then(({data}) => {
            setJobs(data.splice(0,12))
        })
    }, []);

    return (
        <div>
            <PageHeader>All Jobs ({jobs?.length})</PageHeader>
            <TwoBigCol>
                { jobs && jobs.map((job, index) =>
                    <JobCard
                        key={index}
                        job={job}
                    />
                )}
            </TwoBigCol>
        </div>
    );
};

export default Home;