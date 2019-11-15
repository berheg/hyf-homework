
async function getUser(input) {   
  const response = await fetch(`https://api.github.com/search/users?q=${input}`);
  return response.json();
}



export { getUser };