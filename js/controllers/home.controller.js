let HomeController = function ($scope, SC, $http, $sce) {

  let url = 'http://api.soundcloud.com/tracks?client_id=' + SC;

  $scope.search = (query) => {
    console.log(query);

    query =  encodeURI(query);
    // Get request
    $http.get(url + '&q=' + query).then( (res) => {
      console.log(res);

      $scope.songs = res.data;
    });

  };

  $scope.playMe = (song) => {
    $scope.audio = $sce.trustAsResourceUrl(song.stream_url + '?client_id=' + SC);
    $scope.playing = song;
  };


};

HomeController.$inject = ['$scope', 'SC', '$http', '$sce'];

export default HomeController;