<script setup lang="ts">
import type { Todo } from '../../interfaces'
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const todoList = inject('todoList') as Map<number, Todo>
</script>

<template>
  <section style="text-align: center">
    <h1 style="margin: 20px 0">TODOリスト</h1>
    <input type="text" />
    <div style="text-align: center">
      <ul>
        <li v-for="[id, todo] in todoList" v-bind:key="id">
          <RouterLink v-bind:to="{ name: 'TodoDetail', params: { id: id } }">
            ID:{{ id }} {{ todo.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
