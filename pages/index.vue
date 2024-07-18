<script setup>
const todoValue = ref("");
const todos = ref([]);

const addTodo = () => {
  if (checkIfInputHasEmpty()) {
    todos.value.push({
      todo: todoValue.value,
      status: false,
    });
  }
};

const checkIfInputHasEmpty = () => {
  if (todoValue.value.length > 3) {
    return true;
  }

  return false;
};
</script>

<template>
  <div>
    <div class="w-1/3 space-y-4 mt-2">
      <form
        @submit.prevent="addTodo()"
        class=""
      >
        <label for="add-element">
          Ajouter un élément
        </label>
        <div class="flex gap-x-4">
          <input
            type="text"
            placeholder="tape moi ce que tu veux pour tes courses"
            v-model="todoValue"
            id="add-element"
            class="w-full"
          >
          <button
            :disabled="!checkIfInputHasEmpty()"
            type="submit"
            class="border p-4 border-gray-500 disabled:bg-zinc-300 disabled:cursor-not-allowed"
          >
            Ajouter
          </button>
        </div>
      </form>
      <div>
        <p>Ma liste de toto :</p>
        <ul class="text-lg space-y-2">
          <li
            v-for="(todo, index) in todos"
            :key="index"
            class="flex items-center gap-x-4"
          >
            <input
              type="checkbox"
              v-model="todo.status"
              :id="index"
            >
            <label
              :for="index"
              :class="todo.status && 'line-through'"
            >
              {{ todo.todo }}
            </label>
          </li>
        </ul>
      </div>
      <div>
        <pre class="mt-32">
          {{ todos }}
        </pre>
      </div>
    </div>
  </div>
</template>