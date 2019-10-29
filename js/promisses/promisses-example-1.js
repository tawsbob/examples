//ES5

let idade = 20

const minhaTarefa = new Promise((resolve,reject)=>{
    if (typeof idade == 'number') {
      resolve(true)
    } else {
       var motivoDoErro = new Error('Idade inválida');
        reject(motivoDoErro);
    }
})

//TESTANDO A PROMISSE
minhaTarefa.then((idadeValida)=>{
  console.log(idadeValida)
  //TRUE
}).catch((error)=>{
  console.log(error)
})

(async ()=> console.log(await minhaTarefa()))()
