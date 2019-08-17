import firebase from 'firebase.js';

var database = firebase.database();

function updateSpeed(newSpeed) {
    database.ref('speed').set({
        speed: newSpeed,
    });
}

function updateGPS(newLat, newLong, newTime) {
    database.ref('gps').set({
        lat: newLat,
        long: newLong,
        time: newTime,
    });
}