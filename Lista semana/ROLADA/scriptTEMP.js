const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    let atualizando = false;

    // Celsius -> Fahrenheit
    celsiusInput.addEventListener("input", () => {
      if (atualizando) return;

      atualizando = true;

      const celsius = parseFloat(celsiusInput.value);

      if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
      } else {
        fahrenheitInput.value = "";
      }

      atualizando = false;
    });

    // Fahrenheit -> Celsius
    fahrenheitInput.addEventListener("input", () => {
      if (atualizando) return;

      atualizando = true;

      const fahrenheit = parseFloat(fahrenheitInput.value);

      if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
      } else {
        celsiusInput.value = "";
      }

      atualizando = false;
    });