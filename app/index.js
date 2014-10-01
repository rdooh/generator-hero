'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var HeroGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the kickass Hero generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },
  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('src');
      this.dest.mkdir('src/app');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_Gruntfile.js', 'Gruntfile.js');
      this.src.copy('src/app/_app.coffee', 'src/app/app.coffee');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('gitignore', '.gitignore');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = HeroGenerator;
