function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm () {
    
    var first = $('.first-name').val().trim();
    var last = $('.last-name').val().trim();
    var user = $('.user').val().trim();
    var pswd = $('.pswd').val().trim();
    var pswdC = $('.pswd-c').val().trim();
    var email = $('.email').val().trim();

    if (first.length < 4) {
        
        return false;

    }

    if (last.length < 4) {
         
        return false;

    }

    if (user.length < 8 || user.length > 21) {
           
        return false;
    } 

    if (pswd != pswdC) {
        
        return false;
    }

    if (!validateEmail(email) ){

        return false;

    } 
     
    if ($('#form').hasClass('.is-invalid')){

        return false;

    } 

    return true;

};

$('#registration').submit(function (e) {
    if (!validateForm) {
        e.preventDefault();
    }
});

$('#username').on('blur', function() {

    var el = $(this);

    $.ajax({
            url: 'username.php',
            method: 'post',
            data: {
                username: el.val()
            },
            dataType: "json",   
            
            success: function (result) {
                if (result.valid) {
                    el.addClass('is-valid');
                }else{
                    el.addClass('is-invalid');
                }
            }

    });
});

    
