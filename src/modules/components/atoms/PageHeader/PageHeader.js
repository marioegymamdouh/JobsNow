import './PageHeader.css'

const PageHeader = (props) => {
    return (
        <h1 className={'pageHeader'}>
            {props.children}
        </h1>
    )
};

export default PageHeader;