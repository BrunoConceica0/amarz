<template>
  <section>
    <div class="">
      <p>Adicionar Item</p>

      <input v-model="newItem" type="text" placeholder="Item" />
      <button type="button" class="btn_home" @click="addItem">
        Adicionar item
      </button>
      <div v-for="(item, index) in items" :key="index">
        <ul>
          <li>
            {{ item }}
            <button @click="OpenModal(item, index)">Remover</button>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="boxModal" class="question_modal">
      <div class="question-modal-container">
        <p>
          Excluir este item: <strong>{{ itenToRemove }} </strong>?
        </p>
        <button type="button" @click="confrimRemove">Sim</button>
        <button type="button" @click="boxModal = false">Não</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      newItem: "",
      boxModal: false,
      itenToRemove: null,
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
    removeItem(item, index) {
      this.REMOVE_ITEM(item, index);
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
    confrimRemove() {
      if (this.itenToRemove !== null) {
        this.REMOVE_ITEM(this.itenToRemove);
        this.boxModal = false;
      }
    },
    OpenModal(index) {
      this.itenToRemove = index;
      this.boxModal = true;
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

<style>
.question_modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.question-modal-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: show 0.5s ease-in-out;
}
.question-modal-container p {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 20px;
  color: #007bff;
  border-radius: 4px;
}
.question-modal-container button {
  margin: 5px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: #fff;
  cursor: pointer;
}
.question_modal strong {
  color: red;
  font-weight: 600;
  font-size: 1.2rem;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(30px, 0, 0);
  }
}
</style>
