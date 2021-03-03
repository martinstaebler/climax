<template>
    <div class="u-full-width">
        <h3>{{ ersetzeHeadline(climb) }}</h3>

        <div class="eingabefeld">
            <div class="label">Routennummer</div>
            <div class="wert">{{ climb.abschnitt }} . {{ climb.nummer }}</div>
        </div>

        <div class="eingabefeld">
            <div class="label">Routenname</div>
            <div class="wert">{{ climb.name }}</div>            
        </div>

        <div class="eingabefeld">
            <div class="label">Grad</div>
            <div class="wert">{{ climb.grad }}</div>            
        </div>

        <div class="eingabefeld">
            <div class="label">Sektor</div>
            <div class="wert">{{ climb.sektor }}</div>            
        </div>

        <div class="eingabefeld">
            <div class="label">Routenbauer</div>
            <div class="wert">{{ climb.routenbauer }}</div>            
        </div>

        <div class="eingabefeld">
            <div class="label">Datum</div>
            <div class="wert">{{ climb.datum }}</div>            
        </div>

        <img src="../../public/img/route.jpg" style="width:500px;"/>
        <hr style="margin-top:5px;margin-top:20px;margin-bottom:20px">
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
        methods:{
            ersetzeHeadline: function(climb) {
                return `Route "${climb.name}"`;
            }
        },
        async mounted() {

            this.climb = await api.leseClimb(this.$route.params.id);
            
        }
    }
</script>