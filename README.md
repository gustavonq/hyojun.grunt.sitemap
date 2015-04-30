#hyojun.grunt.sitemap

##About

This grunt task is designed to output a sitemap.xml based on file list.

##Config

Example:

```javascript
grunt.initConfig({
	'sitemap': {
		'test' : {
			'host' : grunt.option('host') || '',
			'paths' : ['README.md'],
			'out' : "sitemap.xml"
		}
	}
});
```

Where:

### sitemap

```Object```

This task requires a top level config object called: `sitemap`

Every target must have:

### **target.paths**

`Array`

A list of files that will be added on your sitemap. It uses [grunt.file.expand](http://gruntjs.com/api/grunt.file#grunt.file.expand), so you can set the targets using `dist/**/*.html` instead of adding one by one.

### **target.out**

`String` or `Function`

####When

* **String** the path where your sitemap will be saved.

* **Function** this function will get one param, that is a list of urls.

### **target.host** (optional)

`String`

In different enviroments, you can set the host to be added **before** the `pages`. Following the example above you can define the host via command line:

	grunt sitemap --host=http://my.local:8080/

##How to install

1. `npm install https://bitbucket.org/fbiz/hyojun.grunt.sitemap/get/0.1.0.tar.gz --save-dev`
2. load the task on your gruntfile.js `grunt.loadTasks('node_modules/hyojun.grunt.sitemap/tasks');`
3. create your `sitemap` setup inside your gruntfile.js config.
4. `grunt sitemap`

##Road map

* add 'ignore' property to create more complex rules
