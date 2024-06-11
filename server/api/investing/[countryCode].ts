import { investingFetch } from "../utils/index";
const appConfig = useAppConfig();
const codeList: any = appConfig.codeList;

let store: any = null;
let isUpdating = false; // 플래그를 추가

export default defineEventHandler(async (event) => {
  const countryCode = getRouterParam(event, "countryCode");

  const currentStore = store;
  if (!isUpdating) {
    // updateStore가 실행 중이지 않을 때만 호출
    updateStore(String(countryCode));
  }
  return currentStore;
});

async function updateStore(countryCode: string) {
  isUpdating = true; // updateStore가 실행 중임을 표시
  try {
    store = await investingFetch(codeList[countryCode].countryId, codeList[countryCode].pageSize);
  } finally {
    isUpdating = false; // updateStore가 완료되었음을 표시
  }
}
