<template>

  <router-link :to="{ name: 'forums', params: { game : game }}">
    <div class="margin-bottom col-xs-6 col-sm-4 col-md-3 col-lg-2">
      <div class="img-wrapper">
          <img src="../../assets/404_boxart-285x380.jpg">
      </div>
      <div class="forum-object-description">
        <span>{{ truncateLine(game.title, 20) }}</span> <br>
        <span class="sub-text">{{ game.forumCount + ' ' + this.forumCountText }}</span>
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
      forumCountText()
      {
        if(this.game.forumCount === 1) return 'forum';
        return 'forums';
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
