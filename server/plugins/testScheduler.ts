//import { updateStore } from "../api/investing/[countryCode]/[exchangeCode]";
import { updateStore } from "../api/tradingview/[countryCode]";
import { useScheduler } from "#scheduler";

export default defineNitroPlugin(() => {
  //startScheduler();
  continuouslyRunTask();
});

function startScheduler() {
  const scheduler = useScheduler();

  scheduler
    .run(async () => {
      console.log("scheduler start");
      const data = await updateStore("kr");
      await insertDataToSupabase(data);
    })
    // 매분 실행하도록
    .cron("* * * * *");
}

async function continuouslyRunTask() {
  try {
    const data = await updateStore("kr");
    await insertDataToSupabase(data);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Optionally add a delay if needed
    setTimeout(continuouslyRunTask, 0); // Adjust the delay as needed
  }
}
