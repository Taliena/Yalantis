import {IGroupedPerson, IPerson} from "./interfaces";

export const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function groupByAlphabet(rawData: IPerson[]): IGroupedPerson[] {
    let arr: IGroupedPerson[] = [];
    ALPHABET.map((el) => arr.push({group: el, info: []}))
    rawData.map((el) => {
        let ind = arr.findIndex(i => i.group === el.firstName[0]);
        arr[ind].info.push(el);
        return arr;
    });
    arr.map((el) => {
        el.info.sort(sortByFirstName);
        return el;

        el.info.forEach((el) => {el.active = false});
    });
    return arr;
}

export function groupByMonths(rawData: IPerson[]): IGroupedPerson[] {
    let arr: IGroupedPerson[] = [];

    let monthNumber: number = new Date().getMonth();
    for (let i = 0; i < MONTHS.length; i++) {
        if (i + monthNumber < MONTHS.length) {
            arr.push({group: MONTHS[i + monthNumber], info: []});
        } else {
            arr.push({group: MONTHS[i + monthNumber - MONTHS.length], info: []});
        }
    }
    if (rawData) {
        rawData.map((el) => {
            el.date = new Date(el.dob);
            let month: string = MONTHS[el.date.getMonth()];
            el.formattedDate = el.date.getDate() + ' ' + month + ', ' + el.date.getFullYear();
            let index = arr.findIndex(i => i.group === month);
            arr[index].info.push(el);
            return arr;
        });
    }
    return arr;
}

export function addToBDList(arr: IGroupedPerson[], el: IPerson): IGroupedPerson[] {
    el.date = new Date(el.dob);
    let month: string = MONTHS[el.date.getMonth()];
    let index = arr.findIndex(i => i.group === month);
    arr[index].info.push(el);
    el.formattedDate = el.date.getDate() + ' ' + MONTHS[el.date.getMonth()] + ', ' + el.date.getFullYear();
    el.active = true;
    arr[index].info.sort(sortByLastName);
    return arr;
}

export function deleteFromBDList(arr: IGroupedPerson[], el: IPerson): IGroupedPerson[] {
    el.date = new Date(el.dob);
    let month: string = MONTHS[el.date.getMonth()];
    let index = arr.findIndex(i => i.group === month);
    el.active = false;
    let i = arr[index].info.indexOf(el);
    if (i !== -1) {
        arr[index].info.splice(i, 1);
    }
    el.formattedDate = el.date.getDate() + ' ' + MONTHS[el.date.getMonth()] + ', ' + el.date.getFullYear();
    return arr;
}

function sortByLastName(a: IPerson, b: IPerson): number {
    if (a.lastName > b.lastName) {
        return 1
    } else return -1;
}

function sortByFirstName(a: IPerson, b: IPerson): number {
    if (a.firstName > b.firstName) {
        return 1
    } else return -1;
}