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
                    <option v-for="grad in grade" v-bind:value="grad.value" v-bind:key="grad.text">
                        {{ grad.text }}
                    </option>
                </select>
            </div>

            <div class="eingabefeld">
                <label for="sektor">
                    Sektor
                </label>
                <select v-model="climb.sektor" id="sektor">
                    <option value="" disabled selected hidden>Sektor wählen</option>
                    <option v-for="sektor in sektoren" v-bind:value="sektor.value" v-bind:key="sektor.text">
                        {{ sektor.text }}
                    </option>
                </select>
            </div>

            <div class="eingabefeld">
                <label for="routenbauer">
                    Routenbauer
                </label>
                <select v-model="climb.routenbauer" id="routenbauer">
                    <option value="" disabled selected hidden>Routenbauer wählen</option>
                    <option v-for="schrauber in routenbauer" v-bind:value="schrauber.value" v-bind:key="schrauber.text">
                        {{ schrauber.text }}
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
                nummern: [
                    { text: '1.1', value: '1.1' },
                    { text: '1.2', value: '1.2' },
                    { text: '2.1', value: '2.1' },
                    { text: '3.1', value: '3.1' },
                    { text: '3.2', value: '3.2' },
                    { text: '3.3', value: '3.3' },
                    { text: '4.1', value: '4.1' },
                    { text: '4.2', value: '4.2' },
                    { text: '5.1', value: '5.1' },
                    { text: '5.2', value: '5.2' },
                    { text: '5.3', value: '5.3' },
                    { text: '6.1', value: '6.1' },
                    { text: '6.2', value: '6.2' },
                    { text: '7.1', value: '7.1' },
                    { text: '8.1', value: '8.1' },
                    { text: '8.2', value: '8.2' }                
                ],
                grade: [
                    { text: '3+', value: '3+' },
                    { text: '4-', value: '4-' },
                    { text: '4', value: '4' },
                    { text: '4+', value: '4+' },
                    { text: '5-', value: '5-' },
                    { text: '5', value: '5' },
                    { text: '5+', value: '5+' },
                    { text: '6-', value: '6-' },
                    { text: '6', value: '6' },
                    { text: '6+', value: '6+' },
                    { text: '7-', value: '7-' },
                    { text: '7', value: '7' },
                    { text: '7+', value: '7+' },
                    { text: '8-', value: '8-' },
                    { text: '8', value: '8' },
                    { text: '8+', value: '8+' },
                    { text: '9-', value: '9-' },
                    { text: '9', value: '9' }
                ],
                sektoren: [
                    { text: 'Westwand', value: 'Westwand' },
                    { text: 'Ostwand', value: 'Ostwand' },
                    { text: 'Nordwand', value: 'Nordwand' },
                    { text: 'Südwand', value: 'Südwand' },
                    { text: 'Innenturm 1', value: 'Innenturm 1'},
                    { text: 'Innenturm 2', value: 'Innenturm 2'}
                ],
                routenbauer: [
                    { text: 'Annika Carstens', value: 'Annika Carstens'},
                    { text: 'Andreas Häse', value: 'Andreas Häse'},
                    { text: 'Dirk Martens-Bruhns', value: 'Dirk Martens-Bruhns'},
                    { text: 'Erik Braasch', value: 'Erik Braasch'},
                    { text: 'Nora Horstmann', value: 'Nora Horstmann'},
                    { text: 'Tavor Geithe', value: 'Tavor Geithe'}
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
            }
        }
    };
</script>