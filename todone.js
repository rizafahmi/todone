Todones = new Meteor.Collection('todones');

if (Meteor.isClient) {
  Template.TodonePanel.helpers({
    'items': function(){
      return Todones.find();
    }
  });
}

if (Meteor.isServer) {
}
