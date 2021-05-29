import SingleRelatedJob from "../SingleRelatedJob/SingleRelatedJob";
import './RelatedJobs.css';

const RelatedJobs = ({
    relatedJobs
}) => {
    return (
        <>
            <h3>Related Jobs</h3>
            <ul className={'relatedJobs'}>
                {relatedJobs &&
                relatedJobs.map(item => (
                    <li key={item.job_uuid}>
                        <SingleRelatedJob
                            job={item}
                        />
                    </li>
                ))
                }
            </ul>
        </>
    )
};

export default RelatedJobs;