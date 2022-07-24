async function  loadCategoryById(id){

    const categoriesResponse = await fetch('http://localhost:3131/category/' + id);
    
   
    const [category] = await Promise.all([categoriesResponse]);
  
    const categoryJson = await category.json();
    console.log(categoryJson);

  
    return categoryJson;
  
  }
  
  export { loadCategoryById };