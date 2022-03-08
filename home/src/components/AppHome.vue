<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mt-6 mb-16">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Cogwheel.png/627px-Cogwheel.png?20151014125902"          class="my-3"
          contain
          height="500"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          You are in the app! Also on the root!
        </h1>

        <p class="subheading font-weight-regular">
          Build app screens in this component
        </p>
      </v-col>
      
      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
  }
</script>

