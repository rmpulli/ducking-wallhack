'use strict';

angular.module('angularImageStoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function loadImageToCanvas(e) {
      var fileReader = new FileReader();
      var canvas = document.getElementById('imageCanvas');
      var ctx = canvas.getContext('2d');

      fileReader.onload = function(event){
        var img = new Image();
        img.onload = function(){
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img,0,0);
        };
        // setting the image src here and setting the imageBase64 as well
        img.src = event.target.result;
        $scope.imageBase64 = event.target.result;
        $scope.$apply();
      };
      fileReader.readAsDataURL(e.files[0]);
    }

    $scope.imageBase64 ='';
    $scope.loadImage = loadImageToCanvas;
  });
