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
        var crust = $('#crust input[name=crust]:checked ').val();
        var topping = $('#topping input[name=topping]:checked').val();
        var deliver = $('#selection option:selected').val();
        console.log(size,crust,topping,deliver);
    })
})


