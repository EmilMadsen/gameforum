<template>

  <!-- TITLE & DESCRIPTION -->
  <div class="row">
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
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><br>
        {{comment.rating}}<br>
        <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
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
