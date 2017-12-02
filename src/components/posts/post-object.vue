<template>

  <div class="post-highligting post-entry">
    <router-link :to="{ name: 'post', params: { id : post.id }}">

      <!-- ICON && TITLE -->
      <div class="col-sm-4 column-content">
        <!--<div class="font-style">-->
        <!--<i class="fa fa-tasks"></i>-->
        <!--</div>-->
        <div>
          <h4>{{ truncateLine(post.title, 35) }}</h4>
          <h6>{{ truncateLine(post.description, 35) }}</h6>
        </div>
      </div>

      <!-- COMMENT COUNT -->
      <div class="col-sm-2 column-content">
        <span>{{post.commentCount}} comments</span> <br>
        <span>created 22 days ago</span>
      </div>

      <!-- LATEST COMMENT -->
      <div class="col-sm-5 column-content">
        <span><b>latest comment by email@meme.com</b></span><br>
        <span style="font-style: italic">{{truncateLine("Why is this game so bad? Back in my days games were not supposed to be bad right out of the box", 85) }}</span>
      </div>

      <!-- UP & DOWNVOTES -->
      <div class="col-sm-1 column-content">
        <div class="post-vote-area">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><br>
          1332<br>
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
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

      truncateLine(existingInput, length)
      {
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

  .vote-area {
    padding-top: 10px;
  }

  .column-content {
    height: 80px;
  }



</style>
