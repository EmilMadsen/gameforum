<template>

  <div>

    <div class="post-title">
      Comment Title
    </div>

    <div class="post-description">
      Comment Description... Awesome!
    </div>


    <br>
    <br>

    <h5 style="margin-left: 10px; font-style: italic">Comments:</h5>

    <div>
      <div v-for="comment in comments" class="post-container row container">

        <!-- ICON && TITLE -->
        <div class="col-sm-3 column-content">
          <!--<div class="font-style">-->
          <!--<i class="fa fa-tasks"></i>-->
          <!--</div>-->
          <div>
            <h4>Comment Title</h4>
            <h6>{{ truncateLine(comment.title, 35) }}</h6>
          </div>
        </div>

        <!--&lt;!&ndash; COMMENT COUNT &ndash;&gt;-->
        <!--<div class="col-sm-3 column-content">-->
          <!--<span>222 comments</span> <br>-->
          <!--<span>created 22 days ago</span>-->
        <!--</div>-->

        <!--&lt;!&ndash; LATEST COMMENT &ndash;&gt;-->
        <!--<div class="col-sm-3 column-content">-->
          <!--<span><b>latest comment by email@meme.com</b></span><br>-->
          <!--<span style="font-style: italic">{{truncateLine("Why is this game so bad? Back in my days games were not supposed to be bad right out of the box", 85) }}</span>-->
        <!--</div>-->

        <!--&lt;!&ndash; UP & DOWNVOTES &ndash;&gt;-->
        <!--<div class="col-sm-3 column-content">-->
          <!--votes-->
        <!--</div>-->

      </div>
    </div>


  </div>

</template>
<script>
  export default {

    data () {
      return {
        comments: [],
        post: {},
//        test: this.$route.params
      }
    },

    methods: {

      capitalizeFirstLetter(string) {
        if(!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      truncateLine(existingInput, length)
      {
        if (existingInput.length < length ) return existingInput;
        return existingInput.substring(0,length) + '..';
      },
    },

    mounted() {

      // load specific "post" from route params
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
        .then(function(response){

          this.post = response.body;

        });

      // load comments - TODO: add post id to get its comments
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){

          this.comments = response.body;

        });
    }
  }
</script>
<style scoped>

  h4 {
    margin-top: 3px;
  }

  .font-style {
    font-size: 32px;
    color: lightgray;
  }

  .post-title {
    display: inline-block;
    font-size: 18px;
    border: solid;
    padding: 10px;
    margin: 0 0 30px 10px;
    border-width: 2px;
  }

  .post-description {
    display: table;
    font-size: 12px;
    border: solid;
    padding: 10px;
    margin: 0 0 30px 10px;
    border-width: 2px;
  }

  .post-container {
    height: 90px;
    border-bottom: solid;
    border-width: 1px;
    border-color: lightgray;
  }
  .post-container:first-child {
    border-top: solid;
    border-width: 1px;
    border-color: lightgray;
  }

  .column-content {
    margin-top: 14px;
  }

  .column-content span {
    font-size: 11px;
  }


</style>
