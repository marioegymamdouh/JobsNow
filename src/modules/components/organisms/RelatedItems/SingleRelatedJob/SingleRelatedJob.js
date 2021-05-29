import './SingleRelatedJob.css';
import {NavLink} from "react-router-dom";

const SingleRelatedJob = ({
    job
}) => {
    return (
        <div className={'singleRelatedJob'}>
            <NavLink to={`/job/${job.job_uuid}`}>{job.job_title}</NavLink>
            <div className={'singleRelatedJobDta'}>
                <div>
                    <h6>Importance:</h6> {job.importance}
                </div>
                <div>
                    <h6>Level:</h6> {job.level}
                </div>
            </div>
        </div>
    )
};

export default SingleRelatedJob;