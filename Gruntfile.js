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
        src: ['assets/js/main.js'],
        dest: 'assets/js/main.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'assets/js/main.min.js': ['<%= concat.dist.dest %>']
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
  grunt.registerTask('parrot', [ 'concat', 'uglify', 'watch']);

};
