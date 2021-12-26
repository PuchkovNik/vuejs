<template>
  <form @submit.prevent="onFormSubmit" class="registration-form">
    <div class="form-field">
      <label for="login">login*</label>
      <input v-model="login" id="login" type="text" required/>
    </div>
    <div class="form-field">
      <label for="password">password*</label>
      <input v-model="password" id="password" type="text" required/>
    </div>
    <button class="submit-btn" type="submit">Регистрация</button>
    <div class="action-link">
      <span>Уже есть аккаунт?</span>
      <a @click="redirect" class="link-btn">Войти</a>
    </div>
  </form>
</template>

<script>
//import {doRegistration} from '@/netClient/todoService';
import {doRegistration} from "@/netClient/authService";

export default {
  name: "RegistrationPage",
  data: () => ({
    login: '',
    password: '',
  }),
  async mounted() {
  },
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegistration(
            this.login.trim(),
            //this.email.trim(),
            this.password.trim())
        console.warn({data});
      } catch (error) {
        console.error({error});
      }
      this.$router.push('/')
    },
    redirect() {
      this.$router.push('/login')
    }
  }
}
</script>


<style scoped>
</style>

