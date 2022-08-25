<template>
    <h1>Welcome!</h1>
    <p>I am very happy that you want comunicate with me!</p><br>
    <div class="forms">
      <form action="" method="post">
        <p>Name:</p>
          <input type="text" name="name" class="form-control"><br>
        <p>Email:</p>
          <input type="text" name="email" class="form-control">
        <label for="case">Message: <br>
          <textarea name="textarea" id="" cols="30" rows="10">
          </textarea>
        </label>
        <input type="submit" title="Send" value="send">
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentForm',
});
</script>
