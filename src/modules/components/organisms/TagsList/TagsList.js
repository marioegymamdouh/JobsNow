import Tag from "../../atoms/Tag/Tag";
import './TagsList.css';

const TagsList = ({
    tags
}) => {
    return (
        <ul className='tagsListContainer'>
            {tags && tags.length > 0 ?
                tags.map((tag, index) =>
                    <Tag
                        key={index}
                        tag={tag}
                    />
                ) : (
                <li>No skills</li>
            )}
        </ul>
    );
};

export default TagsList;