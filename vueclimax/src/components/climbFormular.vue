<template>
    <div class="u-full-width">
        <form action="#" @submit.prevent="onSubmit">
            <p v-if="errorsPresent" class="error">Bitte fülle alle Felder aus!</p>
            
            <div class="eingabefeld">
                <label for="routennummer">
                    Routennummer
                </label>
                <select v-model="climb.nummer" id="routennummer">
                    <option value="" disabled selected hidden>Routennummer wählen</option>
                    <option v-for="nummer in nummern" v-bind:value="nummer.value" v-bind:key="nummer.text">
                        {{ nummer.text }}
                    </option>
                </select>
            </div>

            <div class="eingabefeld">
                <label for="routenname">
                    Routenname
                </label>
                <input type="text" placeholder="Gebe den Namen der Route ein" v-model="climb.name" />
            </div>

            <div class="eingabefeld">
                <label for="grad">
                    Grad
                </label>
                <select v-model="climb.grad" id="grad">
                    <option value="" disabled selected hidden>Schwierigkeitsgrad wählen</option>
                    <option v-for="grad in grade" v-bind:value="grad.name" v-bind:key="grad.name">
                        {{ grad.name }}
                    </option>
                </select>
            </div>

            <div class="eingabefeld">
                <label for="sektor">
                    Sektor
                </label>
                <select v-model="climb.sektor" id="sektor">
                    <option value="" disabled selected hidden>Sektor wählen</option>
                    <option v-for="sektor in sektoren" v-bind:value="sektor.name" v-bind:key="sektor.name">
                        {{ sektor.name }}
                    </option>
                </select>
            </div>

            <div class="eingabefeld">
                <label for="routenbauer">
                    Routenbauer
                </label>
                <select v-model="climb.routenbauer" id="routenbauer">
                    <option value="" disabled selected hidden>Routenbauer wählen</option>
                    <option v-for="schrauber in routenbauer" v-bind:value="combineRoutenbauer(schrauber)" v-bind:key="schrauber.vorname">
                        {{ combineRoutenbauer(schrauber) }}
                    </option>
                </select>
            </div>


            <div class="eingabefeld">
                <label for="datum">
                    Datum
                </label>
                <input type="date" id="datum" placeholder="Datum wählen" v-model="climb.datum" style="display:block;height:38px;padding:2px 2px;border:1px solid #d1d1d1;border-radius:4px;width:400px;box-sizing:border-box;"/>
            </div>

            <button class="" style="margin-right:10px;">Route speichern</button>
            <router-link to="/climbUebersicht" exact class="button" style="margin-right:10px;">
                verwerfen
            </router-link>
        </form>
    </div>
</template>


<script>
    import { api } from '../helpers/Helpers';
    export default {
        name: 'climb-formular',
        props: {
            climb: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        nummer: '',
                        name: '',
                        grad: '',
                        sektor: '',
                        routenbauer: '',
                        datum: ''
                    };
                }
            }
        },

        data() {
            return {

                errorsPresent: false,
                routenbauer: [],
                sektoren: [],
                grade: [],
                nummern: [
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' }                
                ]
            };
        },


        methods:{
            onSubmit: function() {
                if (this.climb.nummer === '' || this.climb.name === '' || this.climb.grad === '' || this.climb.sektor === '' || this.climb.routenbauer === '' || this.climb.datum === '') {
                    this.errorsPresent = true;
                } else {
                    this.$emit('createOrUpdate', this.climb);
                }                
            },
            combineRoutenbauer: function(schrauber) {
                return `${schrauber.vorname} ${schrauber.nachname}`;
            }



        },
        async mounted() {
            this.routenbauer = await api.holeAlleRoutenbauer();
            this.sektoren = await api.holeAlleSektoren();
            this.grade = await api.holeAlleGrade();
        }
    };
</script>