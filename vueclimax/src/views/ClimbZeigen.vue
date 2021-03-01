<template>
    <div class="u-full-width">
        <h3>Route erstellt</h3>

        <div>
            <label for="nummer">Routennummer</label>
            <input type="text" readonly :value="climb.nummer"/>
        </div>
    </div>

</template>

<script>
import { api } from '../helpers/Helpers';
    export default {
        name: 'holeClimb',
        data(){
            return {
                climb: ''
            };
        },
        async mountes() {
            this.climb = await api.holeClimb(this.$route.params.id);
        }
    }
</script>