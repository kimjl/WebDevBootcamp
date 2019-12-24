// $('button').on('click', function() {
//     $('div').fadeOut(1000, function() {
//         $(this).remove();
//     });
// })

//display:none
// $('button').on('click', function() {
//     $('div').fadeIn(1000, function() {
//         // $(this).remove();
//     });
// });

//display:none
// $('button').on('click', function() {
//     $('div').fadeToggle(1000, function() {
//     });
// });

//display:none
// $('button').on('click', function() {
//     $('div').slideDown();
// });

// $('button').on('click', function() {
//     $('div').slideUp();
// });

$('button').on('click', function() {
    $('div').slideToggle(1000, function() {
        $(this).remove();
    });
});

