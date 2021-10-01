<template>
  <div class="sign-up">
    <p>Crie uma nova conta</p>
    <input type="text" placeholder="Nome" v-model="nome" />
    <br />
    <input type="text" placeholder="Login" v-model="login" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <button @click="cadastro">Cadastrar</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'cadastro',
  data () {
    return {
      nome: '',
      login: '',
      senha: ''
    }
  },
  methods: {
    cadastro () {
      if (!this.login) {
        return alert('O campo login é obrigatório.')
      }

      if (!this.senha) {
        return alert('O campo senha é obrigatório.')
      }

      axios
        .post('http://localhost:5000/auth/cadastro', { nome: this.nome, login: this.login, senha: this.senha })
        .then(() => {
          alert('Usuário cadastrado com sucesso')
          // this.$router.replace('login')
        })
        .catch((error) => {
          return alert(error)
        })
    }
  }
}
</script>

 <style scoped>
.sign-up {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #1606f3;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}

</style>
