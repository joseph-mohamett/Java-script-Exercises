const fromLang = document.querySelector("#source-language");
const toLang = document.querySelector("#target-language");
const translateBtn = document.querySelector(".translate-btn");
const input = document.querySelector("#source-text");
const output = document.querySelector("#translated-output");

translateBtn.addEventListener('click', async function () {
  const url = `https://microsoft-translator-text-api3.p.rapidapi.com/largetranslate?to=${toLang.value}&from=${fromLang.value}`;
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'a28566807amsh7aa1073bd9dbdd7p157bd5jsnaca5f3743998',
      'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromLang.value,
      to: toLang.value,
      text: input.value
    })
  };

  console.log(fromLang.value);
  console.log(toLang.value);

  try {
    output.textContent = "Translating...";
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    displayDom(result.trans);
  } catch (error) {
    console.error(error);
    output.textContent = "Khalad ayaa dhacay, isku day mar kale.";
  }
});

function displayDom(trans) {
  output.textContent = trans;
}






