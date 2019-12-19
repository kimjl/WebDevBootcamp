var annoy = prompt('Are we there yet?');

// while(true) {
//     if(annoy==='yes' || annoy==='yeah') {
//         alert('Yay, we finally made it');
//         break
//     }
//     else {
//         var annoy = prompt('Are we there yet?');
//     }
// }

//Colt's Solution
// while(annoy!=='yes' && annoy!=='yeah') {
//     var annoy = prompt('Are we there yet?');
// }
// alert('Yay, we finally made it');


//Version 2
while(annoy.indexOf('yes') === -1) {
    var annoy = prompt('Are we there yet?');
}
alert('Yay, we finally made it');