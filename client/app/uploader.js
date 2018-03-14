angular.module("application", []).component("uploader",{
    templateUrl: 'uploader.html',
    controller: uploaderController    
});

function uploaderController($scope){      
    $scope.title = 'Video Upload App';
    $scope.message = '';    
    var urlWistia = 'https://upload.wistia.com/?api_password=';
    var apiPassword = '8e70ebc97a08291f034510f57ca45fa0a7766f6b7f74e7c90f1e82bca87513d3';
    $scope.cssprogress = { 'width' : '0%', background : '#eaff00'};    
  
    angular.element('#fileupload').fileupload({                        
        url : urlWistia + apiPassword,        
        add: function (e, data) {                               
            data.submit();
        },
        start: function(e){            
            $scope.cssprogress = {'width' : '0%', background : '#eaff00'};                        
            $scope.message = 'Uploading file...';         
            $scope.$apply();
        },
        progress: function (e, data) {          
            var progress = parseInt(data.loaded / data.total * 100, 10);            
            $scope.cssprogress = {'width' : progress + '%', background : '#eaff00'};
            $scope.$apply();
        },
        done: function (e, data) {                                                                
            $scope.cssprogress = {'width' : '100%', background : '#5cb85c'};       
            var container = angular.element(document.querySelector('#video-container'));
            container.append('<div class="wistia_embed wistia_async_' + data.result.hashed_id + ' video-item"></div>');            
            $scope.message = 'Your file has been uploaded!';
            $scope.$apply();            
        },
        fail: function(e, data){                        
            $scope.cssprogress = {'width' : '100%', background : 'red'};
            $scope.message = 'An error has occurred: "' + data.errorThrown + '".' + ' Please check if Wistia account exceeded uploaded videos limit.';
            $scope.$apply();
        }
    });  
}