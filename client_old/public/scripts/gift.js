const renderGift = async () => {
  //const requestedID = parseInt(window.location.href.split('/').pop())

  const params = new URLSearchParams(window.location.search)
const requestedID = parseInt(params.get('id'))

  const response = await fetch('/gifts')
  const data = await response.json()

  const giftContent = document.getElementById('gift-content')

  let gift
  if (data) {
    gift = data.find((gift) => gift.id === requestedID)
  }

  if (gift) {
    document.getElementById('image').src = gift.image
    document.getElementById('name').textContent = gift.name
    document.getElementById('submittedBy').textContent = `Submitted By: ${gift.submittedBy}`
    document.getElementById('submittedOn').textContent = `Submitted On: ${gift.submittedOn}`
    document.getElementById('pricePoint').textContent = `Price: ${gift.pricePoint}`
    document.getElementById('audience').textContent = `Great For: ${gift.audience}`
    document.getElementById('description').textContent = gift.description

    document.title = gift.name
  } else {
    const h2 = document.createElement('h2')
    h2.textContent = 'No Gifts Available 😞'
    giftContent.appendChild(h2)
  }
}

renderGift()