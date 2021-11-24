import {IGroupedPerson} from "../helpers/interfaces";
import {PersonsInfo} from "./personsInfo";


export const EmployeesBirthdayList: any = ({data, length}: { data: Array<IGroupedPerson>, length: number }) => {
    if (length === 0) {
        return (
            <div className='italic'>Employees List is empty</div>
        )
    }
        return (
            <div className='emplBirthday_container-wrapper'>
                {data.map((item) => (
                    <div className='emplBirthday_container-group' key={item.group + 'bd'}>
                        <div className='emplBirthday_container-groupName'>{item.group}</div>
                        <PersonsInfo data={item.info}/>
                    </div>

                ))}
            </div>
        );
};