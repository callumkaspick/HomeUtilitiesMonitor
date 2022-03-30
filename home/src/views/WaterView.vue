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

        
        <v-bottom-navigation grow flat fluid align class="appPrimary ma-2">
            <v-btn class="rounded-pill">
                <span class="text-center pa-2 text-h5 font-weight-bold">Minute</span>
            </v-btn>
            <v-btn class="rounded-pill">
                <span class="text-center pa-2 text-h5 font-weight-bold">Hour</span>
            </v-btn>
            <v-btn class="rounded-pill">
                <span class="text-center pa-2 text-h5 font-weight-bold">Day</span>
            </v-btn>
            <v-btn class="rounded-pill">
                <span class="text-center pa-2 text-h5 font-weight-bold">Week</span>
            </v-btn>
            <v-btn class="rounded-pill">
                <span class="text-center pa-2 text-h5 font-weight-bold">Month</span>
            </v-btn>
            <v-btn class="rounded-pill">
                <span class="text-center pa-2 text-h5 font-weight-bold">Year</span>
            </v-btn>
            <v-btn class="rounded-pill">
                <span class="text-center pa-2 text-h5 font-weight-bold">Alltime</span>
            </v-btn>
        </v-bottom-navigation>

        <v-bottom-navigation grow flat fluid align class="waterPrimary ma-2">
            <v-btn class="rounded-pill waterSecondary mx-10">
                <span class="text-center pa-2 text-h5 font-weight-bold">Home</span>
            </v-btn>
            <v-btn class="rounded-pill waterSecondary mx-10">
                <span class="text-center pa-2 text-h5 font-weight-bold">Graph</span>
            </v-btn>
            <v-btn class="rounded-pill waterSecondary mx-10">
                <span class="text-center pa-2 text-h5 font-weight-bold">Settings</span>
            </v-btn>
            <v-btn class="rounded-pill waterSecondary mx-10">
                <span class="text-center pa-2 text-h5 font-weight-bold">Notifications</span>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>
