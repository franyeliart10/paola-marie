document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTOS
  ====================================================== */

  const portada =
    document.getElementById("portada");

  const abrirInvitacion =
    document.getElementById("abrirInvitacion");

  const invitacion =
    document.getElementById("invitacion");

  const transicion =
    document.getElementById("transicion");


  /* =====================================================
     MÚSICA
  ====================================================== */

  const musica =
    document.getElementById("musica");

  const botonMusica =
    document.getElementById("botonMusica");

  const textoMusica =
    document.getElementById("textoMusica");


  /* =====================================================
     CALENDARIO
  ====================================================== */

  const calendarioBtn =
    document.getElementById("calendarioBtn");


  /* =====================================================
     CUENTA REGRESIVA
  ====================================================== */

  const dias =
    document.getElementById("dias");

  const horas =
    document.getElementById("horas");

  const minutos =
    document.getElementById("minutos");

  const segundos =
    document.getElementById("segundos");

  const mensajeContador =
    document.getElementById("mensajeContador");


  /* =====================================================
     DRESS CODE
  ====================================================== */

  const opcionesColor =
    document.querySelectorAll(".color-opcion");

  const mensajeColor =
    document.getElementById("mensajeColor");


  /* =====================================================
     RSVP
  ====================================================== */

  const confirmarBtn =
    document.getElementById("confirmarBtn");

  const noAsistirBtn =
    document.getElementById("noAsistirBtn");


  /* =====================================================
     ELEMENTOS DECORATIVOS
  ====================================================== */

  const fresas =
    document.querySelectorAll(".grafico-fresa");


  /* =====================================================
     ABRIR INVITACIÓN
  ====================================================== */

  if (abrirInvitacion) {

    abrirInvitacion.addEventListener("click", () => {

      abrirInvitacion.textContent =
        "ABRIENDO...";

      abrirInvitacion.classList.add(
        "abriendo"
      );


      if (transicion) {
        transicion.classList.add(
          "activa"
        );
      }


      setTimeout(() => {

        if (invitacion) {
          invitacion.classList.add(
            "visible"
          );
        }

        if (portada) {
          portada.classList.add(
            "salir"
          );
        }

        document.body.style.overflowY =
          "auto";

      }, 250);


      setTimeout(() => {

        if (transicion) {
          transicion.classList.remove(
            "activa"
          );
        }

      }, 800);


      setTimeout(() => {

        if (portada) {
          portada.style.display =
            "none";
        }

      }, 1000);

    });

  }


  /* =====================================================
     MÚSICA
  ====================================================== */

  function actualizarMusica() {

    if (!musica) return;


    if (!musica.paused) {

      if (botonMusica) {
        botonMusica.classList.add(
          "sonando"
        );

        botonMusica.setAttribute(
          "aria-label",
          "Pausar música"
        );
      }


      if (textoMusica) {
        textoMusica.textContent =
          "MÚSICA ACTIVADA";
      }

    } else {

      if (botonMusica) {
        botonMusica.classList.remove(
          "sonando"
        );

        botonMusica.setAttribute(
          "aria-label",
          "Activar música"
        );
      }


      if (textoMusica) {
        textoMusica.textContent =
          "TOCA PARA ESCUCHAR";
      }

    }

  }


  async function alternarMusica() {

    if (!musica) return;


    try {

      if (musica.paused) {

        await musica.play();

      } else {

        musica.pause();

      }

      actualizarMusica();

    } catch (error) {

      console.error(
        "No fue posible reproducir la música:",
        error
      );

    }

  }


  if (botonMusica) {

    botonMusica.addEventListener(
      "click",
      alternarMusica
    );

  }


  if (textoMusica) {

    textoMusica.addEventListener(
      "click",
      alternarMusica
    );

  }


  if (musica) {

    musica.addEventListener(
      "play",
      actualizarMusica
    );


    musica.addEventListener(
      "pause",
      actualizarMusica
    );

  }


  /* =====================================================
     CUENTA REGRESIVA
  ====================================================== */

  const fechaObjetivo =
    new Date(
      "2026-11-01T15:00:00"
    ).getTime();


  function animarNumero(elemento) {

    if (!elemento) return;


    elemento.classList.remove(
      "cambio"
    );


    void elemento.offsetWidth;


    elemento.classList.add(
      "cambio"
    );

  }


  function actualizarCuentaRegresiva() {

    if (
      !dias ||
      !horas ||
      !minutos ||
      !segundos
    ) {
      return;
    }


    const ahora =
      Date.now();


    const diferencia =
      fechaObjetivo - ahora;


    if (diferencia <= 0) {

      dias.textContent = "0";
      horas.textContent = "0";
      minutos.textContent = "0";
      segundos.textContent = "0";


      if (mensajeContador) {

        mensajeContador.textContent =
          "¡Hoy es el gran día de Paola Marie!";

      }

      return;

    }


    const diasValor =
      Math.floor(
        diferencia /
        (1000 * 60 * 60 * 24)
      );


    const horasValor =
      Math.floor(
        (diferencia /
          (1000 * 60 * 60)) %
        24
      );


    const minutosValor =
      Math.floor(
        (diferencia /
          (1000 * 60)) %
        60
      );


    const segundosValor =
      Math.floor(
        (diferencia / 1000) %
        60
      );


    if (
      dias.textContent !==
      String(diasValor)
    ) {

      animarNumero(dias);

    }


    if (
      horas.textContent !==
      String(horasValor)
    ) {

      animarNumero(horas);

    }


    if (
      minutos.textContent !==
      String(minutosValor)
    ) {

      animarNumero(minutos);

    }


    if (
      segundos.textContent !==
      String(segundosValor)
    ) {

      animarNumero(segundos);

    }


    dias.textContent =
      diasValor;

    horas.textContent =
      horasValor;

    minutos.textContent =
      minutosValor;

    segundos.textContent =
      segundosValor;


    if (mensajeContador) {

      mensajeContador.textContent =
        "Cada segundo nos acerca a Paola Marie.";

    }

  }


  actualizarCuentaRegresiva();


  setInterval(
    actualizarCuentaRegresiva,
    1000
  );


  /* =====================================================
     INTERACCIÓN CONTADOR
  ====================================================== */

  document
    .querySelectorAll(".contador-item")
    .forEach((item) => {

      item.addEventListener(
        "click",
        () => {

          item.classList.remove(
            "pulsado"
          );


          void item.offsetWidth;


          item.classList.add(
            "pulsado"
          );


          if (mensajeContador) {

            mensajeContador.textContent =
              "Cada segundo nos acerca a Paola Marie.";

          }

        }
      );

    });


  /* =====================================================
     CALENDARIO
  ====================================================== */

  if (calendarioBtn) {

    calendarioBtn.addEventListener(
      "click",
      () => {

        /*
          1 de noviembre de 2026
          1:00 PM a 8:00 PM
        */

        const inicio =
          "20261101T130000";

        const fin =
          "20261101T200000";


        const titulo =
          encodeURIComponent(
            "Baby Shower Paola Marie"
          );


        const detalles =
          encodeURIComponent(
            "Baby Shower de Paola Marie"
          );


        const url =
          "https://calendar.google.com/calendar/render" +
          "?action=TEMPLATE" +
          "&text=" +
          titulo +
          "&dates=" +
          inicio +
          "/" +
          fin +
          "&details=" +
          detalles;


        window.open(
          url,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* =====================================================
     DRESS CODE
  ====================================================== */

  opcionesColor.forEach(
    (opcion) => {

      opcion.addEventListener(
        "click",
        () => {

          opcionesColor.forEach(
            (otraOpcion) => {

              otraOpcion.classList.remove(
                "selected"
              );

            }
          );


          opcion.classList.add(
            "selected"
          );


          const color =
            opcion.dataset.color;


          if (mensajeColor) {

            mensajeColor.textContent =
              `ELEGISTE ${color.toUpperCase()} · ¡TE ESPERAMOS!`;

          }

        }
      );

    }
  );


  /* =====================================================
     RSVP - WHATSAPP
  ====================================================== */

  const numeroWhatsApp =
    "18094236644";


  const mensajeSi =
    "Hola Christy, Confirmo mi asistencia al Baby Shower de Paola Marie. ¡Estoy muy feliz de acompañarte!";


  const mensajeNo =
    "Hola Christy, Muchas gracias por la invitación. Lamentablemente no podré asistir al Baby Shower de Paola Marie, pero te deseo lo mejor en este momento tan especial. ¡Felicidades!";


  if (confirmarBtn) {

    confirmarBtn.href =
      "https://wa.me/" +
      numeroWhatsApp +
      "?text=" +
      encodeURIComponent(
        mensajeSi
      );


    confirmarBtn.target =
      "_blank";


    confirmarBtn.rel =
      "noopener noreferrer";

  }


  if (noAsistirBtn) {

    noAsistirBtn.href =
      "https://wa.me/" +
      numeroWhatsApp +
      "?text=" +
      encodeURIComponent(
        mensajeNo
      );


    noAsistirBtn.target =
      "_blank";


    noAsistirBtn.rel =
      "noopener noreferrer";

  }


  /* =====================================================
     FRESAS
  ====================================================== */

  fresas.forEach(
    (fresa) => {

      fresa.addEventListener(
        "click",
        () => {

          fresa.style.animation =
            "none";


          void fresa.offsetWidth;


          fresa.style.animation =
            "fresa .55s ease";

        }
      );

    }
  );


  /* =====================================================
     ANIMACIÓN AL HACER SCROLL
  ====================================================== */

  const secciones =
    document.querySelectorAll(
      ".seccion"
    );


  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
      new IntersectionObserver(
        (entradas) => {

          entradas.forEach(
            (entrada) => {

              if (
                entrada.isIntersecting
              ) {

                entrada.target.classList.add(
                  "activa"
                );

              }

            }
          );

        },
        {
          threshold: 0.20
        }
      );


    secciones.forEach(
      (seccion) => {

        observer.observe(
          seccion
        );

      }
    );

  } else {

    secciones.forEach(
      (seccion) => {

        seccion.classList.add(
          "activa"
        );

      }
    );

  }

});