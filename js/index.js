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

const list = document.getElementById('resCnsult')

const nomeCond = document.getElementById('nomeCond')
const stts = document.getElementById('stts')
const msg = document.getElementById('msg')

let sttsRes = 'Não Mutado';
let msgRes = 'Dirija com atenção e siga em segurança!';

btnConsult.addEventListener('click' , () => {
  consultMV()
})

function consultMV () { 

  verificarList()

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
  console.log(vel)

  // if ( vel < (inpVelV.value / 2) ) {
  //   console.log('Baixa velocidade, aumente sua velocidade')    
  // } else 
  // if ( vel > (inpVelV.value) || vel <= (inpVelV.value + 20) ) {
  //   console.log('velocidade acima do permitido, reduza')
  // } else 
  // if ( vel > (inpVelV.value + 20) ) {
  //   console.log('velocidade ultrapassou o maximo aceitavel, reduza imediatamente')
  // } else {
  //   console.log('velocidade ideal')
  // }

  // if ( vel < (inpVelV.value / 2) ) {
  //   console.log('Baixa velocidade, aumente sua velocidade')
  // } else 
  // if ( vel >= (inpVelV.value / 2) && vel <= inpVelV.value ) {
  //   console.log('velocidade ideal')
  // } else 
  // if ( vel > (inpVelV.value) || vel < (inpVelV.value + 20)) {
  //   console.log('velocidade acima do permitido, reduza')
  // } else 
  // if ( vel >= (inpVelV.value + 25)) {
  //   console.log('velocidade ultrapassou o maximo aceitavel, reduza imediatamente')
  // }

  createCard(inpNome.value)

}

function createCard (nomeC) {

  console.log(nomeC)

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

function verificarList () {
  // let items = document.querySelectorAll('.card')
  let item = document.querySelector('.card')

  let items = document.getElementById('resConsult')

  console.log(items)

  

  // if ( items.length > 5 ) {
  //   for (child of items.children){
  //     child.remove();
  //   }
  // } else {
  //   return
  // }

}

function clearInput () {
  inpNome.value = ''
  inpPlaca.value = ''
  inpVel.value = ''
  inpVelV.value = ''
}
