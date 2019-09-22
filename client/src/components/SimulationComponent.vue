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
        <div class="response"><h3>Back-end response: creating {{ response }} ants!</h3></div>
        <div class="container">
            <canvas width="600" height="800" id="sim-screen" ref="simScreen" class="sim-screen">

            </canvas>
        </div>
    </div>
</template>

<script>
import ParameterService from '../services/ParameterService';

export default {
    name: 'Simulation',
    data() {
        return {
            numberOfAnts: 0,
            response: 0,
            ctx: '',
            ants: [],
            mapX: 600,
            mapY: 800
        }
    },
    methods: {
        drawAnts() {
            this.ctx = this.$refs['simScreen'].getContext('2d');
            this.ctx.fillStyle = '#f00';
            this.ctx.strokeStyle = '#000000';
            for (let i = 0; i < this.ants.length; i++) {
                this.ctx.beginPath();
                this.ctx.arc(this.ants[i].x, this.ants[i].y, 2, 0, 2*Math.PI);
                this.ctx.stroke();
                this.ctx.fill();
            }
        },
        async sendParameters() {
            this.ants = await ParameterService.getSimResponse(this.numberOfAnts, this.mapX, this.mapY);
            this.response = this.ants.length;
            this.drawAnts();
        },
        created() {
        }
    }
}
</script>

<style scoped>
.column {
    float:right;
    width: 50%;
}

#sim-screen {
    border: 1px solid black;
    width: 800px;
    height: 600px;
}
</style>