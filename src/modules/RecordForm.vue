<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field v-model="form.fname" label="First Name" required />
    <v-text-field v-model="form.lname" label="Last Name" required />
    <v-text-field v-model="form.email" label="Email Address" required type="email" />
    <v-text-field v-model="form.note" label="Note" required type="text" />
    <v-btn color="success" type="submit" class="me-2">
      {{ isUpdate ? 'Update' : 'Create' }}
    </v-btn>
    <router-link to="/" class="btn btn-flat">Cancel</router-link>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { fetchEntries, saveEntries } from '../utils/localDb'

const props = defineProps({
  existing: Object,
  isUpdate: Boolean
})

const form = ref(props.existing || {
  uuid: Date.now().toString(),
  fname: '',
  lname: '',
  email: '',
  note:''
})

const router = useRouter()

function handleSubmit() {
  let data = fetchEntries()

  if (props.isUpdate) {
    const idx = data.findIndex(x => x.uuid === form.value.uuid)
    data[idx] = form.value
  } else {
    data.push(form.value)
  }

  saveEntries(data)
  router.push(`/person/${form.value.uuid}`)
}
</script>
