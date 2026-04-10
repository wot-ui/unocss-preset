<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("Wot preset playground launch");
});
onShow(() => {
  console.log("Wot preset playground show");
});
onHide(() => {
  console.log("Wot preset playground hide");
});
</script>
<style>
page {
  background: var(--wot-filled-bottom);
}
</style>
