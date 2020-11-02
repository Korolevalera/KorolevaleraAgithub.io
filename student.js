var student = Object.create({},
{
 name: {
     value: 'Олекса'
 },
 surname: {
     value:'Філічінко'},
  age: { 
     value: 18
  
  },
 course:{value: 2,
       }
});
student.GETage = function(value){
    document.write(student.age);
},

student.ChangeSurname = function(value)
{
   document.write(student.surname);
},
student.MoveToC = function(value)
{
   document.write(student.course);
     
};
function math(){
   
    
    document.write("Найбільше число з 26,18,27,29"+'<br/>'+"ЦЕ-"+Math.max(26,18,27,29)+'<br/>');
    document.write("До початку експеременту вік становив:"+'<br/>'+student.age+'<br/>'+"Після встановили:"+'<br/>'+20+'<br/>');
    document.write("Прізвище до одруження:"+'<br/>'+student.surname+'<br/>'+"Прізвище після одруження:"+'<br/>'+"Чугункова"+'<br/>');
     document.write("Курс:"+'<br/>'+student.course+'<br/>'+"Курс після:"+3+'<br/>');
    
    

    
};
