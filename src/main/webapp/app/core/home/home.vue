<template>
    <div class="home row">
        <div class="col-md-3">
            <span class="hipster img-fluid rounded"></span>
        </div>
        <div class="col-md-9">
            <div style="height:100%">
                <l-map v-if="marker.lat" :zoom="4" :center="marker">
                    <l-tile-layer :url="'http://{s}.tile.osm.org/{z}/{x}/{y}.png'"></l-tile-layer>
                    <l-marker :lat-lng="marker"></l-marker>
                </l-map>
            </div>
        </div>
        <div class="col-md-12" style="max-width:500px">
            <chart></chart>
        </div>
    </div>
</template>

<script lang="ts" src="./home.component.ts">
</script>
