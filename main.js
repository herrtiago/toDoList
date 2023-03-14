const tareas = document.querySelector(".lista");
const btn_agregar = document.querySelector("#agregar");
const input = document.querySelector(".tarea__input");
const seguimiento = document.querySelector(".seguimiento");
let tareasPendientes = 0,
  tareasCompletadas = 0;

btn_agregar.addEventListener("click", () => {
  const tarea = document.createElement("div");
  const descripcionTarea = document.createElement("p");
  const icon = document.createElement("i");

  tarea.className = "tarea";
  icon.setAttribute("class", "bi bi-trash3-fill");
  tareasPendientes++;
  seguimiento.textContent = `${tareasPendientes} tareas pendientes. ${tareasCompletadas} tareas completadas.`;
  descripcionTarea.textContent = input.value;

  tarea.appendChild(descripcionTarea);
  tarea.appendChild(icon);
  tareas.appendChild(tarea);
  input.value = "";
});

tareas.addEventListener("click", (event) => {
  if (event.target.className == "bi bi-trash3-fill") {
    const tareaEliminar = event.target.parentElement;
    tareas.removeChild(tareaEliminar);
    tareasCompletadas++;
    tareasPendientes--;
    seguimiento.textContent = `${tareasPendientes} tareas pendientes. 
    ${tareasCompletadas} tareas completadas.`;
  }
});
