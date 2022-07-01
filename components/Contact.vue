<template>
  <div class="w-screen max-w-xl px-4 py-6 pt-8 rounded-3xl z-40 bg-primary">
    <form
      action="https://api.staticforms.xyz/submit"
      method="post"
      class="flex flex-col"
    >
      <input type="text" name="name" placeholder="name" required />
      <input type="text" name="email" placeholder="email" required />
      <textarea name="message" placeholder="message" required></textarea>
      <input type="text" name="honeypot" style="display: none" />
      <input
        type="hidden"
        name="accessKey"
        value="a9ba3d2c-202a-4757-8cbd-c87656de4124"
      />
      <input type="hidden" name="subject" value="contact form - tm.ox" />
      <input type="hidden" name="replyTo" value="@" />
      <input type="hidden" name="redirectTo" value="/" />
      <button class="submitButton" type="submit">submit</button>
    </form>
  </div>
</template>
