import {IPerson} from "../helpers/interfaces";

export const EmployeeItem: any = ({data}: { data: IPerson }) => {
    return (
        <div>
            <form>
            <div>{data.firstName + ' ' + data.lastName}</div>
            <div>
                <input type="radio" id={data.id+'na'} name={''+data.id} value="not_active"
                       checked/>
                    <label htmlFor={data.id+'na'}>not active</label>

                <input type="radio" id={data.id+'a'} name={''+data.id} value="active"
                       />
                <label htmlFor={data.id+'a'}>active</label>
            </div>
            </form>
        </div>
    );
}