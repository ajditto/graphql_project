const { v4: uuid } = require("uuid")
const { categories } = require("../db")

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const newCategory = {
      id: uuid(),
      name: input.name,
    }

    db.categories.push(newCategory)

    return newCategory
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryId } = input
    const newProduct = {
      id: uuid(),
      date: "01-01-2023",
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId
    }

    db.products.push(newProduct)
    return newProduct
  },

  addReview: (parent, { input }, { db }) => {
    const { title, comment, rating, productId } = input
    const newReview = {
      id: uuid(),
      title,
      comment,
      rating,
      productId
    }

    db.reviews.push(newReview)
    return newReview
  },

  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter(category => category.id != id)
    db.products = db.products.map(product => {
      if(product.categoryId === id) return{
        ...product,
        categoryId: null
      } 
      else return product
    })
    return true
  }
}