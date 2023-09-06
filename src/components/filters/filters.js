import './filters.css'

const AppFilters = (props) => {

    const btnsData = [
        {name:'all', label: 'All Employess'},
        {name:'bonus', label: 'Salary Bonus'},
        {name:'moreThan1000', label: 'Salary more than 1000$'}
    ];

    const buttons = btnsData.map(({name, label}) => {
        const active = name === props.filter;
        return (
            <button 
            className={"btn " + (active ? 'btn-light': 'btn-outline-light')}
            type='button'
            key={name}
            onClick={() => props.onFiltrBtnSelect(name)}
            >{label}</button>
        )
    })

    return  (
        <div className="btn-group">
            {buttons}

        </div>
    )

}

export default AppFilters;