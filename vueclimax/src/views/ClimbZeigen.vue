<template>
    <div class="u-full-width">
        <h3>Route wurde erstellt:</h3>

        <div class="eingabefeld">
            <label for="nummer">Routennummer</label>
            <input type="text" id="nummer" readonly :value="climb.nummer"/>
        </div>

        <div class="eingabefeld">
            <label for="name">Routenname</label>
            <input type="text" id="name" readonly :value="climb.name"/>
        </div>

        <div class="eingabefeld">
            <label for="grad">Grad</label>
            <input type="text" id="grad" readonly :value="climb.grad"/>
        </div>

        <div class="eingabefeld">
            <label for="sektor">Sektor</label>
            <input type="text" id="sektor" readonly :value="climb.sektor"/>
        </div>

        <div class="eingabefeld">
            <label for="routenbauer">Routenbauer</label>
            <input type="text" id="routenbauer" readonly :value="climb.routenbauer"/>
        </div>

        <div class="eingabefeld">
            <label for="datum">Datum</label>
            <input type="text" id="datum" readonly :value="climb.datum"/>
        </div>
    </div>

</template>

<script>
import { api } from '../helpers/Helpers';
    export default {
        name: 'show',
        data(){
            return {
                climb: ''
            };
        },
        async mounted() {

            this.climb = await api.leseClimb(this.$route.params.id);
        }
    }
</script>