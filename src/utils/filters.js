import Vue from 'vue';

Vue.filter('abbr', (value) => value.split(' ').map((part) => part[0].toUpperCase()).join('').slice(0, 3));
