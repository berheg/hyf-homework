console.log("Script loaded");
const searchField = document.getElementById("searchField");
const ulTag = document.querySelector("ul.container");
const ulFavoriteList = document.querySelector(' ul.favoriteList')
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

function renderHTML(listOfEmojis, ulList = ulTag){
	
	ulList.innerHTML = ""
	listOfEmojis.forEach((emoji) => {
		const liTag = document.createElement("li");
		const emojiSpan = document.createElement("span");
		emojiSpan.innerHTML = emoji.char
		emojiSpan.classList.add("emoji");
		liTag.appendChild(emojiSpan);

		const nameSpan = document.createElement("span");		
		nameSpan.innerHTML = emoji.name
		nameSpan.classList.add("emojiName");		
		liTag.appendChild(nameSpan);
		//save to clipboard
		liTag.addEventListener('click', () => {
			writeToClipboard(emoji.char);
			saveToFavorite(emoji);
		})

		ulList.appendChild(liTag);
	})
}
searchField.addEventListener("keyup",() => searchEmoji(searchField.value,'name'));
function searchEmoji(searchValue, searchOption){
    const newListOfEmojis = listOfEmojis.filter((emoji) => {
		return emoji[searchOption].toLowerCase().includes(searchValue.toLowerCase());
	});
	renderHTML(newListOfEmojis);
}
fetchEmojis();
