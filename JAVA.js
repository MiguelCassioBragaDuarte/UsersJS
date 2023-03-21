
let usuario = [
    {
        nome: "Miguel",
        senha: "001"
    },
    {
        nome: "Davi",
        senha: "002"
    },
    {
        nome: "Gabriel",
        senha: "003"
    },
    {
        nome: "lucas",
        senha: "004"
    },
    {
        nome: "Pedro",
        senha: "005"
    }
]

let nomepag2 = localStorage.getItem("usuariologado")

if (nomepag2 != undefined) {
    

    const logado = document.querySelector(".nomelogado")
    logado.innerHTML += ` ${nomepag2}`

    window.addEventListener("beforeunload", function () {
        localStorage.removeItem("usuariologado");
    })

//mostrar lista de usuarios
    const btmost = document.querySelector('#mostrar')
    btmost.addEventListener("click", mostrar)

    function mostrar() {
        let lista = document.querySelector('div#List')
        lista.innerHTML = ""
        lista.innerHTML += `<h2 class="titulos">Lista de Usuario</h2><br><br>`

        for (let i = 0; i < usuario.length; i++) {
            lista.innerHTML += `Numero ${[i]}: ${usuario[i].nome}<br>`


        }
    }
    //mostrando o usuario logado
    
    //removendo a lista de usuario
    const bttira = document.querySelector('#tirar')
    bttira.addEventListener("click", tirar)

    function tirar() {
        let lista = document.querySelector('div#List')
        lista.innerHTML = ""
    }

    //deletando usuario

    const btdeletar1 = document.querySelector('#deletar1')
    btdeletar1.addEventListener("click", deletar1)

    function deletar1() {
        let lista = document.querySelector('div#List')
        lista.innerHTML = "";

        lista.innerHTML += `<h2 class="titulos">Deletar Usuario</h2><br><br>`
        for (let i = 0; i < usuario.length; i++) {
            lista.innerHTML += `<div><input type="checkbox" id="${i}"><label> -${usuario[i].nome}</label></div>`
        }
        lista.innerHTML += `<input type="button" value="Excluir" class="bts">`

        const excluir = document.querySelector("#tt");
        excluir.addEventListener("click", delet)

    }

    function delet() {

        let usuariodeletado = [""]

        for (let i = 0; i < usuario.length; i++) {
            let check = document.getElementById(`${i}`)

            if (check.checked == true) {
                usuariodeletado[i] = 1
            } else {
                usuariodeletado[i] = 0
            }
        }

        for (let i = usuariodeletado.length - 1; i >= 0; i--) {

            if (usuariodeletado[i] == 1) {
                usuario.splice(i, 1);
            }

        }


        let lista = document.querySelector('div#List')
        lista.innerHTML = ""
        

        for (let i = 0; i < usuario.length; i++) {
            lista.innerHTML += `Numero ${[i]}: ${usuario[i].nome}<br>`



        }

    }
    //criando novo usuario

    const novo1 = document.querySelector('#criar')
    novo1.addEventListener("click", criarusuario1)

    function criarusuario1() {

        let lista = document.querySelector('div#List')
        lista.innerHTML = "";
        lista.innerHTML += `<h2 class="titulos">Criando Usuario</h2><br><br>`

        lista.innerHTML += `<form class="Formnv centralizar">
                            <label for="novouser">Digite o novo Usuário:</label><br>
                            <input type="text" id="nomenovo" name="nomenovo" required="required"><br>
                            <label for="senha">Digite a senha:</label><br>
                            <input type="text" id="senha1" name="senha1" required="required"><br><br>
                            <label for="senha2">Confirme a senha:</label><br>
                            <input type="password" id="senha2" name="senha2" required="required"><br><br>
                            <input type="button" value="Salvar" id="Salvarusu" class="bts">
                            </form>`

        const novo2 = document.querySelector('#Salvarusu')
        novo2.addEventListener("click", criarusuario2)

    }
    function criarusuario2(){

        let novousuario = {
            nome: document.querySelector("input#nomenovo").value,
            senha: document.querySelector("input#senha1").value
        }

        let confi = document.querySelector("input#senha2").value
        
        let repete = 0

        if(confi == novousuario.senha){

        for( let i = 0; i<usuario.length; i++){
            if(usuario[i].nome==novousuario.nome){
                repete = 1
            }
            
        }

        if(repete==0){
            usuario.push(novousuario)
            alert("usuario adicionado com sucesso!")
            mostrar()
        }
        else{
            alert("Usuario com o mesmo nome já existente")
            criarusuario1()
        }


    }
    else{
        alert("Senhas digitadas não compativeis")
        criarusuario1()
    }


}
//atualizabndo usuario
const inputatualizar = document.querySelector("#atualizar")
inputatualizar.addEventListener("click", atualizar1)

function atualizar1(){
    let lista = document.querySelector('div#List')
    lista.innerHTML=""
    lista.innerHTML += `<h2 class="titulos">Atualizando dados do usuário</h2><br><br>`
    lista.innerHTML +=`<form class="Format centralizar">
                        <label for="user">Nome do Usuário:</label><br>
                        <input type="text" id="nomeat" name="nome" required="required"><br>
                        <label for="senha">Digite a senha atual:</label><br>
                        <input type="password" id="senhaat" name="senha" required="required"><br><br>
                        <label for="usernovo">Novo nome Usuário:</label><br>
                        <input type="text" id="nomenv" name="nomenv" required="required"><br>
                        <label for="senhanova">Nova senha:</label><br>
                        <input type="password" id="senhanv" name="senhanv" required="required"><br><br>
                        <label for="senhanova2">Nova senha:</label><br>
                        <input type="password" id="senhanv2" name="senhanv2" required="required"><br><br>
                        <input type="button" value="Salvar alterações" id="atualizardado" class="bts">
                        </form>`

    const inputatualizar2 = document.querySelector('#atualizardado')
    inputatualizar2.addEventListener("click", atualizar2)

    function atualizar2(){
        
        let nomeatual = document.querySelector("input#nomeat").value
        let senhaatual = document.querySelector("input#senhaat").value
        let nomenovo = document.querySelector("input#nomenv").value
        let senhanova = document.querySelector("input#senhanv").value
        let senhanova2 = document.querySelector("input#senhanv2").value

        let errosenha = 1
        let repetida = 0
        let indice = 0

        for(let i = 0; i<usuario.length; i++){
            if(usuario[i].nome==nomenovo){
                if(usuario[i].nome!= nomenovo){
                    repetida = 1
                }
            }
        }
        if(repetida==0){
            for(let i = 0; i <usuario.length;i++){
                if(usuario[i].nome==nomeatual){
                    repetida = 0
                    
                    if((usuario[i].senha==senhaatual)&& (senhanova==senhanova2)){
                        errosenha=0
                        indice=i
                        i = usuario.length
                    }
                }
            }
        }
        if(repetida == 0){

            if(errosenha==0){
                let lista = document.querySelector('div#List')
                lista.innerHTML=""
                usuario[indice].nome=nomenovo
                usuario[indice].senha=senhanova
                alert("Dados atualizados com sucesso!")
                mostrar()
            }else{
                alert("Login incorreto, favor verificar os dados, senha icorreta")
                atualizar1()
            }

        }else{
            alert("login icorreto, favor verificar os dados , usuário incorreto!")
            atualizar1()
        }

        
    }
}
    //Função testar
    const botaotestar = document.querySelector('#testar')
    botaotestar.addEventListener("click", testar)


    function testar() {

        let lista = document.querySelector('div#List')
            lista.innerHTML=""
            lista.innerHTML += `<h2 class="titulos">Testando dados Usuario</h2><br><br>`
            lista.innerHTML +=` <form class="Formnv centralizar">
                                <label for="ForName">Digite o nome do Usuário:</label><br>
                                <input type="text" id="nome" name="nome" required><br>
                                <label for="ForSenha">Digite a senha do usuário:</label><br>
                                <input type="password" id="senha" name="senha" required><br><br>
                                <input type="button" value="Testar" id="bttestar" class="bts">
                                </form>`
        
        const inputtestar = document.querySelector('#bttestar')
        inputtestar.addEventListener("click", testar2)
    }

        function testar2(){

            
        let controle = 0
        let entnome = document.querySelector('input#nome').value
        let entsenha = document.querySelector('input#senha').value

        for (let i = 0; i < usuario.length; i++) {
            if (usuario[i].nome == entnome && usuario[i].senha == entsenha) {

                localStorage.setItem("usuariologado", usuario[i].nome)

                controle = 1
                i = usuario.length
                alert("Teste de Usuário realizado, dados informados corretos")
            }

        }

        if (controle == 0) {
            alert("Teste de Usuário realizado, dados informados INCORETOS")
        }


    }
    const sairbt = document.querySelector('#sair')
    sairbt.addEventListener("click", sair)

    function sair(){
        localStorage.removeItem("usuariologado")
        window.location.href = 'index.html'
    }

}
else {

    const botaologar = document.querySelector('#btlogin')
    botaologar.addEventListener("click", logar)


    function logar() {


        let controle = 0
        let entnome = document.querySelector('input#nome').value
        let entsenha = document.querySelector('input#senha').value

        for (let i = 0; i < usuario.length; i++) {
            if (usuario[i].nome == entnome && usuario[i].senha == entsenha) {

                localStorage.setItem("usuariologado", usuario[i].nome)

                controle = 1
                i = usuario.length
                window.location.href = 'log2.html'
            }

        }

        if (controle == 0) {
            alert("usuario não cadastrado ou senha incorreta")
        }


    }
}

