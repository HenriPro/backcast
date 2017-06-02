var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    
    
    this.videos = new Videos(exampleVideoData);
    // this.videoPlayer = new VideoPlayerView(this.videos);
    // this.videoPlayer.render();
    
    this.render();
    
  },


  render: function() {
    this.$el.html(this.template());

    
    this.$el.$()(new VideoPlayerView({
      collection: this.videos
    }).render().el);
    
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
