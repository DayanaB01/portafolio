<template>
    <div class="forms">
    <h1>Welcome!</h1>
    <p>I am very happy that you want comunicate with me!!</p>
      <form action="https://formspree.io/f/xyyvzpvb" method="post">
        <span>Name:</span>
          <input type="text" name="name" class="form-control">
        <span>Email:</span>
          <input type="text" name="email" class="form-control">
        <label for="case">Message: <br>
          <textarea name="textarea" id="" cols="30" rows="10">
          </textarea>
        </label><br><br>
        <button type="submit">Send</button>
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentForm',
});
</script>
