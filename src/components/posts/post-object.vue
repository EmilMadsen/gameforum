<template>

  <div class="post-highligting post-entry">
    <router-link :to="{ name: 'post', params: { id : post.id }}">

      <!-- ICON && TITLE -->
      <div class="col-sm-4 column-content">
        <div>
          <h4>{{ truncateLine(post.title, 35) }}</h4>
          <h6>{{ truncateLine(post.description, 35) }}</h6>
        </div>
      </div>

      <!-- COMMENT COUNT -->
      <div class="col-sm-2 column-content">
        <span>{{post.comment_count}} comments</span> <br>
        <span>{{post.created_date}}</span> <br>
        <span>Author: <b>{{post.author}}</b></span>
      </div>

      <!-- LATEST COMMENT -->
      <div v-if="post.last_comment" class="col-sm-5 column-content">
        <span><b>Latest comment by {{post.last_comment_author}}:</b></span><br>
        <span style="font-style: italic">{{truncateLine(post.last_comment, 85) }}</span>
      </div>
      <div v-else class="col-sm-5 column-content">
        <span>No comments yet...</span>
      </div>

      <!-- UP & DOWNVOTES -->
      <div class="col-sm-1 column-content">
        <div class="post-vote-area">
          <i v-on:click.prevent="upvote()" class="fa fa-thumbs-o-up" aria-hidden="true"></i><br>
          {{post.rating}}<br>
          <i @click="downvote()" class="fa fa-thumbs-o-down" aria-hidden="true"></i>
        </div>
      </div>
    </router-link>
  </div>

</template>
<script>
  export default {

    props: {

      post: {

        required: true,
        type: Object

      },
    },

    methods: {

      upvote()
      {
        console.log("VOTED");

      },

      downvote()
      {
          console.log("VOTED");
      },

      truncateLine(existingInput, length)
      {
        if (existingInput == null) return "";
        if (existingInput.length < length ) return existingInput;
        return existingInput.substring(0,length) + '..';
      },

    }

  }
</script>
<style>

  .fa {
    cursor: pointer;
  }

  .column-content {
    height: 80px;
  }



</style>
