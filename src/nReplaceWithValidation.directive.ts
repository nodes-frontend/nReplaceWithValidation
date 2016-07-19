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

        static $inject: Array<string> = ['$sce', '$exceptionHandler', 'nReplaceWithValidationConfig'];
        constructor(private $sce: any,
                    private $exceptionHandler: any,
                    private nReplaceWithValidationConfig: INReplaceWithValidationProvider) {

            // Extend messages with config (defaults)
            this.messages = angular.extend({}, nReplaceWithValidationConfig.config, this.messages);

            // Make sure fallback exists
            if( !this.messages.hasOwnProperty('fallback') ) {
                this.messages.fallback = 'This will be used if error message is not configured. (default)';
            }

            // HTML support
            for(let message in this.messages) {
                this.messages[message] = this.$sce.trustAsHtml(this.messages[message]);
            }

        }
        
        private useFallback(): boolean {
            return !this.messages[ Object.keys(this.input.$error)[0] ] && this.input.$invalid;
        }
    }

    angular
        .module('nReplaceWithValidation')
        .directive('nReplaceWithValidation', NReplaceWithValidation.instance);
}