$(function(){

  $(document).ready(function(){

    $.ajax({
        url: 'http://localhost:8888',
        type: 'GET',
        dataType: "json",
        success: function (data) {
            console.log('Success');
            var imgString = ''
            $.each(data.data ,function(i, val){

                imgString += '<div><img src="'+ val.images.low_resolution.url +'"/></div>';
            });
            $('.instagram-photo').html(imgString);
            $('.instagram-photo').slick({
                arrows: true,
                nextArrow: '<i class="fa fa-chevron-right fa-3x"></i>',
                prevArrow: '<i class="fa fa-chevron-left fa-3x"></i>',
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
                ]
              });
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });

  });
});
