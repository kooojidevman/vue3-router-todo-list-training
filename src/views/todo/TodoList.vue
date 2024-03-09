<script setup lang="ts">
import type { Todo } from '../../interfaces'
import { inject } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const todoList = inject('todoList') as Map<number, Todo>

const onClickButtonToEdit = (todoId: number): void => {
  router.push({ name: 'TodoEdit', params: { id: todoId } })
}
const onClickButtonToDelete = (todoId: number): void => {
  router.push({ name: 'TodoDelete', params: { id: todoId } })
}
</script>

<template>
  <section style="text-align: center">
    <h1 style="margin: 20px 0">TODOリスト</h1>
    <input type="text" class="text-gray-900" />
    <ul style="text-align: center; margin-bottom: 20px">
      <li v-for="[id, todo] in todoList" v-bind:key="id">
        <RouterLink v-bind:to="{ name: 'TodoDetail', params: { id: id } }">
          ID:{{ id }} {{ todo.title }}
        </RouterLink>
        <button
          type="button"
          class="bg-gradient-to-r from-blue-100 to-blue-800 hover:bg-gradient-to-l text-white rounded px-4 py-2"
          v-on:click="onClickButtonToEdit(id)"
        >
          編集
        </button>
        <button
          type="button"
          class="bg-gradient-to-b from-red-300 to-red-800 hover:bg-gradient-to-l text-white rounded px-4 py-2"
          v-on:click="onClickButtonToDelete(id)"
        >
          削除
        </button>
      </li>
    </ul>
  </section>
</template>
