<script lang="ts">
import {defineComponent} from 'vue';

const DEMON_HP = 35;
const HIT_POINTS_PER_PIT_LORD = 50;

export default defineComponent({
  data: function () {
    return {
      pitLords: 1,
    }
  },
  methods: {
    availableDemons(): number {
      return Math.floor(this.pitLords * HIT_POINTS_PER_PIT_LORD / DEMON_HP);
    },
    needHp(): number {
      return this.availableDemons() * DEMON_HP;
    }
  },
});
</script>

<template>
  <div class="row">
    <div class="col-1">
      <input type="number" class="form-control form-control-sm" v-model="pitLords">
      <div class="badge bg-white text-dark d-block mt-1">{{ availableDemons() }} demons</div>
      <div class="badge bg-success d-block mt-1">{{ needHp() }} need HP</div>
    </div>
  </div>
</template>
