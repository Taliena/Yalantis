import React, {useState, useEffect} from "react";
import {IGroupedPerson, IPerson} from "../helpers/interfaces";
import {EmployeesList} from "./employeesList";
import {ALPHABET, groupByAlphabet} from "../helpers/helpers";
import {EmployeeInfo} from "./employeesInfo";

export const Employees = () => {
    const [employees, setEmployees]: [any[], Function] = useState([]);
    const [isLoading, setIsLoading]: [boolean, Function] = useState(true);
    const [isError, setIsError]: [boolean, Function] = useState(false);
    const [groupedEmployees, setGrouppedEmployees]: [IGroupedPerson[], Function] = useState([]);

    useEffect(() => {
        const getEmployees = async () => {
            setIsLoading(true);
            try {
                const response: any = await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users");
                const results  = await response.json();
                setEmployees(results);
                setIsError(false);
                setGrouppedEmployees(groupByAlphabet(results));

            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getEmployees();
    }, []);

    if (isLoading) {
        return <div className="App">Loading</div>
    }
    if (isError) {
        return <div className="App">Error</div>
    }

    return (<div className="App">
        <div>
            <h1>Employees</h1>
            <EmployeesList data={groupedEmployees}/>
        </div>
        <div>
            <h1>Employees birthday</h1>
        </div>
    </div>)
};