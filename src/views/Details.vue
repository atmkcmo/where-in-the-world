
<template>
    <div class="row mb-5">
        <div class="col">
            <router-link
                class="btn btn-light shadow-sm"
                :to="{ name: 'home' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back</router-link
            >
        </div>
    </div>
    <div class="row">
        <div class="col">
            <template v-if="loading">
                <div
                    class="spinner-border text-center d-block m-auto mt-5"
                    role="status"
                    style="width: 5rem; height: 5rem">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </template>
            <template v-else>
                <detail-card
                    :country="countryData"
                    :borders="borders"></detail-card>
            </template>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import DetailCard from "../components/DetailCard.vue";
export default {
    name: "Details",
    components: {
        DetailCard,
    },
    data() {
        return {
            loading: true,
            country: null,
            countryData: {},
            borders: [],
        };
    },
    watch: {
        $route: {
            handler: function (newRouteValue) {
                this.country = newRouteValue.params.country;
                this.fetchData();
            },
            deep: true,
        },
    },
    mounted() {
        this.country = this.$route.params.country;
        this.fetchData();
    },
    methods: {
        fetchData() {
            const that = this;
            // const country = this.country;
            const country = this.country.replaceAll("-", "%20");
            this.loading = true;
            this.borders = [];
            const baseURI = `https://restcountries.com/v3.1/name/${country}`;
            axios.get(baseURI).then((result) => {
                this.countryData = result.data[0];
                if (this.countryData.borders) {
                    this.countryData.borders.forEach((country) => {
                        const url = `https://restcountries.com/v2/alpha/${country}`;
                        axios.get(url).then((result) => {
                            that.borders.push(result.data.name);
                        });
                    });
                }
                this.loading = false;
            });
        },
    },
};
</script>

<style scoped></style>
