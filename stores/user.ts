import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const STORE_NAME = 'settings'

export const useUserStore = defineStore('user', {
    state: () => ({
        email: '',
    }),
    actions: {
        setEmail(email) {
            this.email = email
        }
    },
})
