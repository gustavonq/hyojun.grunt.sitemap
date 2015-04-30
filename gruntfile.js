module.exports = function(grunt) {
	grunt.initConfig({
		'sitemap': {
			'test' : {
				'host' : grunt.option('host') || '',
				'paths' : ['README.md'],
				'out' : "sitemap.xml"
			}
		}
	});
	grunt.loadTasks('tasks');
	grunt.registerTask('default',['sitemap']);
};
