async function  loadUsers(){
    const UsersResponse = await fetch('http://localhost:3131/user');

    const [users] = await Promise.all([UsersResponse]);
  
    const usersJson = await users.json();
  
    return usersJson;
  
  }
  
  export { loadUsers };