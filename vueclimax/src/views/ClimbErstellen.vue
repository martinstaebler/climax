<template>
    <div class="u-full-width">
        <h3>Neue Route erstellen</h3>
        <climb-formular @createOrUpdate="createOrUpdate"></climb-formular>
    </div>
</template>

<script>
    import climbFormular from '../components/climbFormular.vue';
    import { api } from '../helpers/Helpers';

    export default {
        name: 'neuer-climb',
        components: {
            'climb-formular': climbFormular
        }, 
        methods: {
            createOrUpdate: async function(climb) {
                const res = await api.erstelleClimb(climb);
                this.flash('Route erstellt', 'success');
                this.$router.push(`/climbs/${res._id}`);
            }
        }  
    };
</script>