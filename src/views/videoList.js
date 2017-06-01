var VideoListView = Backbone.View.extend({

//start a initialize function
  //we want to render every data (which should be 5)
    //we get frin
  initialize: function() {
    this.collection.on('sync', this.render, this);  
  
  },

  render: function() {
    _.forEach(this.collection.models, function(entry) {
      new VideoListEntryView(entry).render();
    });

    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
