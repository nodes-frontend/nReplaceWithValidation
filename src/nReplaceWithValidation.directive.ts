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
        private messages: Object;

        static $inject: Array<string> = ['nReplaceWithValidationConfig'];
        constructor(private nReplaceWithValidationConfig: INReplaceWithValidationProvider) {
            this.messages = angular.extend({}, nReplaceWithValidationConfig.config, this.messages);
        }
    }

    angular
        .module('nReplaceWithValidation')
        .directive('nReplaceWithValidation', NReplaceWithValidation.instance);
}