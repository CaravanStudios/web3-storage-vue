<template>
    <div>
        <FileUpload mode="basic" name="demo[]" url="/api/upload"
            accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" />

    </div>
</template>
<script setup lang="ts">
import 'primevue/resources/themes/aura-light-green/theme.css'
import FileUpload from 'primevue/fileupload';
import { useToast } from "primevue/usetoast";

const file = ref<File | null>();
const form = ref<HTMLFormElement>();

function onUpload($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target && target.files) {
        file.value = target.files[0];
        try {
            fetch('/api/upload', {
                method: 'POST',
                body: file.value,
            }).then((resp) => {
                toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });

            })
        } catch (error) {
            console.error(error);
            form.value?.reset();
            file.value = null;
        } finally {
        }
    }
}


</script>
