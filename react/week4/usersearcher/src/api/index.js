
async function getUser(input) {  

  const response = await fetch(`https://api.github.com/search/users?q=${input}`);
  if(response.status===200)
  return response.json();
  else
   return response.status
}



export { getUser };