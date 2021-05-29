import './TwoBigCol.css';

const TwoBigCol = (props) => {
    return (
        <div className={'twoBigCol'}>
            {props.children}
        </div>
    )
};

export default TwoBigCol;