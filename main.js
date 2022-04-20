// let arrExample = [434.43]

// arrExample.push(9);
// arrExample.push("hello world");
// arrExample.push(true, -3.9, '152');

// console.log(arrExample)
//--------------------------------------

// let supplyKit = ['rain coat', 'matches', 'blanket', 'water', 'meal packs', 'knife', 'first aid']

// supplyKit[1] = 'lighter';
// console.log(supplyKit); // Shows that 'lighter' has replaced 'matches'
// //--------------------------
// console.log(supplyKit[6]) // Shows Array before .pop of [6] 'first aid'
// supplyKit.pop();
// console.log(supplyKit[5]) // Shows Array after .pop of [6] 'first aid' to now be [5] 'knife'
// //--------------------------
// console.log(supplyKit[0]) // Shows Array before .shift of the first item 'rain coat'
// supplyKit.shift();
// console.log(supplyKit[0]) // Shows Array after .shift of the first item now 'lighter'
// //--------------------------

// supplyKit.unshift('twine');
// supplyKit.push('compass');

// console.log(supplyKit);
// console.log(supplyKit.length); // Shows final Array from all adjustments adding 'twine' and 'compass' to the front and back
//-----------------------------

// let supplyKit = ['twine', 'lighter', 'blanket', 'water', 'meal packs', 'knife', 'compass']

// var addRope = supplyKit.splice(3, 0, 'rope'); // Adds 'rope' between 'blanket' and 'water' using .splice
// console.log(addRope);
// var removeKnife = supplyKit.splice(supplyKit.indexOf('knife'),1); // Removes 'knife' from the Array using indexOf
// console.log(removeKnife);
// var newItems = supplyKit.splice(2, 3, 'water bottle','socks','jacket'); // Replaces the elements at indexes 2 - 4 with the items 'water bottle', 'socks', and 'jacket'
// console.log(newItems);

// console.log(supplyKit);

//------------------------------

// let desk1 = ['pencils', 'notebook', 3.14, true, 6.022e23];
// // console.log(desk1);
// let desk2 = ['pen', 'laptop', 'camera', 42, 'phone'];
// //let desk3 = desk1.concat(desk2); // concat combines array
// // console.log(desk3);
// // console.log(desk1.slice(1, -1)); // .slice($#FromIndex0, -$#FromEndOfArray)
// // console.log(desk2.slice(2, 4));

// var reverse1 = desk1.reverse();
// console.log('Reversed:', reverse1) // Reverses desk1

// var sort2 = desk2.sort();
// console.log('Sorted:', sort2) // Sorts desk2

//-------------------------------

// message = 'In the forest, no one can hear you code.'

// console.log(message.split())
// console.log(message.split('e'))
// console.log(message.split(''))

//-------------------------------

//myArray = ['A','c','c',7]

//console.log(myArray.join())
//console.log(myArray.join('a'))
//console.log(myArray.join(''))
//console.log(myArray.join('"'))

//-------------------------------

// let elem1 = ['hydrogen','H',1.008]
// let elem2 = ['helium','He',4.003]
// let elem3 = ['iron','Fe',55.85]

// let table = [];

// table.push(elem1, elem2, elem3);

// console.log(table[0][2]);
// console.log(table[1][0]);
// console.log(table[2][1]);


//3D Array

// outerArray[
//     middle[["nested"],[true],[7]],
//     middle2[["super-nested"],[""],[false]],
//     middle3[["very-nested"]]    
// ]

//------------------------------------


