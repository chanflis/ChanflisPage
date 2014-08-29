$(function(){  
  $('header').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{  
    if($('header').data('size') == 'big')
    {    
        //animar el encogimiento del header
        $('header').data('size','small');
        $('header').stop().animate({
            height:'40px'
        },600);

        //Que el video encuadre correctamente segun el header
        $('.area #video').stop().animate({
            'padding-top':'40px'
        },600);



        //Animar el movimiento del nombre
        $('#nombre').stop().animate({
            'left':'1%',
            'padding-top':'2px'
        },600);


        //Animar el tamaño del nombre
        $('#nombre img').stop().animate({
            'width':'30%'
        },600);

    }
}
else
  {
    if($('header').data('size') == 'small')
      {
        $('header').data('size','big');
        $('header').stop().animate({
            height:'200px'
        },600);
        
        $('.area #video').stop().animate({
            'padding-top':'200px'
        },300);

        $('#nombre').stop().animate({
            'left':'27%',
            'padding-top':'130px'
        },600);

        $('#nombre img').stop().animate({
            'width':'899px'
        },600);
      }  
  }
});