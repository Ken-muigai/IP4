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

        var size = parseInt($('#home input[name=size]:checked').val());
        var crust = parseInt($('#crust input[name=crust]:checked ').val());
        var topping = parseInt($('#topping input[name=topping]:checked').val());
        var deliver = $('#selection option:selected').val();

        if(deliver){
            alert(`We have received your order of TOTAL: ${grandTotal(size,crust,topping,deliver)} check receipt at the bottom.Gracia.`);
        }else{
            alert(size + crust + topping)
        }

        $('.receipt #holder').append(`
        <h2>Receipt</h2>
        <li> SIZE KSH. ${size}</li>
        <li> CRUST KSH. ${crust}</li>
        <li> TOPPING KSH. ${topping}</li>
        <li> DELIVERY KSH. ${deliver}</li>
        <h6>FIRST ORDER TOTAL = Ksh. ${grandTotal(size,crust,topping,deliver)}</h6>`)
    })
})


