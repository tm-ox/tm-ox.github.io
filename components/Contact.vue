<template>
  <h4>
    <FadeUp><h5>CONTACT</h5></FadeUp>
  </h4>
  <div class="container">
    <form
      action="https://api.staticforms.xyz/submit"
      method="post"
      class="flex flex-col w-full max-w-xl"
    >
      <FadeUp>
        <div class="flex flex-col">
          <div class="flex flex-col px-4 py-6 rounded-2xl mb-6 bg-primary">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              required
              class="form autofill:bg-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              required
              class="form"
            />
            <textarea
              name="message"
              placeholder="MESSAGE"
              required
              class="form pb-0 mb-0"
            ></textarea>
            <input type="text" name="honeypot" style="display: none" />
            <input
              type="hidden"
              name="accessKey"
              value="a9ba3d2c-202a-4757-8cbd-c87656de4124"
            />
            <input type="hidden" name="subject" value="contact form - tm.ox" />
            <input type="hidden" name="replyTo" value="@" />
            <input
              type="hidden"
              name="redirectTo"
              value="https://tm.oxenfree.net/sent"
            />
          </div>
          <button class="submitButton" type="submit">SUBMIT</button>
        </div>
      </FadeUp>
    </form>
  </div>
</template>
