let  fname=$('#fname'),
    mailMe=$('#mailMe'),
    pnumb=$('#pnumb'),
    pword = $('#pword'),
    updateContainerForm = $('#updateContainerForm'),
    loginbtn=$('#loginbtn')
    finisher=$('#finisher');
let  userIndex,
    user = [];
let userIpAdd = "http://159.65.21.42:9000";


// updateContainerForm.hide()
// GetLoginDetails();
finisher.on('click', function () {
    let dataobj = {
        "name": fname.val(),
        "phone": pnumb.val(),
        "email": mailMe.val(),
        "password": pword.val()
    };
    console.log(dataobj);
        $.ajax({
            type: 'POST',
            url: `${userIpAdd}/register`,
            data: dataobj,
            success: function (response) {
                console.log(response)
                if (response.error) {
                    alert(`Registration failed, ${response.error}`);
                } else {
                    console.log(response);
                    alert(`Registration successful, welcome ${response.name}`);
                    window.location.href = 'chart.html'
                }
            },
            error: function (err) {
                console.log(err);
            },
        })
    
})

loginbtn.on('click', function (){
    let dataobj = {
        "email": mailMe.val(),
        "password": pword.val()
    };
    
        $.ajax({
            type: 'POST',
            url: `${userIpAdd}/login`,
            data: dataobj,
            success: function (response) {
                console.log(response)
                if (response.error) {
                    alert(`Registration failed, ${response.error}`);
                }  else {
                    console.log(response);
                    alert(`Registration successful, welcome ${response.name}`);
                    window.location.href = 'chart.html'
                }
            },
            error: function (err) {
                console.log(err.statusText);
            },
        })
    
})