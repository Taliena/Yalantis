export interface IPerson {
    id: number,
    firstName: string,
    lastName: string,
    dob: Date
}

export interface IGroupedPerson {
    group: string;
    info: IPerson[];
}