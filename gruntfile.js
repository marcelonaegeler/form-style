module.exports = function ( grunt ) {

	grunt.initConfig({
		stylus: {
			compile: {
				files: {
					'stylesheets/compiled/main.min.css': 'stylesheets/stylus/base.styl'
				}
			}
		}
		, watch: {
			scripts: {
				files: 'stylesheets/stylus/*.styl'
				, tasks: [ 'stylus' ]
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-stylus' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'default', [ 'watch', 'stylus' ] );

};