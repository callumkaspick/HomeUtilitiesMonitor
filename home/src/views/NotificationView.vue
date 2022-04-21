<template>
    <div>
        <h1 class="ma-4 text-center text-h1">Notifications</h1>
        <v-divider></v-divider>
        
        <div class="text-center">
            <v-btn class="text-center mt-4" dark color="appSecondary" @click="show = true"> Mock Notifications </v-btn>
            <v-snackbar text :style="{'margin-bottom':calcMargin(i)}" v-for="(s,i) in snackbars" :key="i" v-model="show" :timeout="false" :min-width="1000">
                {{ s.text }}
                <v-btn rounded color="appPrimary" @click="hide(i)" >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
import NotificationVue from "@/components/Notification.vue";

export default {
    components: {
        NotificationVue
    },
    data() {
        return {
            snackbars: [
            {text: "You have successfully added a water device. "},
            {text: "You have successfully added an electric device. "},
            {text: "You have used more water than your expected limit for this billing period. "},
            {text: "You have used more electricity than your expected limit for this billing period. "},
            {text: "Warning! A water leak has been detected in your household. "},
            {text: "Warning! You are using a high amount of vampire energy. This will affect your costs for this billing period. "}        
            ],
            show: false
            }
    },
    methods: {
        calcMargin(i) {
            return (i*100) + 'px'
        },
        hide(i){
            this.snackbars.splice(i,1)
        }
    }
}
</script>
