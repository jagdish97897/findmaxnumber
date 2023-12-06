// //find the maximum number
// function jagdish()
// {
//     let max=array[0];
//     for(let i=1; i<array.length; i++){
//         if(array[i]>max){
//             max=array[i];
//         }
//     }
//     return max;

// }
// const array=[9,8,4,3];
// const maximum=jagdish(array)
// console.log(maximum)//output=9


//find the minimum number 
function jagdish()
{
    let max=array[0];
    for(let i=1; i<array.length; i++){
        if(array[i]<max){
            max=array[i];
        }
    }
    return max;

}
const array=[9,8,4,3];
const maximum=jagdish(array)
console.log(maximum)//output=3