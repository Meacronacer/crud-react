import './app.css';
import { Component } from 'react';
import HeaderInfo from '../header-info/header-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilters from '../filters/filters';
import EmployessList from '../employees-list/employees-list';
import EmployeesAddForm from '../add-employees-form/add-employess-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name:'John Smith', salary:550, increase:false, like:true, id:1},
                {name:'Leonel Marhsal', salary:1200, increase:true, like:false, id:2},
                {name:'Michael L.', salary:3600, increase:false, like: false, id:3}
            ],
            term: '',
            filter: 'all'
        }
    }

    getNewId = () => {
        return this.state.data.length + 1;
    }

    
    onDeleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onAddItem = (name, salary) => {
        const newItem = {'name':name,
                         'salary':salary,
                          increase:false,
                          like:false,
                          id:this.getNewId()}

        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    bonusTake = () => {
        return this.state.data.filter(item => item.increase).length
    }

    totalEmployees = () => {
        return this.state.data.length;
    }

    searchInclude = (name) => {
        this.setState({
            term: name
        })
    }

    filtrByBtn = (items, filtr) => {
        switch(filtr) {
            case 'bonus':
                return items.filter(item => item.increase);
            case 'moreThan1000':
                return items.filter(item => item.salary >= 1000);
            default:
                return items
        }
    }

    dataFiltr = (data) => {
        return data.filter(item =>
            item.name.toLowerCase().indexOf(this.state.term) > -1)
    }

    onFiltrBtnSelect = (filter) => {
        this.setState({filter})
    }

    onSalaryInputChange = (e, id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id ) {
                    return {...item, salary: Number(e.target.value.replace(/[^+\d]/g, ''))}
                }
                return item;
            })
        }))
    }

    render() {
        const {data, filter} = this.state
        const filteredData = this.filtrByBtn(this.dataFiltr(data), filter)
        
        return (
            <div className='app'>
                <HeaderInfo 
                bonusTake={this.bonusTake}
                totalEmployees={this.totalEmployees}
                />
    
                <div className="search-panel">
                    <SearchPanel searchInclude={this.searchInclude}/>
                    <AppFilters filter={filter} onFiltrBtnSelect={this.onFiltrBtnSelect}/>
                </div>
    
                <EmployessList
                    onToggleProp={this.onToggleProp}
                    data={filteredData}
                    onDelete={this.onDeleteItem}
                    onSalaryInputChange={this.onSalaryInputChange}
                 />
                 
                <EmployeesAddForm onAdd={this.onAddItem}/>
            </div>
        );
    }
}


export default App;