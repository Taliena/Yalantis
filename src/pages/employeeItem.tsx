import {IPerson} from "../helpers/interfaces";

export const EmployeeItem: any = ({data, changeListBirthday}: { data: IPerson, changeListBirthday: Function }) => {
    let className: string = '';
    function deleteFromList(id: number): void {
        changeListBirthday(id, 'delete');
        className = '';
    }
    function addToList(id: number) {
        changeListBirthday(id, 'add');
    }
    return (
        <div className='empl_container-personInfo'>
            <form>
                <div className={data.active?'empl_container-personName checked':'empl_container-personName unchecked'}>{data.firstName + ' ' + data.lastName}</div>
                <div>
                    <div>
                        <input type="radio" id={data.id + 'na'} name={'' + data.id} value="false"
                               onClick={(e) => deleteFromList(data.id)}
                        />
                        <label htmlFor={data.id + 'na'}>not active</label>
                    </div>

                    <div>
                        <input type="radio" id={data.id + 'a'} name={'' + data.id} value="true"
                               onClick={(e) => addToList(data.id)}
                        />
                        <label htmlFor={data.id + 'a'}>active</label>
                    </div>
                </div>
            </form>
        </div>
    );
}