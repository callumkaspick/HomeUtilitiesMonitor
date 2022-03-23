<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mt-6 mb-16">
        <v-img
          src='../assets/logo.png'          
          class="my-3"
          contain
          height="500"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to HUM
        </h1>

        <p class="subheading font-weight-regular">
          An affordable solution to save you money
          <br>on your utility usage.
        </p>
      </v-col>
      
      <v-col
        class="mb-5 mt-16"
        cols="12"
      >

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12">
      </v-col>
    </v-row>        
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
      ],
      importantLinks: [
      ],
      whatsNext: [
      ],
    }),
  }
</script>

