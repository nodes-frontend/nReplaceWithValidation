namespace nReplaceWithValidation {

    export interface INReplaceWithValidationProviderConfig {
        required: string,
        minlength: string,
        maxlength: string,
        email: string
    }

    export interface INReplaceWithValidationProvider {
        config: Object
    }

    export class NReplaceWithValidationProvider {
        static $inject: Array<string> = [];
        constructor() {}

        private config: INReplaceWithValidationProviderConfig = {
            required: 'Please enter a value for this field. (default)',
            minlength: 'Please enter a value for at least 6 characters long (default)',
            maxlength: 'This field can be at most 15 characters long. (default)',
            email: 'This field must be a valid email address. (default)'
        };

        configure(config: INReplaceWithValidationProviderConfig) {
            if(!arguments[0]) {
                return this.config;
            } else {
                angular.extend(this.config, config);
            }
        }

        $get: () => { config: INReplaceWithValidationProviderConfig } = () => { return { config: this.config }; }
    }

    angular
        .module('nReplaceWithValidation')
        .provider('nReplaceWithValidationConfig', NReplaceWithValidationProvider);
}