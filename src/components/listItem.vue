<template>
    <li class="list-group-item d-flex justify-content-between w-50">
        <input
            type="checkbox"
            @change="updateCheck()"
            :checked="item.completed"
            class="mr-3"
        />
        <span :class="[item.completed ? 'completed' : '', 'item']">{{
            item.name
        }}</span>
        <button class="btn btn-danger ml-3" @click="removeItem()">X</button>
    </li>
</template>

<script>
import axios from 'axios'
export default {
    props: ["item"],
    methods: {
        updateCheck() {
            axios
                .put(`http://localhost:8000/api/item/${this.item.id}`, {
                    completed: !this.item.completed // Send the new completed status instead of the whole item
                })
                .then(res => {
                    if (res.status == 200) {
                        this.$emit("itemchanged");
                    }
                })
                .catch(error => {
                    console.log("error from axios put", error);
                });
        },
        removeItem() {
            axios
                .delete(`http://localhost:8000/api/item/${this.item.id}`)
                .then(res => {
                    if (res.status == 200) {
                        this.$emit("itemchanged");
                    }
                })
                .catch(error => {
                    console.log("error from axios delete ", error);
                });
        }
    }
};
</script>

<style>
.completed {
    text-decoration: line-through;
    color: gray;
}
.item {
    word-break: break-all;
}
</style>
