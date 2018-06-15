let btnPull = document.getElementById("pull");
let mariachis = document.getElementById("mariachis");


//referencia a la base de datos
const ref = firebase.database().ref("mariachis");

// Pull de mariachis
btnPull.addEventListener("click", function() {
  console.log("request de Mariachis");

});


ref.on('value', (data)=>{
  console.log("Marichi",data.val())

  let dat = data.val()

  mariachis.innerHTML = dat.mariachis;
})