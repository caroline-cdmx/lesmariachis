<template>
  <div class="header">
    <div class="navigation navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            <img class="logo" src="https://i.pinimg.com/originals/90/a6/ce/90a6ce170e34f4e30b7b77e320fdfd48.png" alt="sombrero mexicano">
          </a>
          <div class="menu-right">
            <ul class="right hide-on-med-and-down">
            <!-- <li><a href="#">Quienes somos</a></li> -->
              <li>
                <a href="#">Iniciar sesión</a>
              </li>
              <li><a href="#">Regístrate</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div> 
  </div>   
</template>

<style lang="scss" scoped>
nav {
  background-color: white;
  color: #4a4a4a;
  .brand-logo {
    max-height: 4rem;
    .logo {
    max-height: 4rem;
    margin-left: 1rem;
    padding-top: 0.5rem;
  }
  }
  
  li a {
    color: #4a4a4a;
  }
  li a:hover {
    color: #4d9900;
    background-color: white;
    border-bottom: 0.2rem solid #4d9900;
  }
  .menu {
    position: absolute;
    left: 5%;
    .research-menu {
      margin-left: 2rem;
      float: left;
      .search-icon {
        width: 1rem;
      }
      .search:focus {
        border-bottom: 0.1rem solid #4d9900;
      }
    }
  }
}
</style>
