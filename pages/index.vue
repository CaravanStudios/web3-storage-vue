<template>
    <div>
        <div class="px-4 sm:px-6 lg:px-8 bg-white px-4 py-8 rounded-lg shadow-lg"
            >
            <div class="border rounded-lg mb-4 p-4 text-gray-500">
                <h2 class="font-semibold">Upload</h2>
                <FileUploader @complete="refreshFiles" />
            </div>
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">
                        Files</h1>
                    <p class="mt-2 text-sm text-gray-700">A list of the files in
                        your space.
                    </p>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                </div>
            </div>
            <PulseLoader v-show="loading" />
            <FileTable :files="files"  v-show="!loading"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
const files = ref<Array>([]);
const loading = ref<boolean>(true);
const refreshFiles = () => {
    loading.value = true;
    return fetch('/api/list')
        .then(res => res.json())
        .then(data => {
            files.value = data.files.results;
            loading.value = false;
        })
        .catch(err => {
            console.error(err);
            loading.value = false;
        });
}
onMounted(() => {
    refreshFiles()
});
</script>
