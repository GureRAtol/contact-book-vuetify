<template>
  <v-container>
    <v-text-field
      v-model="searchKey"
      label="Find Contact"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      class="mb-6"
    />

    <v-row>
      <v-col
        v-for="entry in sortedContacts"
        :key="entry.uuid"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          :to="`/person/${entry.uuid}`"
          link
          class="pa-3"
          elevation="3"
        >
          <v-avatar size="56" class="mb-3" color="indigo">
            <span class="white--text text-h6">
              {{ entry.fname.charAt(0) }}{{ entry.lname.charAt(0) }}
            </span>
          </v-avatar>

          <div class="text-subtitle-1 font-weight-medium">
            {{ entry.fname }} {{ entry.lname }}
          </div>
          <div class="text-caption text-grey-darken-1">
            {{ entry.email }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { fetchEntries } from '../utils/localDb'

const searchKey = ref('')
const contactList = ref(fetchEntries())

const sortedContacts = computed(() =>
  contactList.value
    .filter(entry =>
      (entry.fname + entry.lname).toLowerCase().includes(searchKey.value.toLowerCase())
    )
    .sort((a, b) => a.lname.localeCompare(b.lname))
)
</script>
