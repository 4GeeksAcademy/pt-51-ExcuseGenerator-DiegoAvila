/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi pajaro"];
  let action = ["se comio", "meo", "aplasto", "rompio"];
  let what = ["mis deberes", "las llaves", "el coche"];
  let when = [
    "despues de clase",
    "hace un rato",
    "cuando termine",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  let quien = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);

  let frase =
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando];
  document.getElementById("excuse").innerHTML = frase;
  if (quien == 0) {
    document.getElementById("imagen").src =
      "https://img.freepik.com/foto-gratis/divertido-labrador-retriever-negro-dibujos-animados-3d_183364-118258.jpg?w=360&t=st=1699470593~exp=1699471193~hmac=cdd31384b7fc0e23e345bd413e89ae42d15db293a921b3f4c90dfe83346ae789";
  } else if (quien == 1) {
    document.getElementById("imagen").src =
      "https://i.pinimg.com/736x/f8/90/76/f89076a2f959ae671965552ce9052043.jpg";
  } else if (quien == 2) {
    document.getElementById("imagen").src =
      "https://media.istockphoto.com/id/499294552/es/vector/tortuga-corriendo-de-historieta-divertido.jpg?s=1024x1024&w=is&k=20&c=_nuBArUbKCZD0Umgook7IqRKkVTE1JW3TzDQrV-hu3I=";
  } else if (quien == 3) {
    document.getElementById("imagen").src =
      "https://static.vecteezy.com/system/resources/previews/012/278/023/non_2x/funny-cartoon-bird-free-vector.jpg";
  }
};
