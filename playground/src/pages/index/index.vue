<template>
  <view class="page-shell" :class="dark ? 'wot-theme-dark' : ''">
    <view class="hero-card wot-bg-filled-oppo wot-rounded-2xl wot-p-super-loose wot-border-border-main wot-border-stroke-main">
      <view class="hero-top">
        <view>
          <text class=" wot-text-title-large wot-text-text-main wot-font-semibold">Wot UI UnoCSS Preset</text>
          <view class="hero-copy wot-mt-tight">
            <text class="wot-text-body-main wot-text-text-secondary">在 uni-app Vue 3 里验证主题变量、语义色、间距、圆角和排版映射。</text>
          </view>
        </view>
        <view class="theme-toggle wot-bg-feedback-hover wot-rounded-full wot-p-tight">
          <text class="wot-text-label-large wot-text-text-secondary">暗色模式</text>
          <switch :checked="dark" color="var(--wot-primary-6)" @change="onThemeChange" />
        </view>
      </view>

      <view class="chip-row wot-mt-loose">
        <view class="chip wot-bg-primary wot-rounded-full wot-px-main wot-py-extra-tight">
          <text class="wot-text-label-large wot-text-text-white wot-font-semibold">wot-bg-primary</text>
        </view>
        <view class="chip wot-bg-success-surface wot-rounded-full wot-px-main wot-py-extra-tight wot-border-success-main wot-border-stroke-main">
          <text class="wot-text-label-large wot-text-success-main">wot-text-success-main</text>
        </view>
        <view class="chip wot-bg-warning-surface wot-rounded-full wot-px-main wot-py-extra-tight wot-border-warning-main wot-border-stroke-main">
          <text class="wot-text-label-large wot-text-warning-main">wot-border-warning-main</text>
        </view>
      </view>
    </view>

    <view class="section-grid wot-mt-super-loose">
      <view class="demo-card wot-bg-filled-oppo wot-rounded-xl wot-p-loose">
        <text class="wot-text-label-large wot-text-text-secondary">Typography</text>
        <view class="demo-stack wot-mt-main">
          <text class="wot-text-title-main wot-text-text-main wot-font-semibold">标题字号与字重</text>
          <text class="wot-text-body-main wot-text-text-secondary">正文尺寸使用 typography token，直接映射到字体大小和行高。</text>
          <text class="wot-text-label-large wot-text-text-auxiliary">标签尺寸适合表单与状态信息。</text>
        </view>
      </view>

      <view class="demo-card wot-bg-filled-oppo wot-rounded-xl wot-p-loose">
        <text class="wot-text-label-large wot-text-text-secondary">Spacing & Radius</text>
        <view class="demo-stack wot-mt-main">
          <view class="swatch swatch-primary wot-rounded-lg wot-p-main">
            <text class="wot-text-label-large wot-text-text-white">wot-rounded-lg + wot-p-main</text>
          </view>
          <view class="swatch swatch-subtle wot-rounded-3xl wot-p-extra-loose">
            <text class="wot-text-label-large wot-text-text-main">wot-rounded-3xl + wot-p-extra-loose</text>
          </view>
        </view>
      </view>

      <view class="demo-card wot-bg-filled-oppo wot-rounded-xl wot-p-loose">
        <text class="wot-text-label-large wot-text-text-secondary">Semantic Colors</text>
        <view class="color-list wot-mt-main">
          <view class="color-row">
            <view class="color-dot wot-bg-danger-main wot-rounded-full"></view>
            <text class="wot-text-body-main wot-text-text-main">danger-main</text>
          </view>
          <view class="color-row">
            <view class="color-dot wot-bg-success-main wot-rounded-full"></view>
            <text class="wot-text-body-main wot-text-text-main">success-main</text>
          </view>
          <view class="color-row">
            <view class="color-dot wot-bg-classify-purple-content wot-rounded-full"></view>
            <text class="wot-text-body-main wot-text-text-main">classify-purple-content</text>
          </view>
        </view>
      </view>
    </view>

    <view class="footer-note wot-mt-super-loose wot-bg-filled-oppo wot-rounded-xl wot-p-loose">
      <text class="wot-text-body-main wot-text-text-secondary">当前主题：</text>
      <text class="wot-text-body-main wot-text-primary wot-font-semibold">{{ dark ? 'Dark' : 'Light' }}</text>
      <text class="wot-text-body-main wot-text-text-secondary">，透明度 token 示例：</text>
      <text class="wot-text-body-main wot-text-text-main wot-opacity-disabled">wot-opacity-disabled</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dark = ref(false);

function onThemeChange(event: any) {
  dark.value = Boolean(event?.detail?.value);
}
</script>

<style>
.page-shell {
  min-height: 100vh;
  padding: 48rpx 32rpx 80rpx;
  background: var(--wot-filled-bottom);
}

.hero-card,
.demo-card,
.footer-note {
  box-shadow: 0 20rpx 50rpx rgba(16, 24, 40, 0.08);
}

.hero-top {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.hero-copy {
  max-width: 60ch;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24rpx;
}

.chip-row,
.demo-stack,
.color-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24rpx;
}

.chip {
  align-self: flex-start;
}

.swatch {
  display: flex;
  align-items: center;
}

.swatch-primary {
  background: var(--wot-primary-6);
}

.swatch-subtle {
  background: var(--wot-feedback-hover);
}

.color-row {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.color-dot {
  width: 28rpx;
  height: 28rpx;
}

@media (min-width: 960px) {
  .hero-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .section-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
