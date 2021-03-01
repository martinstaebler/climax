<template>
    <div  class="u-full-width">
        <h3>Routenübersicht</h3>
        <table id="climbs" class="">
            <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Routenname</th>

                    <th>Grad</th>
                    <th>Sektor</th>
                    <th>Routenbauer</th>
                    <th>Datum</th>

                    <th><i class="edit icon"></i></th>
                    <th><i class="trash icon"></i></th>
                    <th colspan="3"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(climb, i) in climbs" :key="i">
                    <td>{{ climb.abschnitt }}.{{ climb.nummer }}</td>
                    <td>{{ climb.name }}</td>
                    <td>{{ climb.grad }}</td>
                    <td>{{ climb.sektor }}</td>
                    <td>{{ climb.routenbauer }}</td>
                    <td>{{ climb.datum }}</td>
                    <td>
                        <router-link :to="{ name: 'climbAendern', params: { id: climb._id }}"><i class="las la-2x la-edit"></i></router-link>
                    </td>
                    <td @click.prevent="onDestroy(climb._id)">
                        <a :href="`/climbs/${climb._id}`"><i class="las la-2x la-trash"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { api } from '../helpers/Helpers';
export default {
    name: 'climbs',
    data() {
        return {
            climbs: []
        };
    },
    methods: {
        async onDestroy(id) {
            const sure = window.confirm('Wollen Sie die Route wirklich löschen?');
            if(!sure) return;
            await api.loescheClimb(id);
            this.flash('Route erfolgreich gelöscht', 'success');
            const neueClimbs = this.climbs.filter(climb => climb._id != id);
            this.climbs = neueClimbs;
        }
    },
    async mounted() {
        this.climbs = await api.holeAlleClimbs();
    }
    
};
</script>