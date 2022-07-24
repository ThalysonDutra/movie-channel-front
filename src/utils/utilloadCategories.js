async function  utilloadCategories(){
    const categoriesResponse = await fetch('http://localhost:3131/category');
    console.log(categoriesResponse)
  
    const [categories] = await Promise.all([categoriesResponse]);
  
    const categoriesJson = await categories.json();
  
    return categoriesJson;
  
  }
  
  export { utilloadCategories };