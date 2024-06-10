export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path == "/") {
    return navigateTo("/stock/kr");
  }
});
