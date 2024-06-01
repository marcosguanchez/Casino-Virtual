const btnSingIn = document.getElementById("sign-in");
const  btnSingUp = document.getElementById("sign-up");
const  formRegister = document.querySelector("#formulario-register")
const  formLogin = document.querySelector("#formulario-login");
const contenedor = document.querySelector("#contenedor")

btnSingIn.addEventListener("click", e=> {
   contenedor.innerHTML = `
    <div class="container-form login" id="formulario-login">
            <div class="information">
                <div class="info-childs">
                    <h2>¡Bienvenido nuevamente!</h2>
                    <p>Para unirte a nuestra comunidad por favor Inicia sesion con tus datos</p>
                    <input type="button" value="Registrarse" id="sign-up">
                </div>
            </div>
            <div class="form-information">
                <div class="form-information-childs">
                    <h2>Iniciar sesion</h2>
                    <div class="icons">
                        <i class='bx bxl-google'></i>
                        <i class='bx bxl-facebook'></i>
                        <i class='bx bxl-twitter'></i>
                    </div>
                    <p>O iniciar sesion con una cuenta</p>
                    <form class="class">
                        <label>
                            <i class='bx bx-envelope' ></i>
                            <input type="email" placeholder="Correo Electronico">
                        </label>
                        <label>
                            <i class='bx bx-lock-alt' ></i>
                            <input type="password" placeholder="Contraseña">
                        </label>
                        <input type="submit" value="Iniciar Sesion">
                    </form>
                </div>
            </div>
        </div>
        `;
}
)

btnSingUp.addEventListener("click", e=> {
   contenedor.innerHTML = `
   <div class="container-form register" id="formulario-register">
   <div class="information">
       <div class="info-childs">
           <h2>Bienvenido</h2>
           <p>Para unirte a nuestra comunidad por favor Inicia sesion con tus datos</p>
           <input type="button" value="Iniciar sesion" id="sign-in">
       </div>
   </div>
   <div class="form-information">
       <div class="form-information-childs">
           <h2>Crear una cuenta</h2>
           <div class="icons">
               <i class='bx bxl-google'></i>
               <i class='bx bxl-facebook'></i>
               <i class='bx bxl-twitter'></i>
           </div>
           <p>O usa tu email para registrarte</p>
           <form class="class">
               <label>
                   <i class='bx bx-user'></i>
                   <input type="text" placeholder="Nombre Completo">
               </label>
               <label>
                   <i class='bx bx-envelope'></i>
                   <input type="email" placeholder="Correo Electronico">
               </label>
               <label>
                   <i class='bx bx-lock-alt' ></i>
                   <input type="password" placeholder="Contraseña">
               </label>
               <input type="submit" value="Registrarse" id="register">
           </form>
       </div>
   </div>
</div>
        `
}
)