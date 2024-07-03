<script setup lang="ts">
import { useVModel } from "@vueuse/core";

const props = defineProps<{
  modelValue: any;
}>();
const emit = defineEmits(["update:modelValue"]);
const modelValue = useVModel(props, "modelValue", emit, {
  passive: true,
});
</script>
<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">상대적 거래량</div>
        <div class="text-neutral-500">
          {{ modelValue.relative_volume_10d_calc[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.relative_volume_10d_calc"
        :default-value="[3]"
        :max="5"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">P/E</div>
        <div class="text-neutral-500">
          {{ modelValue.price_earnings_ttm[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.price_earnings_ttm"
        :default-value="[1]"
        :max="3"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">EPS 희석 성장 TTM YoY</div>
        <div class="text-neutral-500">
          {{ modelValue.earnings_per_share_diluted_yoy_growth_ttm[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.earnings_per_share_diluted_yoy_growth_ttm"
        :default-value="[1]"
        :max="3"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">ROE</div>
        <div class="text-neutral-500">
          {{ modelValue.return_on_equity_fq[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.return_on_equity_fq"
        :default-value="[1]"
        :max="3"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">갭 %</div>
        <div class="text-neutral-500">
          {{ modelValue.gap[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.gap"
        :default-value="[1]"
        :max="5"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">볼륨변화</div>
        <div class="text-neutral-500">
          {{ modelValue.volume_change[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.volume_change"
        :default-value="[1]"
        :max="5"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">시가총액 실적 %</div>
        <div class="text-neutral-500">
          {{ modelValue.marketCap[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.marketCap"
        :default-value="[1]"
        :max="5"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">총마진</div>
        <div class="text-neutral-500">
          {{ modelValue.gross_margin_ttm[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.gross_margin_ttm"
        :default-value="[1]"
        :max="5"
        :step="1"
      />
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex justify-between">
        <div class="font-bold">영업마진</div>
        <div class="text-neutral-500">
          {{ modelValue.operating_margin_ttm[0] }}
        </div>
      </div>
      <Slider
        v-model="modelValue.operating_margin_ttm"
        :default-value="[1]"
        :max="5"
        :step="1"
      />
    </div>
  </div>
</template>
