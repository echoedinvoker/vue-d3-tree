<template>
  <Header />
  <Graph />
  <Modal ref="modalRef">
    <Form />
  </Modal>
  <AddButton @click="modalRef?.open" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue'
import AddButton from './features/employee/AddButton.vue'
import Form from './features/employee/Form.vue'
import Graph from './features/tree/Graph.vue';

const modalRef = ref(null)
</script>

