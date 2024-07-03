import { getKoreaTime } from "../utils/index";
import { investingFetchAll } from "../utils/index";
const appConfig = useAppConfig();
const codeList: any = appConfig.codeList;

let store: any = {};
let isUpdating = false; // 플래그를 추가

export default defineEventHandler(async (event) => {
  const countryCode = getRouterParam(event, "countryCode");

  return await getCurrentStoer(String(countryCode));
});

export const getCurrentStoer = async (countryCode: string) => {
  const currentStore = store?.[String(countryCode)] ?? [];
  if (!isUpdating) {
    (async () => {
      console.log(`[${getKoreaTime()}] investing`);
      // updateStore가 실행 중이지 않을 때만 호출
      updateStore(String(countryCode));
      console.log(`[${getKoreaTime()}] investing return`);
    })();
  }
  return currentStore;
};

async function updateStore(countryCode: string) {
  isUpdating = true; // updateStore가 실행 중임을 표시
  try {
    store[countryCode] = await investingFetchAll(
      codeList[countryCode].countryId
    );
  } finally {
    isUpdating = false; // updateStore가 완료되었음을 표시
  }
}
