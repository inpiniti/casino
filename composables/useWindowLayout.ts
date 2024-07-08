// 레이아웃
export const useWindowLayout = () =>
  useState("windowLayout", () => {
    return {
      layout: "full",
      interest: false,
    };
  });
