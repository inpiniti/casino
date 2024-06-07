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
  <div id="swagger-ui"></div>
</template>
