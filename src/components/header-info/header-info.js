
import './header-info.css';

const HeaderInfo = (props) => {

    return (
        <div className="header-info">
            <h1>Accounting for employees in the company</h1>
            <h2>Total number of employees: {props.totalEmployees()}</h2>
            <h2>Salary bonus: {props.bonusTake()}</h2>
        </div>
    );
}

export default HeaderInfo;