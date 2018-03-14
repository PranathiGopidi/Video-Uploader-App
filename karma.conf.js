module.exports = function(config) {
    config.set({  
      basePath: './client/app',  
      files: [                
        '../../node_modules/jquery/dist/jquery.js',                                     // jquery
        '../../node_modules/angular/angular.js',                                        // angular
        '../../node_modules/angular-ui-router/release/angular-ui-router.js',            // ui-router
        '../../node_modules/angular-mocks/angular-mocks.js',                            // loads our modules for tests        
        'https://blueimp.github.io/jQuery-File-Upload/css/style.css',                   //Blueimp plugin
        'https://blueimp.github.io/Gallery/css/blueimp-gallery.min.css',
        'https://blueimp.github.io/jQuery-File-Upload/css/jquery.fileupload.css',
        'https://blueimp.github.io/jQuery-File-Upload/css/jquery.fileupload-ui.css',
        'https://fast.wistia.com/assets/external/E-v1.js',                              //Wistia Video Player API
        'https://blueimp.github.io/jQuery-File-Upload/js/vendor/jquery.ui.widget.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.iframe-transport.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload-process.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload-image.js',
        'https://blueimp.github.io/jQuery-File-Upload/js/jquery.fileupload-angular.js',
        './uploader.js',                                                                // our angular app
        './uploader.spec.js'                                                            // our test file for our Uploader
      ],  
      autoWatch: true,  
      frameworks: ['jasmine'],  
      browsers: ['IE'],  
      plugins: [
        'karma-ie-launcher',        
        'karma-chrome-launcher',        
        'karma-jasmine',
        'karma-junit-reporter'
      ],  
      junitReporter: {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
      }  
    });
  };