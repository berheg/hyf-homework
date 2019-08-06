console.log("Script loaded");
const searchField = document.getElementById("searchField");

let listOfEmojis;
function fetchEmojis(){
	fetch("https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json")
	.then(response => response.json())
	.then(json => {
		listOfEmojis = json;
		console.log(listOfEmojis);
		renderHTML(listOfEmojis);
	})
}

function renderHTML(listOfEmojis){
	const ulTag = document.querySelector("ul");
	ulTag.innerHTML = ""
	listOfEmojis.forEach((emoji) => {
		const liTag = document.createElement("li");
		// liTag.innterHTML = emoji.char

		//
		const emojiSpan = document.createElement("span");
		emojiSpan.innerHTML = emoji.char
		emojiSpan.classList.add("emoji");
		liTag.appendChild(emojiSpan);

		const nameSpan = document.createElement("span");		
		nameSpan.innerHTML = emoji.name
		nameSpan.classList.add("emojiName");		
		liTag.appendChild(nameSpan);
		//

		ulTag.appendChild(liTag);
	})
}

fetchEmojis();

searchField.addEventListener("keyup",() => {
	const newListOfEmojis = listOfEmojis.filter((emoji) => {
		return emoji.name.toLowerCase().includes(searchField.value.toLowerCase());
	});
	renderHTML(newListOfEmojis);
})

