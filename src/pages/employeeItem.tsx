import {IPerson} from "../helpers/interfaces";

export const EmployeeItem: any = ({data, changeListBirthday}: { data: IPerson, changeListBirthday: Function }) => {

    function formChanged(e: any, id: number) {
        e.target.value === 'true' ? changeListBirthday(id, 'add') : changeListBirthday(id, 'delete');
    }

    return (
        <div className='empl_container-personInfo'>
            <form onChange={(e) => formChanged(e, data.id)}>
                <div
                    className={data.active ? 'empl_container-personName checked' : 'empl_container-personName unchecked'}>{data.firstName + ' ' + data.lastName}</div>
                <div>
                    <div>
                        <input type="radio" id={data.id + 'na'} name={'' + data.id} value="false"
                               defaultChecked
                        />
                        <label htmlFor={data.id + 'na'}>not active</label>
                    </div>

                    <div>
                        <input type="radio" id={data.id + 'a'} name={'' + data.id} value="true"
                        />
                        <label htmlFor={data.id + 'a'}>active</label>
                    </div>
                </div>
            </form>
        </div>
    );
}