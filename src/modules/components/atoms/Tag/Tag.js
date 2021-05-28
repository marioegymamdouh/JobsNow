import './Tag.css'

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
            {tag?.skill_name}
        </li>
    )
}

export default Tag;