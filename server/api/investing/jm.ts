import { investingFetch } from "../utils/index";

let store: any = null;
let isUpdating = false; // 플래그를 추가

export default defineEventHandler(async (event) => {
  const currentStore = store;
  if (!isUpdating) {
    // updateStore가 실행 중이지 않을 때만 호출
    updateStore();
  }
  return currentStore;
});

async function updateStore() {
  isUpdating = true; // updateStore가 실행 중임을 표시
  try {
    store = await investingFetch(119, 83);
  } finally {
    isUpdating = false; // updateStore가 완료되었음을 표시
  }
}
