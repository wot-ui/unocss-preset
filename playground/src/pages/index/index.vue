<template>
  <view class="page-shell" :class="dark ? 'wot-theme-dark' : ''">
    <view class="hero-card w-bg-filled-oppo w-rounded-2xl w-p-super-loose w-border-border-main w-border-stroke-main">
      <view class="hero-top">
        <view>
          <text class="w-text-title-large w-text-text-main w-font-semibold">Wot UI UnoCSS Preset</text>
          <view class="hero-copy w-mt-tight">
            <text class="w-text-body-main w-text-text-secondary">在 uni-app Vue 3 里验证主题变量、语义色、间距、圆角和排版映射。</text>
          </view>
        </view>
        <view class="theme-toggle w-bg-feedback-hover w-rounded-full w-p-tight">
          <text class="w-text-label-large w-text-text-secondary">暗色模式</text>
          <switch :checked="dark" color="var(--wot-primary-6)" @change="onThemeChange" />
        </view>
      </view>

      <view class="chip-row w-mt-loose">
        <view class="chip w-bg-primary w-rounded-full w-px-main w-py-extra-tight">
          <text class="w-text-label-large w-text-text-white w-font-semibold">w-bg-primary</text>
        </view>
        <view class="chip w-bg-success-surface w-rounded-full w-px-main w-py-extra-tight w-border-success-main w-border-stroke-main">
          <text class="w-text-label-large w-text-success-main">w-text-success-main</text>
        </view>
        <view class="chip w-bg-warning-surface w-rounded-full w-px-main w-py-extra-tight w-border-warning-main w-border-stroke-main">
          <text class="w-text-label-large w-text-warning-main">w-border-warning-main</text>
        </view>
      </view>
    </view>

    <view class="section-grid w-mt-super-loose">
      <view class="demo-card w-bg-filled-oppo w-rounded-xl w-p-loose">
        <text class="w-text-label-large w-text-text-secondary">Typography</text>
        <view class="demo-stack w-mt-main">
          <text class="w-text-title-main w-text-text-main w-font-semibold">标题字号与字重</text>
          <text class="w-text-body-main w-text-text-secondary">正文尺寸使用 typography token，直接映射到字体大小和行高。</text>
          <text class="w-text-label-large w-text-text-auxiliary">标签尺寸适合表单与状态信息。</text>
        </view>
      </view>

      <view class="demo-card w-bg-filled-oppo w-rounded-xl w-p-loose">
        <text class="w-text-label-large w-text-text-secondary">Spacing & Radius</text>
        <view class="demo-stack w-mt-main">
          <view class="swatch swatch-primary w-rounded-lg w-p-main">
            <text class="w-text-label-large w-text-text-white">w-rounded-lg + w-p-main</text>
          </view>
          <view class="swatch swatch-subtle w-rounded-3xl w-p-extra-loose">
            <text class="w-text-label-large w-text-text-main">w-rounded-3xl + w-p-extra-loose</text>
          </view>
        </view>
      </view>

      <view class="demo-card w-bg-filled-oppo w-rounded-xl w-p-loose">
        <text class="w-text-label-large w-text-text-secondary">Semantic Colors</text>
        <view class="color-list w-mt-main">
          <view class="color-row">
            <view class="color-dot w-bg-danger-main w-rounded-full"></view>
            <text class="w-text-body-main w-text-text-main">danger-main</text>
          </view>
          <view class="color-row">
            <view class="color-dot w-bg-success-main w-rounded-full"></view>
            <text class="w-text-body-main w-text-text-main">success-main</text>
          </view>
          <view class="color-row">
            <view class="color-dot w-bg-classify-purple-content w-rounded-full"></view>
            <text class="w-text-body-main w-text-text-main">classify-purple-content</text>
          </view>
        </view>
      </view>
    </view>

    <view class="footer-note w-mt-super-loose w-bg-filled-oppo w-rounded-xl w-p-loose">
      <text class="w-text-body-main w-text-text-secondary">当前主题：</text>
      <text class="w-text-body-main w-text-primary w-font-semibold">{{ dark ? 'Dark' : 'Light' }}</text>
      <text class="w-text-body-main w-text-text-secondary">，透明度 token 示例：</text>
      <text class="w-text-body-main w-text-text-main w-opacity-disabled">w-opacity-disabled</text>
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
