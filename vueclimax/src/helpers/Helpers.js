import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css'; 

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true
    }
})


const vm = new Vue();
const baseURL = 'http://localhost:3000/climbs/';
const baseURLrb = 'http://localhost:3000/routenbauers/';
const baseURLsek = 'http://localhost:3000/sektoren/';
const baseURLgra = 'http://localhost:3000/grade/';
const baseURLabs = 'http://localhost:3000/abschnitte/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
    });

export const api = {
    leseClimb: handleError(async id => {
        console.log("vue | leseClimb");
        const res = await axios.get(baseURL + id);
        return res.data;
    }),
 
    holeAlleClimbs: handleError(async () => {
        console.log("vue | holeAlleClimbs");
        const res = await axios.get(baseURL);
        return res.data;
    }),

    loescheClimb: handleError(async id => {
        console.log("vue | loescheClimb");
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),

    erstelleClimb: handleError(async payload => {
        console.log("vue | erstelleClimb");
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),

    aktualisiereClimb: handleError(async payload => {
        const res = await axios.put(baseURL + payload._id, payload);
        return res.data;
    }),
    holeAlleRoutenbauer: handleError(async () => {
        console.log("vue | holeAlleRoutenbauer");
        const res = await axios.get(baseURLrb);
        return res.data;
    }),
    holeAlleSektoren: handleError(async () => {
        console.log("vue | holeAlleSektoren");
        const res = await axios.get(baseURLsek);
        return res.data;
    }),
    holeAlleGrade: handleError(async () => {
        console.log("vue | holeAlleGrade");
        const res = await axios.get(baseURLgra);
        return res.data;
    }),
    holeAlleAbschnitte: handleError(async () => {
        console.log("vue | holeAlleAbschnitte");
        const res = await axios.get(baseURLabs);
        return res.data;
    })
};