function displayResponse(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 40,
    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let subject = document.querySelector("#user-word");
    let apiKey = "98bc9f158331o422ta5db05dbd90ba36";
    let context =
      "Eres un experto en heiku romántico y cada vez que te lo piden, creas un heiku único en el tema de la palabra proporcionada y lo muestras asegurándote de que cada línea esté separada con un<br />";
    let prompt = `Por favor genere una heiku sobre ${subject.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    axios.get(apiUrl).then(displayResponse);
  
    let poem = document.querySelector("#poem");
    poem.classList.remove("hidden");
    poem.innerHTML = `<div class="blink">Generando una heiku sobre${subject.value}...</div>`;
  }
  
  let poemFormElemnt = document.querySelector("#poem-generator-form");
  poemFormElemnt.addEventListener("submit", handleSubmit);