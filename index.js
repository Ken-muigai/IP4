$(document).ready(function(){
    $('#submission').click(function(e){
        e.preventDefault();
        console.log($('#home input[name=size]:checked  ').val());
        console.log($(' input[name=crust]:checked ').val());
        console.log($('#menu2 input[name=topping]:checked').val());
        console.log($('#selection:selected').text())
    })
})