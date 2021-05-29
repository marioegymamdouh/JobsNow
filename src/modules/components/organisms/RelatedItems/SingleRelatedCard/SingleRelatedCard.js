import './SingleRelatedCard.css';
import { NavLink } from "react-router-dom";

const SingleRelatedCard = ({
    item,
    type
}) => {
    return (
        <div className={'singleRelatedCard'}>
            {type === 'job' ? (
                <>
                    <NavLink to={`/job/${item.job_uuid}`}>{item.job_title}</NavLink>
                    <div className={'singleRelatedCardData'}>
                        <div>
                            <h6>Importance:</h6> {item.importance}
                        </div>
                        <div>
                            <h6>Level:</h6> {item.level}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <NavLink to={`/skill/${item.skill_uuid}`}>{item.skill_name}</NavLink>
                    <p>{item.description}</p>
                    <div className={'singleRelatedCardData'}>
                        <div>
                            <h6>Importance:</h6> {item.importance}
                        </div>
                        <div>
                            <h6>Level:</h6> {item.level}
                        </div>
                    </div>
                </>
            )}

        </div>
    )
};

export default SingleRelatedCard;