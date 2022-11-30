<template>
    <section class="mb-5">
        <div class="row">
            <div class="col-sm-6 col-lg-5">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </span>
                        <input
                    @keydown="inputChange()"
                    type="text"
                    aria-describedby="basic-addon1" 
                    class="form-control form-control-lg"
                    id="countryInput"
                    placeholder="Search for a country..."
                    v-model="search" />
                </div>
            </div>

            <div class="col-sm-6 col-lg-3 offset-lg-4">
                <select
                    @change="selectChange()"
                    class="form-select form-select-lg mt-sm-0 mt-3"
                    aria-label="Default select example"
                    v-model="regionSelected">
                    <option disabled value="null" selected>
                        Filter by Region
                    </option>
                    <option value="All" selected>All</option>
                    <option
                        :value="name"
                        v-for="(value, name) in regions"
                        :key="value.id">
                        {{ name }}
                    </option>
                </select>
            </div>
        </div>
    </section>

    <section class="">
        <div
            class="
                row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4
                g-4
            ">
            <template v-if="loading">
                <div
                    class="spinner-border text-center d-block m-auto mt-5"
                    role="status"
                    style="width: 5rem; height: 5rem">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </template>
            <template v-else>
                <country-card :countries="filteredCountries"></country-card>
            </template>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import { isProxy, toRaw } from "vue";
import CountryCard from "../components/CountryCard.vue";

export default {
    name: "Home",
    components: {
        CountryCard,
    },
    data() {
        return {
            loading: true,
            search: "",
            regionSelected: null,
            regions: [],
            countries: [],
        };
    },
    computed: {
        filteredCountries() {
            let search = this.search.toLowerCase();
            let region = this.regionSelected;

            if (region != null) {
                if (region == "All") {
                    return this.countries;
                } else {
                    return this.regions[region];
                }
            }
            return this.countries.filter((country) =>
                country.name.common.toLocaleLowerCase().includes(search)
            );
        },
    },
    mounted() {
        this.fetchData();
    },

    methods: {
        inputChange() {
            this.regionSelected = null;
        },
        selectChange() {
            this.search = "";
        },
        fetchData() {
            this.loading = true;
            const baseURI = "https://restcountries.com/v3.1/all";
            axios.get(baseURI).then((result) => {
                this.countries = result.data;
                this.countries.sort(function (a, b) {
                    return a.name.common.localeCompare(b.name.common);
                });
                this.createRegions();
            });
        },
        createRegions() {
            this.regions = this.countries.reduce(function (country, index) {
                country[index.region] = country[index.region] || [];
                country[index.region].push(index);
                return country;
            }, Object.create(null));
            this.loading = false;
        },
    },
};
</script>

<style scoped>
@media (min-width: 1024px) {
}
</style>
