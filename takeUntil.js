const takeUntil = function(array, callback) {
    //takes items from arrays until callback returns fales
    let store = []
    for(let index of array){
       console.log(`this is insidethe loop:${index}`)
    if (!callback(index)){

         store.push(index)
         console.log (`this is insidethe if:${index}`)
    } else{
        break
    }
   
   }
   return store
}

    




    



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//EXPECTED:[ 1, 2, 5, 7, 2 ]