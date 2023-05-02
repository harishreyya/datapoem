$(document).on('click','.plus', function(){
let plus = $(this).closest('.vote-bar').find('.votes').text()
 plus++
let plusOne = $(this).closest('.vote-bar').find('.votes');


$(plusOne).text(plus)

})

$(document).on('click','.minus', function(){
    let minus = $(this).closest('.vote-bar').find('.votes').text()
    minus--
    let   plusOne = $(this).closest('.vote-bar').find('.votes')

    if(minus > -1){
        $(plusOne).text(minus)
    }

    })

// $(document).on('click','.delete',function(){
//     $('.delete').addClass('d-none');
// })

$(document).on('click','.undo',function(){
    $('.delete').removeClass('d-none');
})