<template>
    <div class="container w-100 m-auto text-center mt-3">
        <h1 class="text-danger">{{username.split(' ')[1]}} todo list</h1>
        <add-item-form v-on:reloadlist="getItems()" />
        <list-view
            :items="items"
            v-on:reloadlist="getItems()"
            class="text-center"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm";
import listView from "./listView";
import axios from 'axios'

export default {
    components: {
        addItemForm,
        listView
    },
    props:['username'],

    data: function() {
        return {
            items: []
        };
    },
    methods: {
        getItems() {
            axios
                .get("http://localhost:8000/api/items")
                .then(res => {
                    this.items = res.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getItems();
    }
};
</script>

<style scoped></style>
