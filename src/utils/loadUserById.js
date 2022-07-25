async function  loadUserById(id){

    const userResponse = await fetch('http://localhost:3131/user/' + id);
    
   
    const [user] = await Promise.all([userResponse]);
    console.log('http://localhost:3131/user/' + id);
  
    const userJson = await user.json();
  
    return userJson;
  
  }
  
  export { loadUserById };