import { describe, expect, it } from "vitest";
import { setup, $fetch, isDev } from "@nuxt/test-utils";

describe("getColorClass", async () => {
  it("5를 넣었을때, 라임100 hover:라임150 을 리턴해야 한다.", () => {
    const caseNumber = 5;
    const result = getColorClass(caseNumber);
    console.log(result);
    expect(result).toBe("bg-lime-100 hover:bg-lime-150");
  });

  it("20를 넣었을때, 엠버100 hover:엠버150 을 리턴해야 한다.", () => {
    const caseNumber = 20;
    const result = getColorClass(caseNumber);
    console.log(result);
    expect(result).toBe("bg-amber-200 hover:bg-amber-250");
  });
});
