<script setup lang="ts">
onMounted(async () => {
  const { default: SwaggerUI } = await import("swagger-ui");
  const { default: SwaggerUIStandalonePreset } = await import("swagger-ui/dist/swagger-ui-standalone-preset");

  const initSwagger = () => {
    SwaggerUI({
      url: "/swagger.json",
      dom_id: "#swagger-ui",
      presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
      layout: "StandaloneLayout",
    });
  };

  initSwagger();
});
</script>

<template>
  https://petstore.swagger.io/v2/swagger.json
  <div id="swagger-ui"></div>
</template>
