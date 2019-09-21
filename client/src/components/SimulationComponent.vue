<template>
    <div>
        <h1>Simulation page!</h1>
        <h3>Hello from the Front-end</h3>
        <div class="slidecontainer">
            <div class="column">
                <h3>Simulation settings</h3>
                <p>Number of ants: {{ numberOfAnts }}</p>
                <input v-model="numberOfAnts" type="range" min="0" max="100" value="50" class="slider">
                <br>
                <button type="submit" v-on:click="sendParameters">Send parameters</button>
            </div>
        </div>
        <div class="response"><h3>Back-end response: {{ response }}</h3></div>
    </div>
</template>

<script>
import ParameterService from '../services/ParameterService';

export default {
    name: 'Simulation',
    data() {
        return {
            numberOfAnts: 0,
            response: ''
        }
    },
    methods: {
        async sendParameters() {
            this.response = await ParameterService.getSimResponse(this.numberOfAnts);
        }
    }
}
</script>

<style scoped>
.column {
    float:right;
    width: 50%;
}
</style>