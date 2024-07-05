export const useLoading = () =>
  useState("loading", () =>
    shallowRef({
      count: ref(60),
      intervalId: ref(),
      loading: ref(false),
    })
  );
