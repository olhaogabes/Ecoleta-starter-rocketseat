
function populateUFs() {
  const ufSelect = document.querySelector("Select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json() )
  .then( states => {

    for(  const state of states ) {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  } )
}

populateUFs()

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  fetch(url)
  .then( res => res.json() )
  .then( cities => {

    for( const city of cities ) {
      citySelect.innerHTML+= `<option value="${city.id}">${city.nome}</option>`
    }

    citySelect.disabled = false
  })

}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)


/* function getCities(event) {
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufValue = event.target.Value

  const indexOfselectedState = event.target.selectedIndex
  stateInput.Value = event.target.options[indexOfselectedState].textk

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  fetch(url)
  .then( res => res.json() )
  .then( cities => {

    for( const city of cities ) {
      citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
    }

    citySelect.disabled = false
  } )
}


document
.querySelector("Select[name=uf]")
.addEventListener("change", getCities) */
