<template>
  <div class="container">
    <InfoCard/>
    <FormCard/>
  </div>
</template>


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
<script>
import InfoCard from "@/components/InfoCard";
import FormCard from "@/components/FormCard";

export default {
  components: {FormCard, InfoCard}
}
</script>