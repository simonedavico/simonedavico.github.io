angular.module('davico.simone.webpage.utilities', [])

.service('AgeCalculator', function(){

        //13th January 1991
        var birthday = new Date(1991, 0, 13);

        this.getAge = function() {
            var today = new Date();
            var age = today.getFullYear() - birthday.getFullYear();
            var m = today.getMonth() - birthday.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
                age--;
            }
            return age;
        }
})

.service('SocialMedia', function(){
    this.media = [
        { icon: 'fa-facebook', link: 'https://www.facebook.com/simonedavico' },
        { icon: 'fa-twitter', link: 'https://www.twitter.com/simonedavico'},
        { icon: 'fa-google-plus', link: 'https://plus.google.com/+SimoneDAvico'},
        { icon: 'fa-codepen', link: 'http://codepen.io/simonedavico/'},
        { icon: 'fa-github', link: 'http://github.com/simonedavico'},
        { icon: 'fa-stack-overflow', link: 'http://stackoverflow.com/users/3301102/link'}
    ]
})

.service('MapData', function(){
    this.map = {
        center: {
            latitude: 46.01425,
            longitude: 8.948669
        },
        zoom: 15,
        draggable: false,
        options: {
            zoomControl: false,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles:
                [
                    {
                        stylers: [
                            { hue: '#ff1a00' },
                            { invert_lightness: true },
                            { saturation: -100  },
                            { lightness: 40 },
                            { gamma: 0.5 }
                        ]
                    },{
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#2D333C' }
                    ]
                }
                ]
        }
    };

    this.marker = {
        id: 1,
            coords: {
            latitude: 46.0159441,
                longitude: 8.9588178
        },
        options: {
            icon: 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png'
//            icon: {
//                path: 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
//                fillColor: '#25b5f1',
//                fillOpacity: 1,
//                strokeColor: '',
//                strokeWeight: 0,
//                scale: 1/2
//            }
        }
    };
})
