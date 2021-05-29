import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import JobsApi from "../../../api/JobsApi";
import './JobCard.css'
import TagsList from "../TagsList/TagsList";
import TagsPlaceholder from "../TagsPlaceholder/TagsPlaceholder";

const JobCard = ({
    job
}) => {

    const [skills, setSkills] = useState();

    useEffect(() => {
        // TODO there is performance leak as skill returning with separated calls
        JobsApi.getRelatedSkills(job.uuid).then(({ data }) => {
            setSkills(data.skills.splice(0,5))
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='jobCardContainer'>
            <h3>{job.title}</h3>
            <p>RelatedSkills</p>
            <div className='tagsListOuter'>
                {skills === undefined ? (
                    <TagsPlaceholder/>
                ) : (
                    <TagsList tags={skills}/>
                )}
            </div>
            <NavLink to={'/'}>
                View Job Details
            </NavLink>
        </div>
    );
};

export default JobCard;