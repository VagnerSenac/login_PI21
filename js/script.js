
   function validar() {
    var usuario = document.getElementById("usuario").value; 
    //busca o conteúo do id do formulário
    var senha = document.getElementById("senha").value;
    

    if (usuario === "Picapau" && senha === "123") {
        // Autenticação bem-sucedida
        alert("Acesso Liberado");
      // Redirecionar para página autenticada
        window.location.href = "https://www.sp.senac.br/";
    } else {
        // Autenticação falhou
        alert("Acesso Negado");
        window.location.href = "index.html";
    }

   }

