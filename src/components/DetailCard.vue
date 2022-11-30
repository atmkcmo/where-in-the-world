<template>
    <article class="">
        <div class="row">
            <div class="col-lg-5">
                <template v-if="country.flags">
                    <img class="img-fluid" :src="country.flags.svg" alt="" />
                </template>
            </div>
            <div class="col-lg-6 offset-lg-1">
                <div class="d-flex flex-column justify-content-center h-100">
                    <div>
                        <!-- stats -->
                        <h2 class="fw-bold mt-4 mt-lg-0 mb-4">{{ country.name.common }}</h2>
                        <div class="d-flex flex-column flex-md-row">
                            <div class="flex-grow-1">
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        <span class="fw-bold"
                                            >Native Name:
                                        </span>
                                        {{
                                            Object.values(
                                                country.name.nativeName
                                            )[0].common
                                        }}
                                    </li>
                                    <li class="mb-2">
                                        <span class="fw-bold"
                                            >Populatoin:
                                        </span>
                                        {{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                                    </li>
                                    <li class="mb-2">
                                        <span class="fw-bold">Region: </span
                                        >{{ country.region }}
                                    </li>
                                    <li class="mb-2">
                                        <span class="fw-bold">Sub Region: </span
                                        >{{ country.subregion }}
                                    </li>
                                    <li class="mb-2">
                                        <span class="fw-bold">Capital: </span>
                                        {{ country.capital[0] }}
                                    </li>
                                </ul>
                            </div>
                            <div class="flex-grow-1">
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        <span class="fw-bold"
                                            >Top lev Domain: </span
                                        >{{ country.tld[0] }}
                                    </li>
                                    <li class="mb-2">
                                        <span class="fw-bold">Currencies: </span
                                        >{{
                                            Object.values(country.currencies)[0]
                                                .name
                                        }}
                                    </li>
                                    <li class="mb-2">
                                        <span class="fw-bold">Languages: </span>
                                        <span
                                            v-for="(
                                                lang, a, index
                                            ) in country.languages"
                                            :key="lang.id">
                                            {{ lang
                                            }}<span
                                                v-if="
                                                    index + 1 <
                                                    Object.keys(
                                                        country.languages
                                                    ).length
                                                "
                                                >,
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- stats -->

                        <!-- border buttons -->
                        <div class="d-md-flex flex-wrap align-items-center mt-3">
                            <div class="fw-bold">Border countries:&nbsp;</div>
                            <template v-if="borders.length == 0">
                                none
                            </template>
                            <template v-else>
                                <router-link
                                    class="btn m-1 btn-light shadow-sm"
                                    v-for="country in borders"
                                    :key="country.id"
                                    :to="{
                                        name: 'details',
                                        params: {
                                            country: `${country.toLowerCase().split(' ').join('-')}`,
                                        },
                                    }">
                                    {{ country }}
                                </router-link>
                            </template>
                        </div>
                        <!-- border buttons -->
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>


<script>
export default {
    name: "Detail Card",
    props: ["country", "borders"],
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {},
};
</script>

<style scoped></style>
