<template>
  <div class="sign-up">
    <p>Transferência</p>
    <input type="text" placeholder="Login de Origem" v-model="login_origem" />
    <br />
    <input type="text" placeholder="Login de Destino" v-model="login_destino" />
    <br />
    <input type="number" placeholder="Valor da Transferência" v-model="valor_transferido" />
    <br />
    <button @click="transferir">Transferir</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'transacao',
  data () {
    return {
      login_origem: '',
      login_destino: '',
      valor_transferido: ''
    }
  },
  methods: {
    transferir () {
      if (!this.login_origem) {
        return alert('O campo Login de Origem é obrigatório.')
      }

      if (!this.login_destino) {
        return alert('O campo Login de Destino é obrigatório.')
      }

      if (!this.valor_transferido) {
        return alert('O campo Valor da Transferência é obrigatório.')
      }

      axios
        .post('http://localhost:5000/movimentacao/transferencia', { login_origem: this.login_origem, login_destino: this.login_destino, valor_transferido: this.valor_transferido })
        .then(() => {
          alert('Transferência realizada com sucesso')
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
