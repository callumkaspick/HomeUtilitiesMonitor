import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                appPrimary: "#3DEC00",
                appSecondary: "#13630C",
                waterPrimary: "#00B2FF",
                waterSecondary: "#00FFFF",
                electricPrimary: "#FAFF00",
                electricSecondary: "#FFB800",
                gray: "#F5F5F5"
            },

            dark: {
                appPrimary: "#3DEC00",
                appSecondary: "#13630C",
                waterPrimary: "#00B2FF",
                waterSecondary: "#00FFFF",
                electricPrimary: "#FAFF00",
                electricSecondary: "#FFB800"
            }
        }
    }
});

