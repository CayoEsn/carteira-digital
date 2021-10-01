<template>
  <div class="sign-up">
    <p>Histórico de Transferências</p>
    <div v-for="(transferencias, index) in historico_transferencias" :key="index">
      <p> - {{ transferencias.login_origem === usuario.login ? 'Débito' : 'Crédito' }} | Data: {{ formatDate(transferencias.data) }} | Valor {{ transferencias.login_origem === usuario.login ? 'transferido' : 'recebido' }} R$ {{ formatPrice(transferencias.valor_transferido) }}</p>
    </div>
    <p v-if="historico_transferencias.length <= 0">(Nenhuma transferência)</p>
    <br />
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'historico-transferencias',
  data () {
    return {
      usuario: '',
      historico_transferencias: []
    }
  },
  mounted () {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    this.buscarHistorico()
  },
  methods: {
    buscarHistorico: function () {
      axios
        .get('http://localhost:5000/movimentacao/movimentacoes-usuario', { params: { login: this.usuario.login } })
        .then((response) => {
          this.historico_transferencias = response.data.movimentacoes
          this.historico_transferencias.reverse(function (a, b) {
            return parseFloat(a.id_transacao) - parseFloat(b.id_transacao)
          })
        })
        .catch((error) => {
          return alert(error)
        })
    },
    formatDate (value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY HH:mm:ss')
      }
    },
    formatPrice (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
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
