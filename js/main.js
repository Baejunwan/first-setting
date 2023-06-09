$(function(){  

  // mouse cursor setting
  $(function(){
     
    let mouse = $('.mouse');    

    $(document).mousemove(function (e) {

      TweenMax.to(mouse, 0.00001, {
        left: e.pageX,
        top: e.pageY
      });
    })    
    
   });

  // p-btn click -> c-btn open  
  $(".parent-btn").click(function () {   
    $(".child-btn").toggleClass("showGnb");   
  })

  $('.parent-btn').hover(
    function(){
      $('.parent-btn img').attr('src', '../image/icon/mobile-btn-active.png');     
    },
    function(){
      $('.parent-btn img').attr('src', '../image/icon/mobile-btn.png');      
    }
  )
  

  // c-btn active
  $(function () {  
    $(window).scroll(function(){
                                                        
      let currentMenu = $('.child-btn a').offset().top;
      let about = $('#about').offset().top;
      let portfolio = $('#portfolio').offset().top;
      let contact = $('#contact').offset().top;
      
      if(currentMenu >= about && currentMenu < portfolio){
        $('.c-btn1 img').attr("src", "../image/icon/gnb1-active.png" );
        $('.c-btn1 p').css("color", "#0cf")
      }else{
        $('.c-btn1 img').attr("src", "../image/icon/gnb1.png" );
        $('.c-btn1 p').css("color", "#fff")
      }
      if(currentMenu >= portfolio && currentMenu < contact){
        $('.c-btn2 img').attr("src", "../image/icon/gnb2-active.png" );
        $('.c-btn2 p').css("color", "#0cf")
      }else{
        $('.c-btn2 img').attr("src", "../image/icon/gnb2.png" );
        $('.c-btn2 p').css("color", "#fff")
      }
      if(currentMenu >= contact){
        $('.c-btn3 img').attr("src", "../image/icon/gnb3-active.png" );
        $('.c-btn3 p').css("color", "#0cf")
      }else{
        $('.c-btn3 img').attr("src", "../image/icon/gnb3.png" );
        $('.c-btn3 p').css("color", "#fff")
      }
    });
  })

  // top-btn effect
  $('.top-btn a').hover(
    function(){
      $('.top-btn a img').attr('src', '../image/icon/top-btn-active.png');
      $('.top-btn a p').css('color', '#0cf');
    },
    function(){
      $('.top-btn a img').attr('src', '../image/icon/top-btn.png');
      $('.top-btn a p').css('color', '#fff');
    }
  )

  // down-btn effect
  $('.down-btn').hover(
    function(){
      $('.down-btn img').attr('src', '../image/icon/down-btn-active.png');
      $('.down-btn p').css('color', '#0cf');
    },
    function(){
      $('.down-btn img').attr('src', '../image/icon/down-btn.png');
      $('.down-btn p').css('color', '#fff');
    }
  )



  // About active content
  $(function () {  
    let sparkleItem = $('.constellation .sparkle1 p, .gas-text1');
    sparkleItem.addClass('contentActive1');

    let sparkleName1 = $('.strength .constellation .sparkle p');
    let sparkleName2 = $('.whatido .constellation .sparkle p');
    let target1 = $('.strength .gas-text');
    let target2 = $('.whatido .gas-text');
    
    for(i=1;i<=4;i++){
      $('.strength .constellation .c-wrap div:nth-child('+ i +')').on('click', {number:i},function(e){
        let num = e.data.number;
        
        sparkleName1.removeClass('contentActive1');
        target1.removeClass('contentActive1');
        $(this).find('p').addClass('contentActive1');
        $('.strength .gas-text' + num).addClass('contentActive1');
      });
    }

    for(i=1;i<=4;i++){
      $('.whatido .constellation .c-wrap div:nth-child('+ i +')').on('click', {number:i},function(e){
        let num = e.data.number;

        sparkleName2.removeClass('contentActive1');
        target2.removeClass('contentActive1');
        $(this).find('p').addClass('contentActive1');
        $('.whatido .gas-text' + num).addClass('contentActive1');
      });
    }
  })

// Portfolio 3D Carousel  
  $(function () {  
    let carousel_wrap1 = $(".carousel-wrap1")
    let carousel_wrap2 = $(".carousel-wrap2")
    let carousel_wrap3 = $(".carousel-wrap3")

  
    carousel_wrap1.Cloud9Carousel({ 
      xOrigin: 400,
      yOrigin: 180,
      xRadius: 400, 
      yRadius: 300,
      farScale: 0.4,
      speed: 2,
      bringToFront: true,
    })
    carousel_wrap2.Cloud9Carousel({
      xOrigin: 400,
      yOrigin: 200,
      xRadius: 350,
      yRadius: 250,
      farScale: 0.5,
      speed: 1.5,
      bringToFront: true
    })
    
    carousel_wrap3.Cloud9Carousel({
      xOrigin: 400,
      yOrigin: 190,
      xRadius: 450,
      yRadius: 280,
      farScale: 0.4,
      speed: 1,
      bringToFront: true
    })
  })


  // Portfolio Contents Active
  $(function(){   

    let previousImageIndex1, previousImageIndex2, previousImageIndex3 = 0;

    $('.carousel-wrap1 .cloud9-item').click(function() {
      let currentImageIndex = $(this).data('index');

      
      if (currentImageIndex === previousImageIndex1) {
        return;
      }
      
      if (previousImageIndex1 > 0) {
        let previousImage = $('.carousel-wrap1 .cloud9-item[data-index="' + previousImageIndex1 + '"]');
        previousImage.attr('src', previousImage.attr('src').replace('-active.png', '.png'));
        $('.web .thumbnail' + previousImageIndex1).css('display','none');
      };
      
      $(this).attr('src', $(this).attr('src').replace('.png', '-active.png'));
      $('.web .thumbnail' + currentImageIndex).css('display','block');
      
      previousImageIndex1 = currentImageIndex; 

    });

    $('.carousel-wrap2 .cloud9-item').click(function() {
      
      let currentImageIndex = $(this).data('index');
      
      if (currentImageIndex === previousImageIndex2) {
        return;
      }
      
      if (previousImageIndex2 > 0) {
        let previousImage = $('.carousel-wrap2 .cloud9-item[data-index="' + previousImageIndex2 + '"]');
        previousImage.attr('src', previousImage.attr('src').replace('-active.png', '.png'));
        $('.rwd .thumbnail' + previousImageIndex2).css('display','none');
      };
      
      $(this).attr('src', $(this).attr('src').replace('.png', '-active.png'));
      $('.rwd .thumbnail' + currentImageIndex).css('display','block');
      
      previousImageIndex2 = currentImageIndex;
    });

    $('.carousel-wrap3 .cloud9-item').click(function() {
      
      let currentImageIndex = $(this).data('index');
      
      if (currentImageIndex === previousImageIndex3) {
        return;
      }
      
      if (previousImageIndex3 > 0) {
        let previousImage = $('.carousel-wrap3 .cloud9-item[data-index="' + previousImageIndex3 + '"]');
        previousImage.attr('src', previousImage.attr('src').replace('-active.png', '.png'));
        $('.app .thumbnail' + previousImageIndex3).css('display','none');
      };
      
      $(this).attr('src', $(this).attr('src').replace('.png', '-active.png'));
      $('.app .thumbnail' + currentImageIndex).css('display','block');
      
      previousImageIndex3 = currentImageIndex;     

    });    

    $('.cloud9-item:first-child').trigger('click');

  });

  // caption hover
  $(function () {  

    let caption = $('.thumbnail .caption');

    caption.hover(
      function(){
        $(this).find('div img').attr('src', '../image/icon/port-link-active.png');
        $(this).parent().find('h3').css('color','#0cf');
      },
      function(){
        $(this).find('div img').attr('src', '../image/icon/port-link.png');
        $(this).parent().find('h3').css('color','#fff');
      } 
    );
  })
  
  
});



