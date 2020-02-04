const propertyList = document.querySelector("#property-list")

allProperties = ""

fetch(`http://localhost:3000/mars_estates`)
    .then(response => response.json())
    .then(parsedResponse => {
        allProperties = parsedResponse
        makePropertyCards()
    })
    .catch(error => console.log(error))

function makePropertyCards() {
    allProperties.map(property => {
        const propertyDiv = document.createElement("div")
        const propertyImage = document.createElement("img")
        const propertyTitle = document.createElement("p")
        const propertyPrice = document.createElement("p")
        const purchaseButton = document.createElement("button")

        propertyDiv.className = "real-estate"

        propertyImage.src = property.img
        propertyImage.alt = "Mars Photo"
        propertyImage.height = 100
        propertyImage.width = 100

        propertyTitle.textContent = property.title

        propertyPrice.textContent = property.price

        purchaseButton.textContent = "Purchase"

        propertyDiv.append(
            propertyImage,
            propertyTitle,
            propertyPrice,
            purchaseButton
        )

        propertyList.appendChild(propertyDiv)

    })
}

{/* <div class="real-estate">
                    <img src="https://scdn.slashgear.com/wp-content/uploads/2017/10/mars.jpg" alt="Mars Field" height="100" width="100">
                    <p>Phobos Field</p>
                    <p>$1,200,000</p>
                    <button>Purchase</button>
                </div> */}