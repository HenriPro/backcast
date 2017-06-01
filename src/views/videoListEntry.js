var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  render: function() {
    //console.log(this);
    // console.log(this.template(this.model.toJSON()));
    //console.log(this.template(this.model));
    this.$el.html(this.template({snippet: this.model}));
    return this;
  },

  handleClick: function() {
    console.log('hi');
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
