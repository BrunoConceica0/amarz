<template>
  <div>
    <h2>Login</h2>
    <section class="login">
      <form class="login-form">
        <label name="name">Seu nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          v-model="name"
        />

        <label name="password">Sua senha</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          v-model="password"
        />
        <button type="button" class="login-btn" @click="authentication">
          Logar
        </button>
        <p>
          Cadastre
          <router-link :to="{ path: 'Register' }">Aqui</router-link>
        </p>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    authentication() {
      const user = {
        name: this.name,
        password: this.password,
      };
      this.$store.dispatch("authentication", user);
    },
  },
};
</script>

<style>
.login {
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 500px;
  margin: 0 auto;
  background: red;
  justify-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
}
.login-form input {
  display: inline-block;
  padding: 8px 15px;
  margin: 7px 0;
}
.login-btn {
  display: inline;
  padding: 8px 15px;
  margin: 7px 0;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  align-self: start;
}
</style>
