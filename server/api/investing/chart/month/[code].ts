import { investingChartFetch } from "../../../utils/index";
export default defineEventHandler(async (event) => {
    const code = getRouterParam(event, "code");
    const result = await investingChartFetch({
        code: String(code),
        interval: 'PT5H',
        period: 'P1M',
    });
    return result;
});
