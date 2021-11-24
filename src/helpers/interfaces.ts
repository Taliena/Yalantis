export interface IPerson {
    id: number,
    firstName: string,
    lastName: string,
    dob: Date,
    date?: Date,
    formattedDate?: string,
    active?: boolean
}

export interface IGroupedPerson {
    group: string;
    info: IPerson[];
}