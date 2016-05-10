angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('CameraCtrl', function($scope, $cordovaCamera) {
  
  
  
   
  $scope.pictureUrl = ' http://placehold.it/300x300';
    
  $scope.takePicture = function() {
      var options = {
           destinationType: Camera.DestinationType.DATA_URL,
      
          encodingType: Camera.EncodingType.JPEG
      }
      
      
      $cordovaCamera.getPicture(options)
      .then(function(data) {
          console.log('camera data: ' + angular.toJson(data));
          $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
      }, function(error){
          console.log('camera error: ' + angular.toJson(data));
      });
  };
     
})







.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
    
    
  
});
