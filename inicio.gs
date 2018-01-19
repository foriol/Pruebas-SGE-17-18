//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addItem('Función2', 'menuItem2')
      .addItem('Funcion3', 'menuItem3')
      .addToUi();
  
}

function menuItem1() {
  //Definimos una variable donde vamos a registrar un input:
  var input = Browser.inputBox("Por favor, introduce tu nombre:");
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Bienvenido a tu primer Script con GAS '+input);
  //Añado este nuevo comentario sobre el código desde Github!!!
  //Para usar el log de GAS solo tenemos que hacer CTRL+Enter y añadir esta linea
  Logger.log("Es una prueba de Log");
  Logger.log("Esto es una prueba del nombre "+input);
}

//Esta función mostrará el nombre de la hoja de cálculo.
function menuItem2() {
  //Obtenemos en una variuable el nombre de la HCG.
  var name = SpreadsheetApp.getActive().getName();
  Logger.log("El nombre de la HCG es "+name);  
  //Mostramos la variable en el log.
}

//Esta función mostrará el nombre de la hoja de cálculo y además el nombre de otra HCG.
function menuItem3() {
  var name = SpreadsheetApp.getActive().getName();
  var name2 = SpreadsheetApp.openById("1Asb6vLVk3jG5BO1tguCNC_Z8LwsshByJmAV8Psh9Euw").getName();
  Logger.log("Tienes la HCG "+name+" y la HCG "+name2);
}