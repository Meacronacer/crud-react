import './search-panel.css'
import { Component } from 'react';

class SearchPanel extends Component {

    onSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        this.props.searchInclude(term);
    }

    render() {
        return (
            <input type='text'
            onChange={this.onSearchChange}
            value={this.search}
            className='form-control search-input'
            placeholder='Find employees'/>
        )
    }
}

export default SearchPanel;