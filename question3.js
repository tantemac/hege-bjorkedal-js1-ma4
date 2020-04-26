const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");

const url = "https://api.rawg.io/api/games/4200";

async function createGameDetails() {
	const heading = document.querySelector("h1");

	try {
		const response = await fetch(url);
		const details = await response.json();

		console.log("details", details);

		heading.innerHTML = details.name;

		const gameImage = document.querySelector(".image");
		gameImage.innerHTML = "<img src=" + details.background_image + ">";

		const gameDescription = document.querySelector(".description");
		gameDescription.innerHTML = details.description;
	} catch (error) {
		heading.innerHTML = "This is not working";
		console.log(error);
	}
}

createGameDetails();
