<template>
    <div>
        <h1 class="ma-4 text-center text-h1">Water Monitor</h1>

        <v-container class="my-4" grid-list-md fluid>
            <v-card flat class="pa-3">
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="waterPrimary text-center pa-4 text-h3">Usage in dollars</div>
                        <v-divider></v-divider>
                        <div class="waterSecondary pa-4 text-h4">$30</div>
                    </v-flex>
                    <v-flex xs12>
                        <div class="waterPrimary text-center pa-4 text-h3" >Usage in gallons</div>
                        <v-divider></v-divider>
                        <div class="waterSecondary pa-4 text-h4">1000 gallons</div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>