import SingleRelatedCard from "./SingleRelatedCard/SingleRelatedCard";
import './RelatedItems.css';

const RelatedItems = ({
    relatedItems,
    title,
    type
}) => {
    return (
        <>
            <h3>{title}</h3>
            <ul className={'relatedJobs'}>
                {relatedItems &&
                relatedItems.map(item => (
                    <li key={item.job_uuid}>
                        <SingleRelatedCard
                            item={item}
                            type={type}
                        />
                    </li>
                ))
                }
            </ul>
        </>
    )
};

export default RelatedItems;