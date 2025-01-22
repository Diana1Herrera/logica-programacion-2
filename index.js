
    
// Función para convertir temperaturas
function convertirTemperatura() {
    const temperatura = parseFloat(document.getElementById("entradaTemperatura").value);// se convierte a float
    const escala = document.getElementById("escalaSeleccionada").value;//menu desplegable
    const resultadoTexto = document.getElementById("resultadoTexto");
  
    if (isNaN(temperatura)) { //valida que sea numero
      resultadoTexto.textContent = "Por favor, ingresa un número válido.";
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    switch (escala) {
      case "celsius":
        celsius = temperatura;
        fahrenheit = (temperatura * 9/5) + 32;
        kelvin = temperatura + 273.15;
        break;
      case "fahrenheit":
        celsius = (temperatura - 32) * 5/9;
        fahrenheit = temperatura;
        kelvin = celsius + 273.15;
        break;
      case "kelvin":
        celsius = temperatura - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperatura;
        break;
    }
  
    // Mostrar el resultado debajo y Redondea cada resultado a dos decimales.
    resultadoTexto.innerHTML = `
      <strong>Resultados:</strong><br>
      Celsius: ${celsius.toFixed(2)}°C<br> 
      Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>
      Kelvin: ${kelvin.toFixed(2)}K
    `;
  }

  