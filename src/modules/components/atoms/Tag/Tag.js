import './Tag.css'
import {NavLink} from "react-router-dom";

const Tag = ({
    tag,
    style,
    dummy
}) => {
    return (
        <li
            className={`tag ${dummy? 'dummy' : ''}`}
            style={style}
        >
            {!dummy &&
                <NavLink to={`/skill/${tag.skill_uuid}`}>
                    {tag?.skill_name}
                </NavLink>
            }

        </li>
    )
}

export default Tag;