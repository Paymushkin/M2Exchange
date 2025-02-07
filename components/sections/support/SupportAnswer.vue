<template>
  <div class="support-answer">
    <h2 class="text-xl font-semibold lg:mb-6 mb-4">{{ answer.title }}</h2>

    <div class="lg:mb-6 mb-4 text-sm" v-if="answer.description">
      <p>{{ answer.description }}</p>
    </div>

    <div class="steps-list" v-if="answer.steps">
      <div v-for="(step, index) in answer.steps" :key="index" class="lg:mb-4 mb-2">
        <div class="flex items-start gap-3">
          <div class="step-number">{{ index + 1 }}.</div>
          <div>
            <div class="step-text text-sm">{{ step.text }}</div>
            <ul v-if="step.bullets" class="ml-6 mt-3 list-disc">
              <li v-for="(bullet, idx) in step.bullets"
                  :key="idx"
                  class="mb-2 text-sm">
                {{ bullet }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="tips mt-8" v-if="answer.tips">
      <h3 class="font-semibold mb-4 text-sm">Советы:</h3>
      <ul class="list-disc ml-6">
        <li v-for="(tip, index) in answer.tips"
            :key="index"
            class="text-sm mb-2">
          {{ tip }}
        </li>
      </ul>
    </div>

    <div class="footer mt-6 text-sm" v-if="answer.footer">
      <p>{{ answer.footer }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  answer: {
    type: Object,
    required: true
  }
})
</script>
