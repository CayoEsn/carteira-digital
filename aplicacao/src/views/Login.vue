<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="Login" v-model="login" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-login">
      <button @click="efetuarLogin">Login</button>
    </div>
    <!-- <p>
      Você não tem conta?
      <span>
        <router-link to="/cadastro">crie uma conta</router-link>
      </span>
    </p> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      login: '',
      senha: ''
    }
  },
  methods: {
    efetuarLogin: function () {
      if (!this.login) {
        return alert('O campo login é obrigatório.')
      }

      if (!this.senha) {
        return alert('O campo senha é obrigatória.')
      }

      axios
        .post('http://localhost:5000/auth/login', { login: this.login, senha: this.senha })
        .then((response) => {
          alert('Usuário logado com sucesso')
          localStorage.setItem('usuario', JSON.stringify({ nome: response.data.usuario.nome, login: response.data.usuario.login }))
          this.$router.replace('home')
        })
        .catch((error) => {
          return alert(error)
        })
    }
  }
}
</script>

<style scoped>
.login {
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
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
