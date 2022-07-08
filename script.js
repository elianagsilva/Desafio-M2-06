let dado = {
    nome: "Eliana",
    idade : 22,
    signo: "sagitário"
}

dado.comida = "estrogonofe"

delete dado.idade
console.log(dado)

let cadastro = [
    {
        nome: "Eliana",
        idade: "22",
        telefone: "985321154",
        amigos: ["Marcus", "Matheus", "Ingrid", "Maria"]
        },
        {
        nome: "Marcus",
        idade: "26",
        telefone: "985321155",
        amigos: ["Joana", "Juma", "Glória", "Isabel"]
        },
        {
        nome: "Victoria",
        idade: "23",
        telefone: "985321154",
        amigos: ["Marcelo", "Jonas", "Flávio", "Roberto"]
        },
        {
        nome: "Carlota",
        idade: "25",
        telefone: "985321154",
        amigos: ["Deusa", "Joyce", "Alexandre", "Carlos"]
        },
        {
        nome: "Joaquim",
        idade: "28",
        telefone: "985321954",
        amigos: ["Batista", "Greice", "Jonas", "Marcela"]
        }

    ]


    console.log(cadastro[0].amigos[2])
    console.log(cadastro[1].amigos[3])
    console.log(cadastro[2].amigos[2])
    console.log(cadastro[3].amigos[1])
    console.log(cadastro[4].amigos[2])