//Código fuente Jquery mediante JavaScript

$("document").ready(function () {
  /*modificar el estilo de la barra de navegacioón*/
  $(window).on("scroll", function () {
    let position = $("#ini").offset();
    if ($(window).scrollTop() >= position.top) {
      $("header").removeClass("transparente");
    } else {
      $("header").addClass("transparente");
    }
  });

  /* Desplegar menú lateral */
  $("#burger").click(function () {
    $("#burger").toggleClass("abierto");
    $(".menu").toggleClass("abierto");
  });

  //smooth scroll
  $("a").on("click", function () {
    if (this.hash !== "") {
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
});
