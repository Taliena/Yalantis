import {IGroupedPerson} from "../helpers/interfaces";
import {EmployeeInfo} from "./employeesInfo";

export const EmployeesList: any = ({data, changeListBirthday}: { data: Array<IGroupedPerson>, changeListBirthday: Function }) => {
    return (
        <div className='empl_container'>
            {data.map((item) => (
                <div className='empl_container-wrapper' key={item.group}>
                    <div className='empl_container-groupName'>{item.group}</div>
                    <EmployeeInfo data={item.info} changeListBirthday={changeListBirthday}/>
                </div>
            ))}
        </div>
    );
};