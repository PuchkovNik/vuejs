<template>
  <div class="form">
<!--    <img src="" width="200" height="280"/>-->
    <h1 class="Second_Name">Who are you?</h1>
    <form action="" method="POST">
      <div class="Forms">
        <div class="Name">
          <label for="user_name">Enter your name: </label>
          <input type="text" placeholder="Your name" maxlength="10" id="user_name"><br/><br/>
        </div>
        <div class="Email">
          <label for="user_email">Enter your email:</label>
          <input type="email" placeholder="Your email" id="user_email">
          <br/><br/>
        </div>
        <div class="Comment">
          <label for="user_comment">Enter your Comments:</label>
          <input type="text" placeholder="comments" id="user_comment">
          <br/><br/>
        </div>
      </div>
      <div class="Submit">
        <input type="submit" value="Submit"/>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormCard"
}
</script>


<style scoped>
</style>

