<template>

  <div class="post-entry" :class="{'post-highligting': post.author_role}">


      <!-- ICON && TITLE -->
    <router-link :to="{ name: 'post', params: { id : post.id }}">
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
    </router-link>

    <!-- UP & DOWNVOTES -->
      <div class="col-sm-1 column-content">
        <div class="post-vote-area center-text">
          <i v-on:click.prevent="upvote()" class="fa fa-thumbs-o-up" :class="{'fa-thumbs-up': isUpvoted}" aria-hidden="true"></i><br>
          {{post.rating}}<br>
          <i @click="downvote()" class="fa fa-thumbs-o-down" :class="{'fa-thumbs-down': isDownvoted}" aria-hidden="true"></i>
        </div>
      </div>
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

    computed: {

      isUpvoted()
      {
        return this.post.vote_value === "1"
      },

      isDownvoted()
      {
        return this.post.vote_value === "0"
      },
    },

    methods: {

      upvote()
      {
        this.$http.get('http://localhost/gameforumApi/post/upvote?id=' + this.post.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {
            // Set post = reponse to update vote buttons.
            this.post = response.body[0];
          });
      },

      downvote()
      {
        this.$http.get('http://localhost/gameforumApi/post/downvote?id=' + this.post.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {
            // Set post = reponse to update vote buttons.
            this.post = response.body[0];
          });
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
