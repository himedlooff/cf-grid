module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * LESS: https://github.com/gruntjs/grunt-contrib-less
     * 
     * Compile LESS files to CSS.
     */
    less: {
      legacy: {
        options: {
          paths: ["src"],
          yuicompress: false
        },
        files: {
          'dist/ghost.css': ['src/ghost-legacy.less'],
          'src/examples/grid/static/example.css': ['src/examples/grid/static/example.less']
        }
      }
    },

    /**
     * Concat: https://github.com/gruntjs/grunt-contrib-concat
     * 
     * Concatenate files.
     */
    concat: {
      dist: {
        src: ['src/ghost.less'],
        dest: 'dist/ghost.less'
      }
    }

  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('default', ['less', 'shell', 'concat']);

};
