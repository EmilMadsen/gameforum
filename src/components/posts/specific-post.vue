<template>

  <div>

    <nav-bar></nav-bar>

    <!-- IF LOADING -->
    <div v-if="contentLoading" class="loader">

      <span style="margin: 0 auto; display: table;"><b>Loading...</b></span>

      <img style="display: block; margin: 0 auto; width: 10%;" src="../../assets/loader.svg">
      <div class="clearfix"></div>

      <span style="margin: 0 auto; display: table; font-style: italic">Constructing Additional Pylons...</span>

    </div>

    <!-- ELSE SHOW CONTENT -->
    <div v-else>

          <div class="description-box">

            <span class="description-title">Title:</span><br>
            <div class="post-title">
              {{post.title}}
            </div><br><br>

            <span class="description-title">Description:</span>
            <div class="post-description">
              {{post.description}}
            </div><br>


            <span class="span-info"><b>Posted by:</b> {{post.author}} -- <b></b> {{post.created_date}}</span>

          </div>

          <button :disabled="favoriteLoading" @click="toggleFavorite">{{favoriteButtonText}}</button>

          <br>
          <br>

          <button @click="toggleShowWriteComment">{{hideCommentButtonTxt}}</button><br><br>
          <div v-if="showWriteComment">
            <textarea v-model="comment" rows="4" cols="50" name="comment" placeholder="Enter comment here..."></textarea><br>
            <button  @click="postComment">Comment</button><br>
            <br>
          </div>

          <h5 style="margin-left: 10px; font-style: italic">Comments sorted by date:</h5>
          <div v-if="comments.length > 0">
            <comment-object class="post-container container" v-for="comment in comments" :comment="comment" :key="comment.id"></comment-object>
          </div>
          <div v-else>
            ...No comments yet
          </div>

    </div>




  </div>

</template>
<script>

  import NavBar from '../shared/nav-bar.vue'
  import CommentObject from '../comments/comment-object.vue'

  export default {

    components: {
      'nav-bar': NavBar,
      'comment-object': CommentObject
    },

    data () {
      return {
        favoriteLoading: false,
        comments: [],
        post: {},
        showWriteComment: false,
        hideCommentButtonTxt: 'Write Comment',
        comment: null,
        contentLoading:  true,
      }
    },

    computed: {

      favoriteButtonText()
      {
        if(this.post.favorite == "1") return 'Un-Favorite';

        return 'Favorite';
      },

    },


    methods: {

      toggleShowWriteComment()
      {
        this.showWriteComment = !this.showWriteComment;
        if (!this.showWriteComment) this.hideCommentButtonTxt = 'Write Comment';
        else this.hideCommentButtonTxt = 'Hide';
      },

      capitalizeFirstLetter(string) {
        if(!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
      },

      truncateLine(existingInput, length)
      {
        if (existingInput.length < length ) return existingInput;
        return existingInput.substring(0,length) + '..';
      },

      toggleFavorite()
      {
        // to disable button, while loading..
        this.favoriteLoading = true;

        if(this.post.favorite == "0")
        {
          this.post.favorite = true;
          this.$http.get('http://localhost/gameforumApi/post/favorite?id=' + this.post.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
            .then(function (response) {
              this.favoriteLoading = false;
              this.post.favorite = "1";
            });
        }
        else
        {
          this.post.favorite = false;
          this.$http.get('http://localhost/gameforumApi/post/unfavorite?id=' + this.post.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
            .then(function (response) {
              this.favoriteLoading = false;
              this.post.favorite = "0";
            });
        }
      },

      postComment()
      {

        var commentObject = {
            post_id: this.post.id,
            content: this.comment
        };

        this.$http.post('http://localhost/gameforumApi/comment/create', commentObject, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {

              this.comments.push(response.body[0]);
              this.comment = null;
          });
      },
    },

    mounted() {

      // load specific "post" from route params
      this.$http.get('http://localhost/gameforumApi/post/specific?id=' + this.$route.params.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
        .then(function(response){

          console.log(response);

          this.post = response.body.post;
          this.comments = response.body.comments;
          this.contentLoading = false;

        });
    }
  }
</script>
<style>

  body {
    font-family: Arial;
    background-color: #c3c3c352;
    padding: 0px;
  }

  h4 {
    margin-top: 3px;
  }

  .font-style {
    font-size: 32px;
    color: lightgray;
  }

  .span-info {
    font-size: 11px;
    margin: 0 0 10px 20px;
    font-style: italic;
  }

  /*.column-content {*/
    /*margin-top: 14px;*/
  /*}*/

  .column-content span {
    font-size: 11px;
  }


</style>
