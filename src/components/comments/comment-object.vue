<template>

  <!-- TITLE & DESCRIPTION -->
  <div class="row" :class="{'post-highligting': comment.author_role}">
    <div class="col-sm-11 column-content">
      <div>
        <!--<h6>{{ truncateLine(comment.content, 35) }}</h6>-->
        <h6><b>Written by:</b> {{comment.author}} - {{comment.created_date}}</h6>
        <h5>{{comment.description}}</h5>
      </div>
    </div>

    <!-- Upvote / Downvote -->
    <div class="col-sm-1 column-content">
      <div class="vote-area center-text">
        <i @click="upvote" class="fa fa-thumbs-o-up" :class="{'fa-thumbs-up': isUpvoted}" aria-hidden="true"></i><br>
        {{comment.rating}}<br>
        <i @click="downvote" class="fa fa-thumbs-o-down" :class="{'fa-thumbs-down': isDownvoted}" aria-hidden="true"></i>
      </div>
    </div>
  </div>

</template>
<script>
  export default {

    props: {

      comment: {

        required: true,
        type: Object

      },
    },

    computed: {

        isUpvoted()
        {
            return this.comment.vote_value === "1"
        },

        isDownvoted()
        {
          return this.comment.vote_value === "0"
        },
    },

    methods: {

      upvote()
      {
        this.$http.get('http://localhost/gameforumApi/comment/upvote?id=' + this.comment.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {
            // Set comment = reponse to update vote buttons.
            this.comment = response.body[0];
          });
      },

      downvote()
      {
        this.$http.get('http://localhost/gameforumApi/comment/downvote?id=' + this.comment.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {
            // Set comment = reponse to update vote buttons.
            this.comment = response.body[0];
          });
      }

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
