<template>
  <v-container>
    <h2 class="text-center">Update Details</h2>
    <RecordForm :existing="entry" :isUpdate="true" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getEntry } from '../utils/localDb'
import RecordForm from '../modules/RecordForm.vue'

const route = useRoute()
const entry = ref(getEntry(route.params.pid))
</script>
