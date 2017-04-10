
module.exports = function(grunt) {
  "use strict"
  
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    banner: "/*!\n" +
                " * CSS-Util v<%= pkg.version %> (<%= pkg.homepage %>)\n" +
                " * Copyright <%= grunt.template.today('yyyy') %> <%= pkg.author %>\n" +
                " * Licensed under <%= pkg.license %>\n" +
                " */\n",
    sass: {
      expanded: {
        options: {
          outputStyle: "expanded"
        },
        files: {
          "dist/<%= pkg.name %>.css" : "src/scss/master.scss"
        }
      },
      compressed: {
        options: {
          outputStyle: "compressed"
        },
        files: {
          "dist/<%= pkg.name %>.min.css" : "src/scss/master.scss"
        }
      }
    },
    stamp: {
      options: {
        banner: '<%= banner %>'
      },
      project: {
        files: {
          src: 'dist/*'
        }
      }
    },
    watch: {
      scss: {
        files: ["src/scss/**/*.scss"],
        tasks: ["sass:dev"]
      }
    }
  })

  require("load-grunt-tasks")(grunt)
  require("time-grunt")(grunt)

  grunt.registerTask("default", ["sass", "stamp"])
}

