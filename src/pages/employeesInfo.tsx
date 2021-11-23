import {IGroupedPerson, IPerson} from "../helpers/interfaces";
import {EmployeeItem} from "./employeeItem";

export const EmployeeInfo: any = ({data}: { data: Array<IPerson> }) => {
    if(data.length === 0) {
        return (
            <div>No Employees</div>
        )
    }
    return (
        <div>
            {data.map((item) => (
                <div>
                    <EmployeeItem data={item}/>
                </div>
            ))}
        </div>
    );
}