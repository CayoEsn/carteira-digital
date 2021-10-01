<template>
  <div class="hello">

    <h2>Bem-Vindo {{ usuario.nome }}</h2>
    <h4>Seu saldo é de: R$ {{ formatPrice(saldo) }}</h4>

    <button @click='sair'>Sair</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      usuario: '',
      saldo: 0
    }
  },
  mounted () {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    this.buscarSaldo()
  },
  methods: {
    sair: function () {
      localStorage.removeItem('login')
      this.$router.replace('login')
    },
    buscarSaldo: function () {
      axios
        .get('http://localhost:5000/saldo/saldo-usuario', { params: { login: this.usuario.login } })
        .then((response) => {
          this.saldo = response.data.saldo
        })
        .catch((error) => {
          return alert(error)
        })
    },
    formatPrice (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
