import './RelatedItemsAside.css';
import { NavLink } from "react-router-dom";

const RelatedItemsAside = ({
    items,
    title,
    itemRoute
}) => {
    return (
        <div className={`relatedItemsAside ${items? '' : 'dummy'}`}>
            {items && (
                <>
                    <h2>{title}</h2>
                    <ul>
                        {
                            items.map(item => <li key={item.uuid}><NavLink to={`${itemRoute}/${item.uuid}`}>{item.name}</NavLink></li>)
                        }
                    </ul>
                </>
            )}
        </div>
    )
};

export default RelatedItemsAside;