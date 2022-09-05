onload = hour();
function hour () {
  let hr = new Date;

  let returnPage = document.getElementById('data');

  returnPage.innerHTML = hr.getHours() + ':' + hr.getMinutes()

  const interval = setInterval(() => {
    hour()
  }, 1000)
}

const inpNome = document.getElementById('nome')
const inpPlaca = document.getElementById('placa')
const inpVel = document.getElementById('vel')
const inpVelV = document.getElementById('velV')
const btnConsult = document.getElementById('consult')

const list = document.getElementById('resConsult')

const nomeCond = document.getElementById('nomeCond')

let sttsRes;
let msgRes;

btnConsult.addEventListener('click' , () => {
  consultMV()
})

function consultMV () { 

  if (verificarCampo() == false) {

    inpNome.style.border = 'solid 0.5px #2D4A75' , inpPlaca.style.border = 'solid 0.5px #2D4A75' , inpVel.style.border = 'solid 0.5px #2D4A75' , inpVelV.style.border = 'solid 0.5px #2D4A75'

    verificarMulta(inpVel.value)

    clearInput()

  } else {
    return
  }
}

function verificarCampo () {

  if(inpNome.value == '' || inpPlaca.value  == '' || inpVel.value  == '' ) {
    return inpNome.style.border = 'solid 0.5px #ff0000' , inpPlaca.style.border = 'solid 0.5px #ff0000' , inpVel.style.border = 'solid 0.5px #ff0000' , inpVelV.style.border = 'solid 0.5px #ff0000'
  } else {
    return false
  }

}

function verificarMulta (vel) {

  if ( vel < (inpVelV.value / 2) ) {

    sttsRes = 'Atencao'
    msgRes = 'Você dirigiu abaixo da velocidade miníma da via, aumente sua velocidade!'
    msgRes += '\n Dirija sempre com atenção!'

  } else 
  if ( vel >= (inpVelV.value / 2) && vel <= inpVelV.value ) {

    sttsRes = 'Continue'
    msgRes = 'Você manteve sua velocidade ideal!'
    msgRes += '\n Dirija sempre com atenção!'

  } else 
  if ( vel > (inpVelV.value) ) {

    sttsRes = 'Urgente'
    msgRes = 'Você ultrapassou a velocidade ideal permitida na via, reduza a velocidade!'
    msgRes += '\n Dirija sempre com atenção!'
    
  }

  createCard(inpNome.value)

}

function createCard (nomeC) {

  const card = document.createElement('div')
  card.classList.add('card')

  const header = document.createElement('header')

  const cond = document.createElement('p')
  cond.innerText = `${nomeC}`

  const stts = document.createElement('p')
  stts.innerText = `${sttsRes}`

  header.appendChild(cond)
  header.appendChild(stts)

  card.appendChild(header)

  const section = document.createElement('section')

  const msg = document.createElement('p')
  msg.innerText = `${msgRes}`

  section.appendChild(msg)

  card.appendChild(section)

  list.appendChild(card)

}

function clearInput () {
  inpNome.value = ''
  inpPlaca.value = ''
  inpVel.value = ''
  inpVelV.value = ''
}
