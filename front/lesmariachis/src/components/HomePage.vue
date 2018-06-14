<template>
  <div class="homepage">
    <div class="banner banner--with-overlay">
      <div class="container">
        <div class="row row-banner">
          <div class="banner--content">
            <h3 class="center banner-title">Haz que tu evento sea más divertido <br> ¡Encuentra mariachis!</h3>
          </div>
        </div>
        <div class="row row-search">
          <form>
            <div class="col m3">
              <label for="location">Lugar</label>
              <select id="location" class="browser-default">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="col m3">
              <label for="date">Fecha</label>
              <input id="date" type="text" class="datepicker browser-default" placeholder="Selectiona tu fecha">
            </div>
            <div class="col m3">
              <input type="text" class="browser-default">
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row row-presentation">
        <div class="title col s12">
          <h3 class="title-presentation">¿Quiénes somos?</h3>
          <div class="left-picture col s6">
            <img src="https://firebasestorage.googleapis.com/v0/b/les-mariachis.appspot.com/o/corazon.png?alt=media&token=ad74fd8b-3c6b-4a51-9b94-ad57aee2f6f9" alt="heart mexico">
          </div>
          <div class="text-presentation col s6">
            <p>¿Quieres que tu evento sea lo más divertido posible?</p> 
            <p>Nuestro sitio <span class="website-name">Les Mariachis</span> te permite encontrar mariachis para animar tu evento, puede ser para un cumpleaños, una boda, una fiesta de quinceanera...</p>
            <p>Tu eliges el grupo de mariachis disponibles que quieres en tu zona geográfica, y por cuanto tiempo</p>
          </div>
        </div>
      </div>
      <div class="row row-title-security">
        <h3 class="title-security col s12">Seguridad y confianza</h3>
      </div>
      <div class="row row-security">
          <div class="services col s4">
            <div class="row">
              <div class="icon-security col s12">
                <i class="fal fa-user-check fa-4x"></i>
              </div>
              <div class="col s12">
                <p class="subtitle">Mariachis confiables</p>
                <p>Revisamos el profesionalismo de los mariachis</p>
              </div>
            </div>
          </div>
          <div class="services col s4">
            <div class="row">
              <div class="icon-security col s12">
                <i class="fal fa-credit-card fa-4x"></i>
              </div>
              <div class="col s12">
                <p class="subtitle">Plataforma 100% digital</p>
                <p>Tus pagos son totalmente seguros y sin efectivo</p>
              </div>
            </div>
          </div>
          <div class="services col s4">
            <div class="row">
              <div class="icon-security col s12">
                <i class="fal fa-hands-helping fa-4x"></i>
              </div>
              <div class="col s12">
                <p class="subtitle">Asistencia</p>
                <p>Si tienes alguna duda, escríbenos a contacto@lesmariachis.com.mx</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
</template>

<script>
import "materialize-css/dist/js/materialize.js";
export default {
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems);
    });
    // var swiper = new Swiper(".swiper-container", {
    //   autoplay: {
    //     delay: 5000
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped> //#F00722 button
.homepage {
  color: #4a4a4a;
  .banner {
    // @media #{$small-and-down} {
    //     display: none;
    //   }
    background-image: url("https://irvingpineda.files.wordpress.com/2017/03/mariachis.jpg");
    min-height: 460px;
    position: relative;
    height: 80vh;
    background-repeat: no-repeat;
    background-position: 25% 40%;
    background-size: cover;
    &.banner--with-overlay:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 10%,
        rgba(255, 255, 255, 0.9) 36%,
        rgba(255, 255, 255, 0) 100%
      );
      opacity: 0.6;
    }
    .row-banner {
      padding-top: 6rem;
      .banner--content {
        position: relative;
      }
      .banner-title {
        margin-top: 0;
        font-size: 4rem;
        font-weight: 700;
      }
    }
    .row-search {
      background-color: white;
      position: relative;
      padding: 3rem 2rem;
      border-radius: 5px;
      label {
        font-size: 1rem;
        color: #555;
      }
      input, select {
        width: 100%;
        height: 40px;
        padding: 8px;
        border-radius: 5px;
        font-size: 1rem;
        border: 1px solid #ddd;
      }
    }
  }
  .row-presentation {
    font-size: 1.2rem;
    .title-presentation {
      font-size: 3rem;
      font-weight: 600;
    }
    img {
      max-height: 350px;
    }
    .text-presentation {
      padding-top: 3rem;
    }

    .website-name {
      font-style: italic;
      font-weight: 700;
    }
  }

  .title-security {
    font-weight: 600;
  }
  .row-security {
    font-size: 1.2rem;
    .icon-security {
      padding-left: 1.5rem;
      text-align: center;
    }
    i {
      color: #4d9900;
    }
    .subtitle {
      margin-bottom: 0;
      font-weight: 800;
    }
    p {
      text-align: center;
    }
  }
}
</style>


