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
const baseURL = 'http://localhost:3000/climbs/'

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
    })
};