var VideoListView = Backbone.View.extend({

//start a initialize function
  //we want to render every data (which should be 5)
    //we get frin
  initialize: function() {
    this.collection.on('sync', this.render, this);  
  
  },

  render: function() {
    
    this.$el.children().detach();
    this.$el.html(this.template());

    //console.log(this.collection);
    console.log(this.collection);
    this.$el.append('<div>Hi</div>');
   // console.log($())
    _.forEach(this.collection.models, function(entry) {
      //console.log(this);
      $('.video-list').append(new VideoListEntryView({model: entry }).render().el);
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
