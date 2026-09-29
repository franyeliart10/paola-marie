document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTOS
  ========================= */

  const portada = document.getElementById("portada");
  const abrirInvitacion = document.getElementById("abrirInvitacion");
  const invitacion = document.getElementById("invitacion");
  const transicion = document.getElementById("transicion");

  const musica = document.getElementById("musica");
  const botonMusica = document.getElementById("botonMusica");
  const textoMusica = document.getElementById("textoMusica");

  const calendarioBtn = document.getElementById("calendarioBtn");

  const dias = document.getElementById("dias");
  const horas = document.getElementById("horas");
  const minutos = document.getElementById("minutos");
  const segundos = document.getElementById("segundos");
  const mensajeContador = document.getElementById("mensajeContador");

  const opcionesColor = document.querySelectorAll(".color-opcion");
  const mensajeColor = document.getElementById("mensajeColor");

  const confirmarBtn = document.getElementById("confirmarBtn");
  const noAsistirBtn = document.getElementById("noAsistirBtn");

  const fresas = document.querySelectorAll(".grafico-fresa");


  /* =========================
     ABRIR INVITACIÓN
  ========================= */

  abrirInvitacion.addEventListener("click", () => {

    abrirInvitacion.textContent = "ABRIENDO...";
    abrirInvitacion.classList.add("abriendo");

    transicion.classList.add("activa");

    setTimeout(() => {
      invitacion.classList.add("visible");
      portada.classList.add("salir");

      document.body.style.overflowY = "auto";
    }, 250);

    setTimeout(() => {
      transicion.classList.remove("activa");
    }, 800);

    setTimeout(() => {
      portada.style.display = "none";
    }, 1000);

  });


  /* =========================
     MÚSICA
  ========================= */

  function actualizarMusica() {

    if (!musica.paused) {

      botonMusica.classList.add("sonando");

      textoMusica.textContent = "MÚSICA ACTIVADA";

      botonMusica.setAttribute(
        "aria-label",
        "Pausar música"
      );

    } else {

      botonMusica.classList.remove("sonando");

      textoMusica.textContent = "TOCA PARA ESCUCHAR";

      botonMusica.setAttribute(
        "aria-label",
        "Activar música"
      );
    }
  }


  async function alternarMusica() {

    try {

      if (musica.paused) {
        await musica.play();
      } else {
        musica.pause();
      }

      actualizarMusica();

    } catch (error) {

      console.log(
        "No fue posible reproducir la música:",
        error
      );

    }
  }


  botonMusica.addEventListener(
    "click",
    alternarMusica
  );

  textoMusica.addEventListener(
    "click",
    alternarMusica
  );

  musica.addEventListener(
    "play",
    actualizarMusica
  );

  musica.addEventListener(
    "pause",
    actualizarMusica
  );


  /* =========================
     CUENTA REGRESIVA
  ========================= */

  const fechaObjetivo = new Date(
    "2026-11-01T15:00:00"
  ).getTime();


  function animarNumero(elemento) {

    elemento.classList.remove("cambio");

    void elemento.offsetWidth;

    elemento.classList.add("cambio");
  }


  function actualizarCuentaRegresiva() {

    const ahora = Date.now();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {

      dias.textContent = "0";
      horas.textContent = "0";
      minutos.textContent = "0";
      segundos.textContent = "0";

      mensajeContador.textContent =
        "Cada segundo nos acerca a Paola Marie.";

      return;
    }


    const diasValor = Math.floor(
      diferencia / (1000 * 60 * 60 * 24)
    );

    const horasValor = Math.floor(
      (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutosValor = Math.floor(
      (diferencia / (1000 * 60)) % 60
    );

    const segundosValor = Math.floor(
      (diferencia / 1000) % 60
    );


    if (dias.textContent !== String(diasValor)) {
      animarNumero(dias);
    }

    if (horas.textContent !== String(horasValor)) {
      animarNumero(horas);
    }

    if (minutos.textContent !== String(minutosValor)) {
      animarNumero(minutos);
    }

    if (segundos.textContent !== String(segundosValor)) {
      animarNumero(segundos);
    }


    dias.textContent = diasValor;
    horas.textContent = horasValor;
    minutos.textContent = minutosValor;
    segundos.textContent = segundosValor;


    mensajeContador.textContent =
      "Cada segundo nos acerca a Paola Marie.";
  }


  actualizarCuentaRegresiva();

  setInterval(
    actualizarCuentaRegresiva,
    1000
  );


  /* =========================
     INTERACCIÓN CONTADOR
  ========================= */

  document
    .querySelectorAll(".contador-item")
    .forEach((item) => {

      item.addEventListener("click", () => {

        item.classList.remove("pulsado");

        void item.offsetWidth;

        item.classList.add("pulsado");

        mensajeContador.textContent =
          "Cada segundo nos acerca a Paola Marie.";

      });

    });


  /* =========================
     CALENDARIO
  ========================= */

  calendarioBtn.addEventListener(
    "click",
    () => {

      const inicio = "20261101T130000";
      const fin = "20261101T200000";

      const url =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=" +
        encodeURIComponent(
          "Baby Shower Paola Marie"
        ) +
        "&dates=" +
        inicio +
        "/" +
        fin;

      window.open(
        url,
        "_blank",
        "noopener,noreferrer"
      );

    }
  );


  /* =========================
     DRESS CODE
  ========================= */

  opcionesColor.forEach((opcion) => {

    opcion.addEventListener(
      "click",
      () => {

        opcionesColor.forEach((otraOpcion) => {
          otraOpcion.classList.remove("selected");
        });

        opcion.classList.add("selected");

        const color =
          opcion.dataset.color;

        mensajeColor.textContent =
          `ELEGISTE ${color.toUpperCase()} · ¡TE ESPERAMOS!`;

      }
    );

  });


  /* =========================
     RSVP WHATSAPP
  ========================= */

  const numeroWhatsApp =
    "18094236644";


  const mensajeSi =
    "Hola Christy, Confirmo mi asistencia al Baby Shower de Paola Marie. ¡Estoy muy feliz de acompañarte!";


  const mensajeNo =
    "Hola Christy, Muchas gracias por la invitación. Lamentablemente no podré asistir al Baby Shower de Paola Marie, pero te deseo lo mejor en este momento tan especial. ¡Felicidades!";


  confirmarBtn.href =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeSi)}`;


  noAsistirBtn.href =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeNo)}`;


  confirmarBtn.target = "_blank";
  noAsistirBtn.target = "_blank";

  confirmarBtn.rel =
    "noopener noreferrer";

  noAsistirBtn.rel =
    "noopener noreferrer";


  /* =========================
     FRESAS
  ========================= */

  fresas.forEach((fresa) => {

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

  });


  /* =========================
     ANIMACIÓN AL HACER SCROLL
  ========================= */

  const secciones =
    document.querySelectorAll(".seccion");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entradas) => {

          entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

              entrada.target.classList.add(
                "activa"
              );

            }

          });

        },
        {
          threshold: 0.20
        }
      );


    secciones.forEach((seccion) => {
      observer.observe(seccion);
    });

  } else {

    secciones.forEach((seccion) => {
      seccion.classList.add("activa");
    });

  }

});