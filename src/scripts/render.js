
export const renderLabels = (labelsArray) =>  {
  const categoryList = document.querySelector('.filters__list')

  labelsArray.forEach( label => {
    const labelItem = document.createElement('li')
    labelItem.classList.add('filter__item')

    const labelButton = document.createElement('button')
    labelButton.classList.add('item__button')
    labelButton.innerText = label

    labelItem.appendChild(labelButton)
    categoryList.appendChild(labelItem)
  })
  return categoryList
}

export const renderAlbuns = (productsArray) => {
  const albumList = document.querySelector('.filteredAlbuns__list')

  productsArray.forEach( album => {
    const {img, title, band, year, price} = album

    const listItem = document.createElement('li')
    listItem.classList.add('FilteredAlbuns__item')

    const albumCard = document.createElement('div')
    albumCard.classList.add('AlbumCard__container')

    const albumImg = document.createElement('img')
    albumImg.classList.add('album__img')
    albumImg.src = img
    albumImg.alt = title

    const albumInfos = document.createElement('div')
    albumInfos.classList.add('album__infos')

    const bandName = document.createElement('span')
    bandName.classList.add('band__name')
    bandName.innerText = band

    const albumYear = document.createElement('span')
    albumYear.classList.add('album__year')
    albumYear.innerText = year

    const albumTitle = document.createElement('h2')
    albumTitle.classList.add('album__title')
    albumTitle.innerText = title

    const albumBuyBtn = document.createElement('div')
    albumBuyBtn.classList.add('buy__container')

    const albumPrice = document.createElement('p')
    albumPrice.classList.add('album__price')
    albumPrice.innerText = `R$ ${price},00`

    const buyButton = document.createElement('button')
    buyButton.classList.add('buy__btn')
    buyButton.innerText = 'Comprar'

    albumBuyBtn.append(albumPrice, buyButton)
    albumInfos.append(bandName, albumYear, albumTitle, albumBuyBtn)
    albumCard.append(albumImg,albumInfos)
    listItem.appendChild(albumCard)
    albumList.appendChild(listItem)
  })
  return albumList
}