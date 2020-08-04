function grandTotal(m,n,o,p){
    var q = parseInt(m);
    var r = parseInt(n);
    var s = parseInt(o);
    var t = parseInt(p)
    return q + r + s + t
}


$(document).ready(function(){
    $('#submission').click(function(e){
        e.preventDefault();
        var size = $('#home input[name=size]:checked').val();
        var crust = $(' input[name=crust]:checked ').val();
        var topping = $('#menu2 input[name=topping]:checked').val();
        var deliver = $('#selection option:selected').val();
        console.log(grandTotal(size,crust,topping,deliver))
    })
})

$(document).ready(function(){
    $('.form-group input').click(function(e){
        e.preventDefault();
        var crust = $('#crust input[name=crust]selected').val()
        console.log(crust)
    })
})