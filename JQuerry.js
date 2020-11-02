$(document).ready(function(){

    $.validator.addMethod('strongPassword',function(value, element){
    return this.optional(element)
    || value.length >=6
    && /\d/.test(value)
    && /[a-z]/i.test(value);
    }, 'Введіть літери на латині та хоч одну цифру,не менше 6')
    $('#form').validate({
        rules: {
            name: {
                required: true,
                strongPassword: true 
            },
             
            password: {
                required:true,
                strongPassword: true
                
                
            },
            pelefon:
            {
                required:true,
                 digits: true,
                
            },
            email: 
            {  required: true,
                minlength:12,
                email:true
            },
        },
        messages: {
            name: {
                required:'Введіть логін!',
            },
            email: {
                required:'Введіть адресу електронної почти',
                email:'Латинські літери та символ(@) ',
                minlength:'Не менше 12 символів'
            },
            pelefon:
            {
                required:'Введіть номер телефону!',
                digits:'Вводьте лише цифри!'
            },
            password: {
                required:'Введіть пароль!'
            }
            
        },
        
    });
 

});