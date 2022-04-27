import Vue from "vue";

Vue.filter('uppercase', function(v) {
    return v.toUpperCase();
  });

Vue.filter('shorten', function(v, textlenght,suffix) {
    return v.substring(0, textlenght) + suffix;
});