<template>
    <q-card-section>
      <div>
        <q-checkbox v-model="localTodo.completed" @update:model-value="updateTodo"/>
        <span>{{ localTodo.title }}</span>
        <q-btn label="Delete" color="negative" @click="deleteTodo"/>
      </div>
    </q-card-section>
  <q-separator />
</template>

<script setup>
import {ref, watch} from 'vue';


const props = defineProps({
  todo: Object
});
const emits = defineEmits(['update', 'delete']);

const localTodo = ref({...props.todo});

const updateTodo = () => {
  emits('update', localTodo.value);
};

watch(() => props.todo, (newVal) => {
  localTodo.value = {...newVal};
});


const deleteTodo = () => {
  emits('delete', localTodo.value.id);
};
</script>
