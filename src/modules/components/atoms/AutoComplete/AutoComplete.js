import './AutoComplete.css'

const AutoComplete = ({
    name,
    dataList
}) => {
    return (
        <div className={'autoCompleteInputWrapper'}>
            <input className={'autoCompleteInput'} type='text' list={name} placeholder='123'/>
            { dataList?.length > 0 &&
            <datalist id={name}>
                {dataList.map(option => <option>{option}</option>)}
            </datalist>
            }
        </div>
    )
};

export default AutoComplete;