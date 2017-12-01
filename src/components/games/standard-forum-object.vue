<template>

  <router-link :to="{ name: 'game', params: { id : forum.type }}">
    <div class="margin-bottom col-xs-6 col-sm-4 col-md-3 col-lg-2">
      <div class="img-wrapper">
        <img :src="imageSrc">
      </div>
      <div class="forum-object-description">
        <span>{{ forum.title }}</span> <br>
      </div>
    </div>
  </router-link>


</template>
<script>
  export default {

    props: {

      forum: {

        required: true,
        type: Object

      },
    },

    computed : {

      imageSrc()
      {
        var images = require.context('../../assets/', false, /\.jpg$/);

        if (this.forumtype) return images('./404_boxart-285x380.jpg');

        return images('./' + this.forum.type + '.jpg');
      },

    },

  }
</script>
<style>

  .margin-bottom {
    margin-bottom: 10px;
  }

  .sub-text {
    font-size: 12px;
    font-style: italic;
    color: lightslategrey;
  }

  .img-wrapper {
    width: 140px;
    height: 186px;
    border: 1px solid grey;
  }

  img {
    width: 100%;
    /*height: 100px;*/
    /*object-fit: cover;*/
  }


</style>
