import { categories, products } from  "./productsData.js"
import { renderLabels, renderAlbuns } from "./render.js"
import { handleTheme, themePreference } from "./theme.js"

renderLabels(categories)

const handleFilters = (products, categories) => {
  const categoryButtons = document.querySelectorAll('.item__button')
  const rangeFilter = document.querySelector('.priceFilter__input')
  const albumList = document.querySelector('.filteredAlbuns__list')
  
  let filteredArray = products
  let categoryIndex = 0
  let inputValue = rangeFilter.value
  
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      categoryIndex = categories.findIndex((category) => category === button.innerText)

      if(categoryIndex === 0) 
      {
        filteredArray = products.filter((product) => product.price <= inputValue)
        albumList.innerHTML = ''
        renderAlbuns(filteredArray)
      }
      else
      {
        filteredArray = products.filter((product) => product.category === categoryIndex && product.price <= inputValue)
        albumList.innerHTML = ''
        renderAlbuns(filteredArray)
      }
    })

    rangeFilter.addEventListener('input', () => {
      const setPrice = document.querySelector('.price')
      inputValue = rangeFilter.value
      setPrice.innerText = rangeFilter.value
      
      if(categoryIndex === 0) 
      {
        filteredArray = products.filter((product) => product.price <= inputValue)
        albumList.innerHTML = ''
        renderAlbuns(filteredArray)
      }
      else
      {
        filteredArray = products.filter((product) => product.category === categoryIndex && product.price <= inputValue)
        albumList.innerHTML = ''
        renderAlbuns(filteredArray)
      }
    })
    
  })
  
}

themePreference()
renderAlbuns(products)
handleFilters(products, categories)
handleTheme()

