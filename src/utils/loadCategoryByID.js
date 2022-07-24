async function  loadCategoryById(id){

    const categoriesResponse = await fetch('localhost:3131/category/:id');
      
    const [category] = await Promise.all([categoriesResponse]);
  
    const categoryJson = await category.json();
  
    return categoryJson;
  
  }
  
  export { loadCategoryById };