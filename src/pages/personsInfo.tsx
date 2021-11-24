import {IPerson} from "../helpers/interfaces";

export const PersonsInfo: any = ({data}: { data: Array<IPerson> }) => {
    debugger;
    if (data.length === 0) {
        return (
            <div className='italic'>No Employees</div>
        )
    }
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id + 'bd'}>{item.firstName + ' ' + item.lastName + ' - ' + item.formattedDate}</li>
            ))}
        </ul>
    );
}