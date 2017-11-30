<template>

  <!-- TITLE & DESCRIPTION -->
  <div class="row">
    <div class="col-sm-11 column-content">
      <div>
        <!--<h6>{{ truncateLine(comment.content, 35) }}</h6>-->
        <h6><b>Written by:</b> Squash Bob - 01/01/2017 11:12</h6>
        <h5>{{comment.body}}</h5>
      </div>
    </div>

    <!-- Upvote / Downvote -->
    <div class="col-sm-1 column-content">
      votes..
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

  .column-content {
    height: 80px;
  }



</style>
