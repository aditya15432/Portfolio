<template>
    <HomeTab :zxcValue="gdhbfhb" />

</template>

<script setup>
import HomeTab from "../../components/HomeTab.vue";


const someValue = computed(() => {
    value = value++;
});


const zxcValue = ref(0);

const props = defineProps({
    type: Number,
    zxcValue=0;
});

//api
</script>