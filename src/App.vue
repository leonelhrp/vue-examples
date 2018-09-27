<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <h2>Eventos</h2>
    <h4>Contador: {{ count }}</h4>
    <button @click="sumar">Sumar</button>
    <button @click="restar">Restar</button>

    <h2>Filtros</h2>
    <p>Mayúscula: {{ title | uppercase }}</p>
    <p>Munúscula: {{ title | lowercase }}</p>

    <h2>Formularios - Componentes</h2>
    <form @submit.prevent="submit" action="" method="get">
      <input type="text" v-model="title"><br>
      <template v-for="tecnology in tecnologies">
        <input v-model="tecnologiesSelected" type="checkbox" :id="tecnology.value" :value="tecnology.value">
        <label :for="tecnology.value">{{ tecnology.name }}</label>
      </template>
      <button type="submit">Enviar</button>
    </form>
    <component></component>
    <h2>{{ createdBy }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Ejemplos con Vue.js',
        examples: {
          1: 'Methods',
          2: 'Filters',
          3: 'Conditionals'
        },
        count: 0,
        name: 'Leonel',
        lastname: 'Rojas',
        tecnologies: [
          {name: 'Vue.js', value: 'vue'},
          {name: 'React', value: 'react'},
          {name: 'Angular', value: 'angular'},
        ],
        tecnologiesSelected: []
      }
    },

    created() {

    },

    computed: {
      createdBy() {
        return `Creado por: ${this.name} ${this.lastname}`;
      },
    },

    methods: {
      sumar() {
        this.count++
      },

      restar() {
        this.count--
      },

      submit() {
        console.log(this.tecnologiesSelected)
      }
    },

    filters: {
      uppercase(str) {
        return str.toUpperCase()
      },

      lowercase(str) {
        return str.toLowerCase()
      },

    }

  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

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
