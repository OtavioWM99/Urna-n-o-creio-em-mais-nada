let voteInput = document.querySelectorAll('.number-input input');
let currentInput = 0;

let votos = {
  pedroVoto: 0,  // 13
  helderVoto: 0, // 12
  mossmannVoto: 0, // 22
  pietroVoto: 0, // 38
  heirotVoto: 0  // 24
};

const numerosCandidatos = {
  13: "pedroVoto",
  12: "helderVoto",
  22: "mossmannVoto",
  38: "pietroVoto",
  24: "heirotVoto"
};



function pressKey(key) {
  if (currentInput < voteInput.length) {
    voteInput[currentInput].value = key;
    currentInput++;
  }
}

function whiteVote() {
  resetInput();
  alert("Voto em Branco");
}

function correct() {
  resetInput();
}

function confirm() {

  let vote = Array.from(voteInput).map(input => input.value).join('');



  if (vote.length === 2) {
    if(vote == 13){
      alert("Votou no pedroga. Número: "  + vote); 
      pedroVoto++;
    }
    else if(vote == 12){
      alert("Votou no Helder. Número: "  + vote); 
      helderVoto++;
    }
    else if(vote == 22){
      alert("Votou no Mossmann. Número: "  + vote); 
      mossmannVoto++;
    }
    else if(vote == 38){
      alert("Votou no Pietro. Número: "  + vote); 
      pietroVoto++;
    }
    else if(vote == 24){
      alert("Votou no Heirot. Número: "  + vote); 
      heirotVoto++;
    }
    else{
      alert("Número de candidato inválido. Voto nulo"); 
    }
  } 
  else {
    alert("Por favor, insira os dois dígitos.");
  }
  resetInput();
}

function resetInput() {
  voteInput.forEach(input => input.value = '');
  currentInput = 0;
}






console.log(`O Pedroga possuí ${pedroVoto} votos`);
console.log(`O Helder possuí ${helderVoto} votos`);
console.log(`O Mossmann possuí ${mossmannVoto} votos`);
console.log(`O Pietro Tabajara possuí ${pietroVoto} votos`);
console.log(`O Heirot possuí ${heirotVoto} votos`);