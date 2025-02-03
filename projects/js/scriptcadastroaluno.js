var alunos = [
    {
        id: 1,
        name: "Roberto",
        email: "rob123123@gmail.com",
        curso: 1,
        turno: 2
    },
];

var cursos = [
    {   id: 1, name: "Java" },
    {   id: 2, name: "Cpp"  },
    {   id: 3, name: "CSharp" },
    {   id: 4, name: "Python"  }
];

var turnos = [
    {   id: 1, name: "Manhã"},
    {   id: 2, name: "Tarde"},
    {   id: 3, name: "Noite"}
];

//OnLoad
loadAluno();

function loadAluno() {
    for (let alu of alunos) {
        addNewRow(alu);
    }
}

function addNewRow(alu){
    var table = document.getElementById("alunoTable");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(alu.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(alu.name);
    newRow.insertCell().appendChild(nameNode);

    var emailNode = document.createTextNode(alu.email);
    var cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(emailNode);

    var turnoNode = document.createTextNode(cursos[alu.curso - 1].name);
    newRow.insertCell().appendChild(turnoNode);
    
    var turnoNode = document.createTextNode(turnos[alu.turno - 1].name);
    newRow.insertCell().appendChild(turnoNode);


}

/* function save() {

    var prod = {
        id: products.length + 1,
        name: document.getElementById("inputName").value,
        description: document.getElementById("inputDescription").value,
        price: convertToNumber(document.getElementById("inputPrice").value),
        category: document.getElementById("selectCategory").value,
        promotion: document.getElementById("checkBoxPromotion").checked,
        new: document.getElementById("checkBoxNewProduct").checked
    };

    addNewRow(prod);
    products.push(prod);

    document.getElementById("formProduct").reset();

} */

function save(){

    if(document.getElementById("RadioManha").checked){
        turn = 1;
    }
    if(document.getElementById("RadioTarde").checked){
        turn = 2;
    }
    if(document.getElementById("RadioNoite").checked){
        turn = 3;
    }

    var alu = {
        id: alunos.length +1,
        name: document.getElementById("InputNome").value,
        email: document.getElementById("InputEmail").value,
        curso: document.getElementById("InputCursos").value,
        turno: turn
    };

    addNewRow(alu);

    alunos.push(alu);

    document.getElementById("formAluno").reset();
}