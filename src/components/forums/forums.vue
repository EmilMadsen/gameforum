<template>

  <div>
    <div class="forum-title">
      {{capitalizeFirstLetter(test.game.title)}}
    </div>


    <br>
    <br>

    <h5 style="margin-left: 10px">Forums:</h5>

    <div>
        <div v-for="forum in forums" class="post-container row container">

            <!-- ICON && TITLE -->
            <div class="col-sm-3 column-content">
                <!--<div class="font-style">-->
                    <!--<i class="fa fa-tasks"></i>-->
                <!--</div>-->
                <div>
                    <h4>Forum Title</h4>
                    <h6>{{ truncateLine(forum.title, 35) }}</h6>
                </div>
            </div>

            <!-- POST & COMMENT COUNT -->
            <div class="col-sm-3 column-content">
              <span>222 comments</span> <br>
              <span>321 posts</span> <br>
              <span>created 22 days ago</span>
            </div>

            <!-- LATEST COMMENT -->
            <div class="col-sm-3 column-content">
              latest comment
            </div>

            <!-- UP & DOWNVOTES -->
            <div class="col-sm-3 column-content">
              votes
            </div>

        </div>
    </div>


  </div>

</template>
<script>
  export default {

    data () {
      return {
        forums: [],
        test: this.$route.params
      }
    },

    methods: {

      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      truncateLine(existingInput, length)
      {
        if (existingInput.length < length ) return existingInput;
        return existingInput.substring(0,length) + '..';
      },
    },

    mounted() {

      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){

          this.forums = response.body;

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

  .forum-title {
    display: inline-block;
    font-size: 18px;
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
