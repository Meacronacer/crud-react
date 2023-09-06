import EmployessListItems from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployessList = ({data, onDelete, onToggleProp, onSalaryInputChange}) => {
    const elements = data.map(item => {
        const {id, ...itemsProps} = item;
        
        return <EmployessListItems 
        key={id}
        {...itemsProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        onSalaryInputChange={(e) => onSalaryInputChange(e, id)}
        />
    })
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployessList;