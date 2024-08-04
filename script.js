const inputValue = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultDis = document.getElementById("output");

convertBtn.addEventListener("click", calc);

function calc() {
  const value = inputValue.value.trim();
  const num = Number(value);

  if (value === "" || isNaN(num)) {
    resultDis.textContent = "Please enter a valid number";
  } else if (num < 1) {
    resultDis.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    resultDis.textContent = "Please enter a number less than or equal to 3999";
  } else {
    resultDis.textContent = convertToRoman(num);
  }
}

function convertToRoman(num) {
  // Define the mapping of Roman numerals to their corresponding values
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  // Initialize the result string
  let result = "";

  // Iterate through the Roman numeral mapping
  for (let i = 0; i < romanNumerals.length; i++) {
    // While the current value can be subtracted from num
    while (num >= romanNumerals[i].value) {
      // Append the corresponding numeral to the result
      result += romanNumerals[i].numeral;
      // Subtract the current value from num
      num -= romanNumerals[i].value;
    }
  }

  return result;
}
