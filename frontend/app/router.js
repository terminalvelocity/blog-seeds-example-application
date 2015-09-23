import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");

  this.route("login");
  this.route("signup");

  this.route("posts", function() {
    this.route("show", {
      path: ":post_id"
    });
  });

  this.route("admin", function() {
    this.route("posts", function() {
      this.route("new");
      this.route("edit", {
        path: ":post_id/edit"
      });
    });
  });

  this.route("comments", function() {
    this.route("new");
    this.route("edit", {
      path: ":comment_id/edit"
    });
    this.route("show", {
      path: ":comment_id"
    });
  });
});

export default Router;