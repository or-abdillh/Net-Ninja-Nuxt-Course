export default defineNuxtRouteMiddleware(async (to, from) => {

    //get sesion
    const { session } = await useSession()

    const isAuthentticated: boolean = session.value?.auth ? true : false

    // try access page without authentication
    if (to.name !== 'login' && !isAuthentticated) {
        return navigateTo('/login')
    }
})
