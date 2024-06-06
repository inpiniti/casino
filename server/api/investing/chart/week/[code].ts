import { investingChartFetch } from "../../../utils/index";
export default defineEventHandler(async (event) => {
    const code = getRouterParam(event, "code");
    const result = await investingChartFetch({
        code: String(code),
        interval: 'PT30M',
        period: 'P1W',
    });
    return result;
});
