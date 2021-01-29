let edad_usr = prompt('Ingrese su edad');

if (edad_usr > 18) {
    alert(`Es mayor de edad, el usuario tiene ${edad_usr} años`);
} else if (edad_usr == 18) {
    alert(`Tiene ${edad_usr} años`);
} else { 
   alert(`La edad ingresada no cumple con los parámetros `); 
}