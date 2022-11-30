<template>
    <nav class="nav element shadow-sm">
        <div class="container-lg">
            <div class="row">
                <div class="col">
                    <div
                        class="
                            d-flex
                            justify-content-between
                            align-items-center
                            py-3
                        ">
                        <h1 class="nav__header h5 fw-bold mb-0">
                            Where in the World?
                        </h1>
                        <a
                            class="btn btn-light shadow-sm"
                            href="#"
                            @click.prevent="setDarkMode">
                            <!-- <img
                                stroke="currentColor"
                                fill="currentColor"
                                class="site-btn__icon element"
                                src="./assets/images/moon.svg"
                                alt="" /> -->
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-moon">
                                <path
                                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                            Dark Mode</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <main class="main py-5">
        <div class="container-lg"><router-view></router-view></div>
    </main>
</template>

<script>
import axios from "axios";
export default {
    name: "app",
    data() {
        return {
            search: "",
            regionSelected: null,
            currentPath: window.location.hash,
            regions: [],
            countries: [],
        };
    },
    mounted() {},

    methods: {
        setDarkMode() {
            document.body.classList.toggle("dark");
        },
    },
};
</script>

<style lang="scss">
</style>
