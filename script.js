function convert() 
{
  var tempInput = document.getElementById("temperature").value;
  var unitInput = document.getElementById("unit").value;
  var temperatureConverted;
  var outputDiv = document.getElementById("result");

  if (unitInput === "celsius") {
    temperatureConverted = (tempInput * 9/5) + 32;
    outputDiv.innerHTML = tempInput + " °C is equal to " + temperatureConverted + " °F";
  } else if (unitInput === "fahrenheit") {
    temperatureConverted = (tempInput - 32) * 5/9;
    outputDiv.innerHTML = tempInput + " °F is equal to " + temperatureConverted + " °C";
  }
}