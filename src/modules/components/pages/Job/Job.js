import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import PageHeader from "../../atoms/PageHeader/PageHeader";
import JobsApi from "../../../api/JobsApi";
import OneBigOneSmallCol from "../../layouts/OneBigOneSmallCol/OneBigOneSmallCol";
import RelatedItemsAside from "../../organisms/RelatedItems/RelatedItemsAside/RelatedItemsAside";
import JobData from "../../organisms/JobData/JobData";

const Job = () => {
    const params = useParams();
    const [job, setJob] = useState();
    const [relatedJobs, setRelatedJobs] = useState();

    useEffect(() => {
        JobsApi.getJobInfo(params.jobId).then(({data}) => {
            setJob(data)
        }).catch(() => {
            alert('Error happened please refresh...')
        })

        JobsApi.getRelatedJobs(params.jobId).then(({data}) => {
            setRelatedJobs(data.related_job_titles.splice(0, 12).map(job => ({
                uuid: job.uuid,
                name: job.title
            })))
        }).catch(() => {
            alert('Error happened please refresh...')
        })

    }, [params]);

    return (
        <div>
            <PageHeader>{job?.title}</PageHeader>
            <OneBigOneSmallCol>
                <JobData
                    job={job}
                />
                <RelatedItemsAside
                    items={relatedJobs}
                    itemRoute={'/job'}
                    title={'Related Jobs'}
                />
            </OneBigOneSmallCol>
        </div>
    )
};

export default Job;