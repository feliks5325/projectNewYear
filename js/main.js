const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const currentTime = new Date();
const diff = nextYear - currentTime;

const daysNewYear = Math.floor(diff / 1000 / 60 / 60 / 24)
const hoursNewYear = Math.floor(diff / 1000 / 60 / 60) % 24
const minutesNewYear = Math.floor(diff / 1000 / 60) % 60
const secondsNewYear = Math.floor(diff / 1000) % 60 1

