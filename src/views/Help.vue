<template>
  <div class="our-help">
    <h1>{{PageName}}</h1>
    <p>{{PageDis}}</p>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      PageName: "Help",
      PageDis: "This is Help Page",
    }
  },
  name: 'help',
}
</script>
