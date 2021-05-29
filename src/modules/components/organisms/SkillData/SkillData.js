import { useEffect, useState } from 'react';
import './SkillData.css';
import RelatedItems from "../RelatedItems/RelatedItems";
import SkillsApi from "../../../api/SkillsApi";

const SkillData = ({
    skill
}) => {
    const [relatedJobs, setRelatedJobs] = useState();
    useEffect(() => {
        skill && SkillsApi.getRelatedJobs(skill.uuid).then(({data}) => {
            setRelatedJobs(data.jobs.splice(0,5))
        })
    }, [skill]);

    return (
        <div className={'skillData'}>
            <h2>Description</h2>
            <p>{skill?.description}</p>
            <RelatedItems
                relatedItems={relatedJobs}
                title={'Related Jobs'}
                type={'job'}
            />
        </div>
    )
};

export default SkillData;