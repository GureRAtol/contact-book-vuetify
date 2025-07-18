<template>
  <v-container v-if="person">
    <v-card class="pa-5" elevation="4">
      <v-row align="center" class="mb-4">
        <v-col cols="12" sm="4">
          <v-avatar size="90" color="blue-darken-2">
            <span class="white--text text-h4">
              {{ person.fname.charAt(0) }}{{ person.lname.charAt(0) }}
            </span>
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="8">
          <div class="text-h5 font-weight-bold">
            {{ person.fname }} {{ person.lname }}
          </div>
          <div class="text-body-1 text-grey-darken-2">
            {{ person.email }}
          </div>
        </v-col>
      </v-row>
      <v-row align="center" class="mb-4">
        <v-col cols="12" sm="8">
          <div class="text-body-1 text-grey-darken-2">
            {{ person.note }} 
          </div>
        </v-col>
      </v-row>
      <v-divider class="mb-4"></v-divider>

      <v-btn
        color="primary"
        class="me-2"
        :to="`/modify/${person.uuid}`"
      >
        Edit
      </v-btn>

      <v-btn
        color="error"
        class="me-2"
        @click="removePerson"
      >
        Remove
      </v-btn>

      <v-btn
        color="grey"
        :to="`/`"
      >
        Go Back
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import {  ref } from 'vue'
import { fetchEntries, saveEntries, getEntry } from '../utils/localDb'

const route = useRoute()
const router = useRouter()
const person = ref(getEntry(route.params.pid))

function removePerson() {
  const all = fetchEntries().filter(p => p.uuid !== person.value.uuid)
  saveEntries(all)
  router.push('/')
}
</script>
