<template>

  <div>
    <div v-if="isActivated(forum.type)">
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
    </div>
    <div v-else>
      <div class="margin-bottom col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <div class="img-wrapper-greyed">
          <img :src="imageSrc">
        </div>
        <div class="forum-object-description">
          <span style="text-decoration: line-through">{{ forum.title }}</span> <br>
        </div>
      </div>
    </div>
  </div>



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

    methods: {

        isActivated(type)
        {
            return (type === "newest" || type === "topvoted");
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

  .img-wrapper-greyed {
    width: 140px;
    height: 186px;
    border: 1px solid grey;
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */
    background-color: #000;
  }

  img {
    width: 100%;
    /*height: 100px;*/
    /*object-fit: cover;*/
  }


</style>
