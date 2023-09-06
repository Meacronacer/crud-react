import './employees-list-item.css'


const EmployessListItems = (props) => {
    const {name, salary, onToggleProp, onDelete, increase, like, onSalaryInputChange} = props

    return (
        <li className={"list-group-item d-flex justify-content-between "
            + (increase ? 'increase' : '') + (like ? ' like': '')}>
    
            <span onClick={onToggleProp} data-toggle='like' className="list-group-item-label">{name}</span>
            <input type="text"
            onChange={onSalaryInputChange}
            className="list-group-item-input lst" value={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    data-toggle='increase'
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>
    
                <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>)
        
}


export default EmployessListItems;