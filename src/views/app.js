var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // this.videoPlayer = new VideoPlayerView(this.videos);
    // this.videoPlayer.render();
    this.render();
    
  },


  render: function() {
    new VideoPlayerView({
      collection: this.videos
    }).render();
    new VideoListView({
      collection: this.videos
    }).render();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
