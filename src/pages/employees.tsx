import React, {useState, useEffect} from "react";
import {IGroupedPerson, IPerson} from "../helpers/interfaces";
import {EmployeesList} from "./employeesList";
import {EmployeesBirthdayList} from "./employeeBirthdayList";
import {addToBDList, groupByAlphabet, groupByMonths, deleteFromBDList} from "../helpers/helpers";

export const Employees = () => {
    const [employees, setEmployees]: [IPerson[], Function] = useState([]);
    const [isLoading, setIsLoading]: [boolean, Function] = useState(true);
    const [isError, setIsError]: [boolean, Function] = useState(false);
    const [groupedEmployees, setGrouppedEmployees]: [IGroupedPerson[], Function] = useState([]);
    const [birthdayList, setBirthdayList]: [IGroupedPerson[], Function] = useState([]);
    const [length, setLength]: [number, Function] = useState(0);
    const [list, setList]: [number[], Function] = useState([]);

    useEffect(() => {
        debugger;
        const getEmployees = async () => {
            setIsLoading(true);
            try {
                const response: any = await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users");
                const results = await response.json();
                setEmployees(results);
                setIsError(false);
                setGrouppedEmployees(groupByAlphabet(results));
                setBirthdayList(groupByMonths([]));
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getEmployees();
    }, []);

    const changeListBirthday = (id: number, param: string) => {
        if (param === 'add') {
            if (list.indexOf(id) === -1) {
                let ind: number = employees.findIndex(i => i.id === id);
                let l: IGroupedPerson[] = addToBDList(birthdayList, employees[ind])
                setBirthdayList(l);
                list.push(id);
                setList(list);
                setLength(list.length);
            }
        } else {
            let index = list.indexOf(id);
            if (index !== -1) {
                let ind: number = employees.findIndex(i => i.id === id);
                let l: IGroupedPerson[] = deleteFromBDList(birthdayList, employees[ind]);
                setBirthdayList(l);
                list.splice(index, 1);
                setList(list);
                setLength(list.length);
            }
        }
    };

    if (isLoading) {
        return <div className="App">Loading</div>
    }
    if (isError) {
        return <div className="App">Error</div>
    }

    return (<div className="App">
        <div>
            <h1>Employees</h1>
            <EmployeesList data={groupedEmployees} changeListBirthday={changeListBirthday}/>
        </div>
        <div>
            <h1>Employees birthday</h1>
            <EmployeesBirthdayList data={birthdayList} length={length}/>
        </div>
    </div>)
};