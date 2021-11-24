import {IGroupedPerson, IPerson} from "./interfaces";

export const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function groupByAlphabet(rawData: IPerson[]): IGroupedPerson[] {
    let arr: IGroupedPerson[] = [];
    ALPHABET.map((el) => arr.push({group: el, info: []}))
    rawData.map((el) => {
        let ind = arr.findIndex(i => i.group === el.firstName[0]);
        arr[ind].info.push(el);
    });
    arr.map((el) => {
        el.info.sort(sortByFirstName);
    });
    return arr;
}

export function groupByMonths(rawData: IPerson[]): IGroupedPerson[] {
    let arr: IGroupedPerson[] = [];
    MONTHS.map((el) => arr.push({group: el, info: []}));
    if (rawData) {
        rawData.map((el) => {
            el.date = new Date(el.dob);
            el.formattedDate = el.date.getDate()+ ' '+MONTHS[el.date.getMonth()+1]+', '+ el.date.getFullYear();
            arr[el.date.getMonth()].info.push(el);
        });
    }
    return arr;
}

export function addToBDList(arr: IGroupedPerson[], el: IPerson): IGroupedPerson[] {
    el.date = new Date(el.dob);
    arr[el.date.getMonth()].info.push(el);
    el.formattedDate = el.date.getDate()+ ' '+MONTHS[el.date.getMonth()+1]+', '+ el.date.getFullYear();
    el.active = true;
    arr[el.date.getMonth()].info.sort(sortByLastName);
    return arr;
}

export function deleteFromBDList(arr: IGroupedPerson[], el: IPerson): IGroupedPerson[] {
    el.date = new Date(el.dob);
    el.active= false;
    let i = arr[el.date.getMonth()].info.indexOf(el);
    if (i !== -1) {
        arr[el.date.getMonth()].info.splice(i, 1);
    }
    el.formattedDate = el.date.getDate()+ ' '+MONTHS[el.date.getMonth()+1]+', '+ el.date.getFullYear();
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