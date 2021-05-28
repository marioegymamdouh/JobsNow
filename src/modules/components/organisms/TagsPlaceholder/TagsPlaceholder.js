import _ from 'lodash';
import Tag from "../../atoms/Tag/Tag";
import '../TagsList/TagsList.css';

const TagsPlaceholder = () => {

    const dummyArray = new Array(5).fill(0).map(() => _.random(70,140))

    return (
        <ul className='tagsListContainer'>
            {
                dummyArray.map((item, index) =>
                    <Tag
                        key={index}
                        style={{width: `${item}px`}}
                        dummy={true}
                    />)
            }
        </ul>
    );
};

export default TagsPlaceholder;