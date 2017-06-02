var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  render: function() {
    console.log(this.model);
    
    this.$el.html(this.template(this.model));
    return this;
  },


  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
