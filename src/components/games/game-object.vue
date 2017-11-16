<template>

  <router-link :to="{ name: 'posts', params: { id : game.id }}">
    <div class="margin-bottom col-xs-6 col-sm-4 col-md-3 col-lg-2">
      <div class="img-wrapper">
          <img src="../../assets/Hearthstone-285x380.jpg">
      </div>
      <div class="forum-object-description">
        <span>{{ truncateLine(game.title, 20) }}</span> <br>
        <span class="sub-text">{{ game.postCount + ' ' + this.postCountText }}</span>
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

    methods:  {
      truncateLine(existingInput, length)
      {
        if (existingInput.length < length ) return existingInput;
        return existingInput.substring(0,length) + '..';
      },
    },

    computed : {

      postCountText()
      {
        if(this.game.postCount === 1) return 'post';
        return 'posts';
      }
    }

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
  height: 185px;
  border: 1px solid grey;
}

img {
  width: 100%;
  /*height: 100px;*/
  /*object-fit: cover;*/
}


</style>
