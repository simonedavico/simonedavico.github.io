angular.module('davico.simone.webpage.nav', [])

.service('navigationItems', function(){
    var navigationItems = [];

    this.register = function(item){
        navigationItems.push('/'+item);
    }

    this.items = function(){
        return navigationItems;
    }

    this.indexOf = function(item) {
        return navigationItems.indexOf(item);
    }
})

/*
 *  Toggles an 'active' class if element has id matching with $location.end
 */
.directive('navItem', function(navigationItems){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {


            navigationItems.register(attrs.id);

            scope.$on('$locationChangeStart', function(event,next,current){
                elem.removeClass('active');
                if(next.endsWith(attrs.id))  {
                    elem.toggleClass('active');
                }
            })
        }
    }
})
