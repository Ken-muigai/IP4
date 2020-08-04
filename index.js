var size = $('#home input[name=size]:checked  ').val();
var crust = $(' input[name=crust]:checked ').val();
var topping = $('#menu2 input[name=topping]:checked').val();
var deliver = $('#selection option:selected').val();

function grandTotal(m,n,o,p){
    return m + n + o + p
}


$(document).ready(function(){
    $('#submission').click(function(e){
        e.preventDefault();
        console.log(grandTotal(size,crust,topping,deliver))
    })
})