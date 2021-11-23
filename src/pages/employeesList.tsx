import {IGroupedPerson, IPerson} from "../helpers/interfaces";

import {EmployeeInfo} from "./employeesInfo";
import {EmployeeItem} from "./employeeItem";

export const EmployeesList: any = ({data}: { data: Array<IGroupedPerson> }) => {
    return (
        <div>
            {data.map((item) => (
                <div>
                    <div>{item.group}</div>
                    <EmployeeInfo data={item.info}/>
                </div>
            ))}
        </div>
    );

}