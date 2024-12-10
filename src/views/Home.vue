<template>
  <section>
    <p>Adicionar Item</p>

    <input v-model="newItem" type="text" placeholder="Item" />
    <button type="button" class="btn_home" @click="addItem">
      Adicionar item
    </button>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remover</button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      newItem: "",
    };
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    ...mapMutations(["ADD_ITEM", "REMOVE_ITEM"]),
    addItem() {
      if (this.newItem.trim() !== "") {
        this.ADD_ITEM(this.newItem);
        this.newItem = "";
      } else {
        alert("Por favor, insira um item válido.");
      }
    },
    removeItem(index) {
      this.REMOVE_ITEM(index);
    },
    saveItemsToLocalStorage() {
      window.localStorage.setItem("items", JSON.stringify(this.items));
    },
    loadItemsFromLocalStorage() {
      const savedItems = JSON.parse(window.localStorage.getItem("items")) || [];
      savedItems.forEach((item) => {
        this.ADD_ITEM(item);
      });
    },
  },
  watch: {
    items: {
      handler() {
        this.saveItemsToLocalStorage();
      },
      deep: true,
    },
  },
  created() {
    this.loadItemsFromLocalStorage();
  },
};
</script>

<style></style>
