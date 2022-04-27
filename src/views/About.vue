<template>
  <div class="about">
    <h1>{{pagename}}</h1>
    <p>{{pagedis}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: function(){
    return {
      pagename: "About Us",
      pagedis: "This is about us page",
    };
  },
  name: "about",
};
</script>

