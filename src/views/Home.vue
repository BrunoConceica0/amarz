<template>
  <div>
    <h2>Bem vindo ao Amarzamento</h2>
    <ul>
      <li>
        <router-link :to="{ path: 'registerItems' }">Cadastro</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style></style>
