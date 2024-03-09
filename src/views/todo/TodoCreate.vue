<script setup lang="ts">
import type { Todo } from '../../interfaces'
import { inject, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const todoList = inject('todoList') as Map<number, Todo>
const maxId = Math.max(...Array.from(todoList.keys()))
const newTodo = reactive({
  id: maxId ? maxId + 1 : 1,
  title: '',
  content: ''
})

const onCreate = (): void => {
  console.log(newTodo)
  todoList.set(newTodo.id, newTodo)
  router.push({ name: 'TodoList' })
}
</script>

<template>
  <section style="text-align: center">
    <h1 style="margin: 20px 0">TODO新規作成</h1>
    <form v-on:submit.prevent="onCreate">
      <dt>
        <label for="addTitle">タイトル&nbsp;</label>
      </dt>
      <dd>
        <input type="text" id="addTitle" v-model="newTodo.title" required />
      </dd>
      <dt>
        <label for="addContent">本文&nbsp;</label>
      </dt>
      <dd>
        <textarea id="addCopntent" v-model="newTodo.content"></textarea>
      </dd>
      <button style="margin-top: 20px">保存</button>
    </form>
  </section>
</template>
