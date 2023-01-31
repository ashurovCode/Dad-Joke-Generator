const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "F3BLIg6qu2t1+Igzy6oFRQ==CV2Bd1V7m14vGoZW";

const options = {
	method: "GET",
	headers: {
		"X-Api-Key": apiKey,
	}
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
	try {
		jokeEl.innerText = "Uploading...";
		btnEl.disabled = true;
		btnEl.innerText = "Loading...";

		const response = await fetch(apiURL, options);
		const data = await response.json();

		btnEl.disabled = false;
		btnEl.innerText = "Tel me a Joke";

		jokeEl.innerText = data[0].joke;
	} catch (error) {
		// Error alert
		jokeEl.innerText = "ERROR 404 Plese try again later";
		btnEl.disabled = false;
		btnEl.innerText = "Tel me a Joke";
	}
}

btnEl.addEventListener("click", getJoke);
