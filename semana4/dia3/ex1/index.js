function AddResidenceToList () {
    const numberContent = document.getElementById("number").value
    const districtContent = document.getElementById("district").value
    const cityContent = document.getElementById("city").value
    const areaContent = document.getElementById("area").value
    
    const numberNode = document.createTextNode(
        "Casa com " + areaContent + "m². Localizada no bairro " + districtContent +
        " - " + cityContent + ", nº" + numberContent +".   "
    )

    const button = document.createElement("button")
    button.type = "button"
    button.innerText = "REMOVER"
    button.setAttribute("onclick", "Remove(this)")

    const li = document.createElement("li")

    li.appendChild(numberNode)
    li.appendChild(button)
    document.getElementById("house-list").appendChild(li)
}

function Remove(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}