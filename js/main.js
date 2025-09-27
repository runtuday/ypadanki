$(document).ready(function(){
   $("#infoButton").click(() => {
   		window.location.href = "html/about.html"
   });
   $("#goToNews").click(() => {
   		window.location.href = "html/news.html"
   });
   $("#goToSbornik").click(() => {
   		window.location.href = "html/sbornik.html"
   });
   $("#goToGalery").click(() => {
   		window.location.href = "html/galery.html"
   });

   $(".menu").click(() => {
      $(".mobile-menu").css({
         display: 'block'
      });
   });
   $(".quitMenu").click(() => {
      $(".mobile-menu").css({
         display: 'none'
      });
   });
});