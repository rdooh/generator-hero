var Yeoman = require('yeoman-generator');

module.exports = Yeoman.generators.Base.extend({
  startUp: function() {
    this.config.save();
  },
  createGruntfile: function(){
    this.src.copy('Gruntfile.js', 'Gruntfile.js');
  },
  copyPackageJson: function(){
    this.src.copy('package.json', 'package.json');
  },
  setUpNpm: function(){
    var done = this.async();
    this.npmInstall(['moment'], { 'saveDev': true }, done);
  }
  
  
});