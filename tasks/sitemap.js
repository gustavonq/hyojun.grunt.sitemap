module.exports = function(grunt){

	jstoxml = require('jstoxml');

	grunt.registerMultiTask('sitemap',function(){

		var urls = grunt.file.expand(this.data.paths);

		if (!!this.data.host){
			var host = this.data.host;
			urls = urls.map(function(value){
					return host + value;
			});
		}

		if (typeof this.data.out === "string" ){
			var d = new Date();
			d =  d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
			var sitemap = {
				_name : 'urlset',
				_attrs : {
					'xmlns' : "http://www.sitemaps.org/schemas/sitemap/0.9",
				},
				_content : urls.map(function(page){
					return {
						'url' : {
							'loc' : page,
							'lastmod' :d
							}
					};
				})
			};
			grunt.file.write(this.data.out, jstoxml.toXML(sitemap,{header:true}));
		} else if (typeof this.data.out === "function" ){
				this.data.out(urls);
		} else {
			grunt.fail.fatal('you must set "out" param to this task');
		}

	});
}

