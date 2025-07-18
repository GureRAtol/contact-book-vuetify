const STORAGE_ID = 'records'

export function fetchEntries() {
    return JSON.parse(localStorage.getItem(STORAGE_ID)) || []
}

export function saveEntries(data) {
    localStorage.setItem(STORAGE_ID, JSON.stringify(data))
}

export function getEntry(id) {
    return fetchEntries().find(i => i.uuid === id)
}
