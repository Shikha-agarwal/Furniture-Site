var images1 = ['11.jpg', '5.jpg','4.jpeg'],
    index1 = 0, // starting index
    maxImages1 = images1.length - 1;
var timer1 = setInterval(function() {
    var currentImage1 = images1[index1];
    index1 = (index1 == maxImages1) ? 0 : ++index1;
    $('.mainImage').fadeOut(300, function() {
        $('.mainImage').attr("src", './images/'+currentImage1);
        $('.mainImage').fadeIn(300);
    });
 }, 5000);


 var images2 = ['1.jpg', '9.jpg','10.jpg'],
    index2 = 0, // starting index
    maxImages2 = images2.length - 1;
var timer2 = setInterval(function() {
    var currentImage2 = images2[index2];
    index2 = (index2 == maxImages2) ? 0 : ++index2;
    // $('.mainImage').fadeOut(2000, function() {
        $('.mainImage2').attr("src", './images/'+currentImage2);
    //     $('.mainImage').fadeIn(2000);
    // });
 }, 5000);