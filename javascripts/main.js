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
                dots: true,
                arrows: true,
                centerMode: true,
                centerPadding: '60px',
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
              });
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });

  });
});
