<template>
  <section class="form_register">
    <h2>Cadastro</h2>
    <button type="button" class="btn_home" @click="$router.push({ path: '/' })">
      Voltar para Home
    </button>
    <form class="form_contaiber">
      <label name="name">Nome</label>
      <input type="text" name="" id="" placeholder="Digite seu nome" />

      <label for="email" name="email" id="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu email"
        required
      />

      <label for="password" name="password" id="password">Senha</label>
      <input
        type="text"
        id="password"
        name="password"
        minlength="8"
        maxlength="20"
        required
      />

      <input type="submit" value="Enviar" class="form_submit" />
    </form>
  </section>
</template>

<script>
export default {
  name: "RegisterComponenet",
};
</script>

<style>
.form_register {
  display: grid;
  grid-template-columns: 1fr 200px;
  max-width: 1440px;
}
.form_contaiber {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: auto;
}

.form_contaiber input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form_submit {
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: start;
}

.form_submit:hover {
  background-color: #0056b3;
}
.btn_home {
  display: inline-block;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: start;
  padding: 8px;
  margin-top: 10px;
}
</style>
