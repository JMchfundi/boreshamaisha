<template>
  <div>
    <b-overlay
      :show="busy"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block"
      @hidden="onHidden"
    >
    <router-link>
      to="/kaufer/edit_profile"
      <b-button
        ref="button"
        :disabled="busy"
        variant="primary"
        @click="onClick"
      >
        Do something
      </b-button>
    </router-link>
      <!-- <b-button
        ref="button"
        :disabled="busy"
        variant="primary"
        @click="onClick"
      >
        Do something
      </b-button> -->
    </b-overlay>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        busy: false,
        timeout: null
      }
    },
    beforeDestroy() {
      this.clearTimeout()
    },
    methods: {
      clearTimeout() {
        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }
      },
      setTimeout(callback) {
        this.clearTimeout()
        this.timeout = setTimeout(() => {
          this.clearTimeout()
          callback()
        }, 5000)
      },
      onHidden() {
        // Return focus to the button once hidden
        this.$refs.button.focus()
      },
      onClick() {
        this.busy = true
        // Simulate an async request
        this.setTimeout(() => {
          this.busy = false
        })
      }
    }
  }
</script>