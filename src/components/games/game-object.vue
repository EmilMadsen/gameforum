<template>

  <router-link :to="{ name: 'game', params: { id : game.id }}">
    <div class="margin-bottom col-xs-6 col-sm-4 col-md-3 col-lg-2">
      <div class="img-wrapper">
          <img :src="imageSrc">
      </div>
      <div class="forum-object-description">
        <span>{{ truncateLine(game.title, 20) }}</span> <br>
        <span class="sub-text">{{ game.post_count + ' ' + this.postCountText + ' - ' + game.rating + ' rating' }}</span>
      </div>
    </div>
  </router-link>


</template>
<script>
  export default {

    props: {

      game: {

        required: true,
        type: Object

      },
    },

    computed : {

      imageSrc()
      {
        var images = require.context('../../assets/', false, /\.jpg$/);

        if (this.game.picture_filepath == null) return images('./404_boxart-285x380.jpg');

        return images('./' + this.game.picture_filepath);
      },

      postCountText()
      {
        if(this.game.postCount === 1) return 'post';
        return 'posts';
      }
    },

    methods:  {
      truncateLine(existingInput, length)
      {
        if (existingInput.length < length ) return existingInput;
        return existingInput.substring(0,length) + '..';
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



</style>
