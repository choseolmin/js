function myMap(arr, transformFunct){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(transformFunct(arr[i]));
    }
    return result;
}

const numbers = [1,2,3,4];

const squares = myMap(numbers,function(num){
    return num*num;
});

console.log(squares);