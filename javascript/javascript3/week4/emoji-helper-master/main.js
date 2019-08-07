console.log("Script loaded");
const searchField = document.getElementById("searchField");
const ulTag = document.querySelector("ul.container");
const ulFavoriteList = document.querySelector(' ul.favoriteList');
const categorySelect = document.querySelector('select#selectCategories');
let listOfEmojis;
function fetchEmojis(){
	fetch("https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json")
	.then(response => response.json())
	.then(json => {
		listOfEmojis = json;
		console.log(listOfEmojis);
		getOptionTagForEachCategory();
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

function searchEmoji(searchValue, searchOption){
    const newListOfEmojis = listOfEmojis.filter((emoji) => {
		return emoji[searchOption].toLowerCase().includes(searchValue.toLowerCase());
	});
	console.log(newListOfEmojis);
	renderHTML(newListOfEmojis);
	return newListOfEmojis;
}
function getCategoryLists(){
	let listsOfCategory = [];
	listOfEmojis.forEach(emoji => {
		const category = emoji.category.split('(')[0];
		if(!listsOfCategory.includes(category)){
			listsOfCategory.push(category);
		}
	});
	return listsOfCategory;
}
function getEmojisByCategory(){
	let listOfEmojisPerCategory;
	if(categorySelect.value === 'all')
		listOfEmojisPerCategory = listOfEmojis;
	else
		listOfEmojisPerCategory = searchEmoji(categorySelect.value, 'category');
	return listOfEmojisPerCategory;
}
function getOptionTagForEachCategory(){
	const categoryLists = getCategoryLists();
	categoryLists.forEach(category => {
		const optionCategory = document.createElement('option');
		optionCategory.innerHTML = category;
		categorySelect.appendChild(optionCategory);
	});
}
categorySelect.addEventListener('change', () => {
	console.log(categorySelect.value);
	searchField.value = categorySelect.value;
	console.log(getEmojisByCategory());		
})
searchField.addEventListener("keyup",() => searchEmoji(searchField.value,'name'));
searchField.addEventListener("focus",() => searchField.value = '');
fetchEmojis();
