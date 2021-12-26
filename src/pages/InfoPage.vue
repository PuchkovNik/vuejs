<template>
  <div class="container">
    <InfoCard/>
    <FormCard/>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import FormCard from "@/components/FormCard.vue";

export default {
  components: {FormCard, InfoCard}
}
</script>

<style scoped>
.container {
  background-color: #C9A66B;
  border-radius: 8px;
  left: 20%;
  width: 50%;
  position: fixed;
  padding: 85px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);

}
</style>
