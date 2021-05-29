import RelatedItems from "../RelatedItems/RelatedItems";
import './JobData.css';
import {useEffect, useState} from "react";
import JobsApi from "../../../api/JobsApi";

const JobData = ({
    job
}) => {
    const [relatedSkills, setRelatedSkills] = useState();
    useEffect(() => {
        job && JobsApi.getRelatedSkills(job.uuid).then(({data}) => {
            setRelatedSkills(data.skills.splice(0,5))
        })
    }, [job]);

    return (
        <div className={'jobData'}>
            <RelatedItems
                relatedItems={relatedSkills}
                title={'Related Skills'}
                type={'skill'}
            />
        </div>
    )
};

export default JobData;