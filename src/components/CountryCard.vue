<template>
    <div class="col" v-for="item in countries" :key="item.id">
        <article class="card element shadow border-0 h-100 country-card mb-5" @click="gotoDetailsPage(item.name.common)">
            <img :src="item.flags.svg" class="card-img-top country-card__flag" alt="..." />
            <div class="card-body">
                <h5 class="card-title fw-bold">{{ item.name.common }}</h5>
                <ul class="list-unstyled">
                    <li>
                        <span class="fw-bold">Population: </span>
                        {{
                           item.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }}
                    </li>
                    <li>
                        <span class="fw-bold">Region: </span>{{ item.region }}
                    </li>
                    <li v-if="item.capital">
                        <span class="fw-bold">Capital: </span
                        >{{ item.capital[0] }}
                    </li>
                </ul>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: "Country Card",
    props: ["countries"],
    data() {
        return {};
    },
    methods: {
        gotoDetailsPage(place) {
            place = place.split(' ').join('-');
            this.$router.push(`/where-in-the-world/${place.toLowerCase()}`);
        }
    }
};
</script>

<style scoped>
.card {
    cursor: pointer;
}
</style>
