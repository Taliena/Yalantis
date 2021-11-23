import {IGroupedPerson, IPerson} from "./interfaces";

export const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function groupByAlphabet (rawData){
    let arr = [];
    ALPHABET.map((el) => arr.push({group: el, info: []}))
    rawData.map((el)=>{
        let ind = arr.findIndex(i => i.group === el.firstName[0]);
        arr[ind].info.push(el);
    });
    return arr;
}

export function groupByMonths(rawData) {
    let arr = [];
    MONTHS.map((el) => arr.push({group: el, info: []}));
    rawData.map((el)=>{
        let ind = arr.findIndex(i => i.group === el.firstName[0]);
        arr[el.dob.getMonth()].info.push(el);
    });
    return arr;
}