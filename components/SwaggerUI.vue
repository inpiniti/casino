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

    // 두 번째 Swagger UI 인스턴스
    SwaggerUIStandalonePreset({
      url: "https://petstore.swagger.io/v2/swagger.json",
      dom_id: "#swagger-ui-2",
      presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
      layout: "StandaloneLayout",
    });
  };

  initSwagger();
});
</script>

<template>
  <Tabs default-value="account">
    <TabsList>
      <TabsTrigger value="account"> Account </TabsTrigger>
      <TabsTrigger value="password"> Password </TabsTrigger>
    </TabsList>
    <TabsContent value="account"> <div id="swagger-ui"></div> </TabsContent>
    <TabsContent value="password"> <div id="swagger-ui-2"></div> </TabsContent>
  </Tabs>
</template>
