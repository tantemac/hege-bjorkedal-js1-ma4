const gamesUrl = "https://api.rawg.io/api/games";

async function createGames() {
	try {
		const response = await fetch(gamesUrl);
		const games = await response.json();
		console.log(games);
		createHTML(games);
	} catch (error) {
		console.log(error);
	}
}

function createHTML(games) {
	console.log(games);

	const resultsContainer = document.querySelector(".results");

	let html = "";

	let arr = games.results;

	console.log(arr);

	for (let i = 0; i < arr.length; i++) {
		if (!arr[i].name) {
			console.log("I have no name");
			continue;
		}
		console.log("log name", arr[i].name);
		console.log(arr[i].name);

		let nameOfGame = "Unknown";

		if (arr[i].name !== "-") {
			nameOfGame = arr[i].name;
		}

		html += `<div class="game">
                    <h2>${arr[i].name}</h2>
                    <img src="${arr[i].background_image}" alt="${arr[i].name}" />
                </div>`;
	}

	resultsContainer.innerHTML = html;
}

createGames();
