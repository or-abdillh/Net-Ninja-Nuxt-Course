import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

export default defineNuxtPlugin( (nuxtApp) => {
    
    // init notyf
    const notyf = new Notyf()

    // regiter as global method
    nuxtApp.provide('notyfError', (msg: string) => notyf.error(msg))
    nuxtApp.provide('notyfSuccess', (msg: string) => notyf.success(msg))
})