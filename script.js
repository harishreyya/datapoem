$(document).on('click','.plus', function(){
let plus = $(this).closest('.vote-bar').find('.votes').text()
 plus++
let plusOne = $(this).closest('.vote-bar').find('.votes');
plusOne.text(plus);
})

$(document).on('click','.minus', function(){
    let minus = $(this).closest('.vote-bar').find('.votes').text()
    minus--
    plusOne = $(this).closest('.vote-bar').find('.votes')
    $(plusOne).text(minus)
    })

