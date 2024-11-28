export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    authStore.initializeAuth();

    if (to.path.startsWith('/admin') && !authStore.isAdmin) {
        return navigateTo('/');
    }
});