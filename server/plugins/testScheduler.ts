import { updateStore } from "../api/investing/[countryCode]/[exchangeCode]";
import { useScheduler } from "#scheduler";

export default defineNitroPlugin(() => {
  startScheduler();
});

function startScheduler() {
  const scheduler = useScheduler();

  scheduler
    .run(async () => {
      console.log("scheduler start");
      const data = await updateStore("kr", "60");
      await insertDataToSupabase(data);
    })
    // 매분 실행하도록
    .cron("* * * * *");
}
