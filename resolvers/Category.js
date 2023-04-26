exports.Category =  {
  products: ({id: categoryId}, {filter}, { db }) => {
    const categoryProducts = db.products.filter((product) => product.categoryId === categoryId)
    let filteredCategoryProducts = categoryProducts

    if(filter){
      const { onSale } = filter
      if(onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(categoryProducts => {
          return categoryProducts.onSale
        })
    }
  }
    
    return filteredCategoryProducts
  },
}