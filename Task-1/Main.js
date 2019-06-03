jQuery(document).ready(function($){
     
    // Создаем тег form
    jQuery('<div/>',{class:'form'}).appendTo('.container');
    
    // Заполняем его двумя лейболами и инпутами
    jQuery('<label>',{for:'input1', text:'Первое число:'}).appendTo('.form');
    jQuery('<input/>',{id:'input1', type:'number', placeholder:'0.1'}).appendTo('.form');
    
    
      jQuery('<label>',{for:'input2', text:'Второе число:'}).appendTo('.form');
    jQuery('<input/>',{id:'input2', type:'number', placeholder:'0.2'}).appendTo('.form');
    
    
    // и еще добавляем кнопку button
    jQuery('<button/>',{id:'btn', text:'Сложить'}).appendTo('.form');

    
    // при нажатие на кнопку
         $("#btn").click(function(){

            //берем значения инпутов
            var num1=parseFloat($("#inpt1").val());
    
            var num2=parseFloat($("#inpt2").val());
            
            // делаем сложение
            var res=num1+num2;

            // выводим результат
            alert("Результат: "+res.toFixed(1));
        });
   
    });





