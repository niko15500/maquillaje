document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Para una transición suave
  });
});

$(document).ready(function () {
  var carousell = $(".carousell"),
    currdeg = 0;

  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  function rotate(e) {
    if (e.data.d == "n") {
      currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
      currdeg = currdeg + 60;
    }
    carousell.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
    });
  }

  // Hace girar las imágenes automáticamente cada 2 segundos
  setInterval(function () {
    currdeg = currdeg - 60;
    carousell.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
    });
  }, 3000);
});
