<template>

  <div>

    <nav-bar></nav-bar>

    <div class="description-box">

        <div class="post-title">
          Post Title
        </div><br><br>

        <div class="post-description">
          Post Description... Awesome!
        </div><br>


      <span class="span-info"><b>Author:</b> Bob squash -- <b>Posted:</b> 2017/11/09 14:23</span>

    </div>

    <button :disabled="favoriteLoading" @click="toggleFavorite">{{favoriteButtonTxt}}</button>

    <br>
    <br>

    <button @click="toggleShowWriteComment">{{hideCommentButtonTxt}}</button><br><br>
    <div v-if="showWriteComment">
      <textarea v-model="comment" rows="4" cols="50" name="comment" placeholder="Enter comment here..."></textarea><br>
      <button  @click="postComment">Comment</button><br>
      <br>
    </div>

    <h5 style="margin-left: 10px; font-style: italic">Comments:</h5>
    <div>
      <comment-object class="post-container container" v-for="comment in comments" :comment="comment" :key="comment.id"></comment-object>
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
        favoriteButtonTxt: "Favorite",
        comment: null,
      }
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

        if(this.post.favorite == null || !this.post.favorite)
        {
          this.post.favorite = true;
          this.$http.get('http://localhost/gameforumApi/post/favorite?id=' + this.post.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
            .then(function (response) {
              this.favoriteLoading = false;
              this.favoriteButtonTxt = 'Un-Favorite';
            });
        }
        else
        {
          this.post.favorite = false;
          this.$http.get('http://localhost/gameforumApi/post/unfavorite?id=' + this.post.id, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
            .then(function (response) {
              this.favoriteLoading = false;
              this.favoriteButtonTxt = 'Favorite';
            });
        }
      },

      postComment()
      {
        this.$http.post('http://localhost/gameforumApi/comment/create', this.comment, {headers: {'Authorization': 'Token=' + localStorage.getItem("token")}})
          .then(function (response) {

            console.log(response);

            var tempCommentObject = {
              id: 313,
              body: this.comment,
            }

            this.comments.push(tempCommentObject);
            this.comment = null;
          });
      },
    },

    mounted() {

      // load specific "post" from route params
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + 1)
        .then(function(response){

          this.post = response.body;

        });
//      // load specific "post" from route params
//      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
//        .then(function(response){
//
//          this.post = response.body;
//
//        });

      // load comments - TODO: add post id to get its comments
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){

          this.comments = response.body;

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

  /*.column-content {*/
    /*margin-top: 14px;*/
  /*}*/

  .column-content span {
    font-size: 11px;
  }


</style>
