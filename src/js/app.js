angular.module('davico.simone.webpage', [
                                         'ngRoute',
                                         'ngAnimate',
                                         'google-maps',
                                         'davico.simone.webpage.utilities',
                                         'davico.simone.webpage.nav'
                                        ])

.controller('MainController', function($scope, navigationItems){

    this.effect = 'slideup';
    //var self = this;

    //sometimes buggy, why?
//    $scope.$on('$locationChangeStart', function(event, next, current){
//        console.log(next,current);
//        next = next.split('#')[1];
//        current = current.split('#')[1];
//        console.log(navigationItems.items())
//        self.effect = navigationItems.indexOf(next) > navigationItems.indexOf(current) ?
//                      'slideup' : 'slidedown';
//    })
})

.config(function($routeProvider){

        /* String.prototype.endsWith polyfill
         * put this in its own file
         */
        if (!String.prototype.endsWith) {
            Object.defineProperty(String.prototype, 'endsWith', {
                value: function (searchString, position) {
                    var subjectString = this.toString();
                    if (position === undefined || position > subjectString.length) {
                        position = subjectString.length;
                    }
                    position -= searchString.length;
                    var lastIndex = subjectString.indexOf(searchString, position);
                    return lastIndex !== -1 && lastIndex === position;
                }
            });
        }

        $routeProvider
            .when('/profile', {
                templateUrl: 'src/views/profile.html'
            })
            .when('/about', {
                templateUrl: 'src/views/about.html',
                controller: function(AgeCalculator){
                    this.myAge = AgeCalculator.getAge();
                },
                controllerAs: 'about'
            })
            .when('/resume', {
                templateUrl: 'src/views/resume.html'
            })
            .when('/contacts', {
                templateUrl: 'src/views/contacts.html',
                controller: function(MapData, SocialMedia){
                    this.street = 'Via Vignola 14';
                    this.city = 'Lugano, 6900';
                    this.phone = '+41 76 277 2417';
                    this.email = 'simonedavico (at) gmail (dot) com';

                    this.socialMedia = SocialMedia.media;
                    this.map = MapData.map;
                    this.marker = MapData.marker;
                },
                controllerAs: 'contacts'
            })
            .otherwise({
                redirectTo: '/profile'
            })
})
