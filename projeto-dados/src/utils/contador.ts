export interface CountList{
    [key:string]:number
}
export default function contador(arr:(string | number)[]){
    return arr.reduce((acc: CountList, atual) =>{
        if(acc[atual]){
            acc[atual] += 1;
        }else {
            acc[atual] = 1;
        }
        return acc;
    }, {})
}