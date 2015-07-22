module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/main.css' : 'assets/css/main.sass'
				}
			}
		},
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/*.js'],
        dest: 'js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    watch: {
			css: {
				files: '**/*.sass',
				tasks: ['sass']
			}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [ 'concat', 'uglify', 'watch']);

};
