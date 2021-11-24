import {IPerson} from "../helpers/interfaces";
import {EmployeeItem} from "./employeeItem";

export const EmployeeInfo: any = ({data, changeListBirthday}: { data: Array<IPerson>, changeListBirthday: Function}) => {
    if(data.length === 0) {
        return (
            <div className="empl_container-group italic">No Employees</div>
        )
    }
    return (
        <div className="empl_container-group">
            {data.map((item) => (
                <EmployeeItem key={item.id+'q'} data={item} changeListBirthday={changeListBirthday}/>
            ))}
        </div>
    );
}