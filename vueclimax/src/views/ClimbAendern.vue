<template>
    <div class="u-full-width">
        <h3>Route ändern</h3>
        <climb-formular @createOrUpdate="createOrUpdate" :climb=this.climb></climb-formular>
    </div>
</template>

<script>
    import climbFormular from '../components/climbFormular.vue';
    import { api } from '../helpers/Helpers.js';

    export default {
        name: 'climb-aendern',
        components: {
            'climb-formular': climbFormular
        },
        data: function() {
            return {
                climb: {}
            };
        },
        methods: {
            createOrUpdate: async function(climb) {
                await api.aktualisiereClimb(climb);
                this.flash('Climb erfolgreich aktualisiert!', 'success');
                this.$router.push(`/climbs/${climb._id}`);
            }
        },
        async mounted() {
            this.climb = await api.leseClimb(this.$route.params.id);
        }
    }
</script>