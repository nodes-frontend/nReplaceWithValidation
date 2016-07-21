namespace nReplaceWithValidation {
    'use strict';

    interface INReplaceWithValidationScope {
        name: string,
        text: string
        messages: any
    }

    const controllerAs: string = 'nReplaceWithValidation';

    class NReplaceWithValidation implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NReplaceWithValidation();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, formController: ng.IFormController) => void = this.linkFn;
        controller: ComponentDirectiveController = ComponentDirectiveController;
        restrict: string = 'A';
        templateUrl: string = 'src/nReplaceWithValidation.html';
        controllerAs: string = controllerAs;
        replace: boolean = true;
        require: string = '^form';

        scope: INReplaceWithValidationScope = {
            name: '@',
            text: '@',
            messages: '=?'
        };

        private linkFn(scope: any, element: any, attrs: any, formController: any) {
            scope[controllerAs].input = formController[attrs.name];
        }
    }

    class ComponentDirectiveController {
        private messages: any;
        private input: any;

        static $inject: Array<string> = ['$scope', '$sce', 'nReplaceWithValidationConfig'];
        constructor(private $scope: any,
                    private $sce: any,
                    private nReplaceWithValidationConfig: INReplaceWithValidationProvider) {

            // Extend messages with config (defaults)
            this.messages = angular.extend({}, nReplaceWithValidationConfig.config, this.messages);

            // Make sure fallback exists
            if( !this.messages.hasOwnProperty('fallback') ) {
                this.messages.fallback = 'This will be used if error message is not configured. (default)';
            }

            // HTML support
            for(let message in this.messages) {
                if(typeof this.messages[message] === 'string') {
                    this.messages[message] = this.$sce.trustAsHtml(this.messages[message]);
                }
            }
            
            // Make sure all needed messages exists in this.messages otherwise create fallback
            let self = this;
            this.$scope.$watchCollection('nReplaceWithValidation.input.$validators', (newValue) => {
                if(!newValue) return;

                for(var validator in newValue) {

                     if( !self.messages.hasOwnProperty(validator) ) {
                         self.messages[validator] = self.messages.fallback;
                     }

                }
            });
        }
    }

    angular
        .module('nReplaceWithValidation')
        .directive('nReplaceWithValidation', NReplaceWithValidation.instance);
}