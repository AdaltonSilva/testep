// **Array de objetos com dados de usuários**
const objs = [
    {
      "user_email": "usuario@dominio.com",
      "user_password": "senhaSegura123"
    },
    {
      "user_email": "outro_usuario@dominio.com",
      "user_password": "outraSenhaSegura456"
    },
    {
      "current_password": "senhaAtual123",
      "new_password": "novaSenha789"
    },
    {
      "user_email": "usuario@dominio.com"
    },
    {
      "reset_token": "tokenDeRedefinição",
      "new_password": "novaSenha012"
    }
  ];
  
  // **Função para converter objeto para JSON**
  function objectToJson(obj) {
    return JSON.stringify(obj, null, 2); // converte objeto para JSON formatado
  }
  
  // **Função para converter JSON para objeto**
  function jsonToObject(json) {
    return JSON.parse(json); // converte JSON para objeto
  }
  
  // **Exemplos de conversão**
  
  // Converte o array de objetos para JSON formatado
  const jsonData = objectToJson(objs);
  
  // Exibe o JSON convertido no console
  console.log("JSON:", jsonData);
  
  // Converte a string JSON de volta para um objeto
  const objData = jsonToObject(jsonData);
  
  // Exibe o objeto convertido no console
  console.log("Objeto:", objData);
  
  // **Funções para manipular dados de usuários**
  
  // Função para buscar um usuário por email
  function findUserByEmail(email) {
    return objs.find(obj => obj.user_email === email); // busca o usuário no array
  }
  
  // Função para verificar se o email e a senha correspondem a um usuário
  function authenticateUser(email, password) {
    const user = findUserByEmail(email); // busca o usuário pelo email
    return user && user.user_password === password; // verifica se a senha coincide
  }
  
  // Função para alterar a senha de um usuário
  function changePassword(email, currentPassword, newPassword) {
    const user = findUserByEmail(email); // busca o usuário pelo email
    if (user && user.user_password === currentPassword) {
      user.user_password = newPassword; // altera a senha do usuário
      return true; // indica sucesso na alteração
    }
    return false; // indica falha na alteração
  }
  
  // **Exemplos de uso das funções**
  
  // Busca um usuário por email
  const user = findUserByEmail("usuario@dominio.com");
  
  // Verifica se o email e a senha correspondem a um usuário
  const isAuthenticated = authenticateUser("usuario@dominio.com", "senhaSegura123");
  
  // Altera a senha de um usuário
  const passwordChanged = changePassword("usuario@dominio.com", "senhaAtual123", "novaSenha456");
  
  // Exibe os resultados das operações no console
  console.log("Usuário encontrado:", user);
  console.log("Usuário autenticado:", isAuthenticated);
  console.log("Senha alterada:", passwordChanged);

  
  