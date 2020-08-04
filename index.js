var size = parseInt($('#home input[name=size]:checked').val());
var crust = parseInt($(' input[name=crust]:checked ').val());
var topping = parseInt($('#menu2 input[name=topping]:checked').val());
var deliver = parseInt($('#selection option:selected').val());

function grandTotal(m,n,o,p){
    return m + n + o + p
}


$(document).ready(function(){
    $('#submission').click(function(e){
        e.preventDefault();
        console.log(grandTotal(size,crust,topping,deliver))
    })
})