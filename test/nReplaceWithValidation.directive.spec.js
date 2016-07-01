'use strict';

describe('nReplaceWithValidation.directive', () => {

	const formName 	= 'demoForm';
	const inputText = 'Username';
	const inputName = 'username';

	let $compile, $rootScope, scope, element, controller, form;
	
	beforeEach(() => {
		angular.module('templates', []);
		module('nReplaceWithValidation');
		module('src/nReplaceWithValidation.html');
		
		inject((_$compile_, _$rootScope_) => {
			$compile 	= _$compile_;
			$rootScope 	= _$rootScope_;
			
			scope = $rootScope.$new();

			var html = `
				<form name="${formName}" novalidate>
						<label>
                            <!-- With default messages -->
                            <span n-replace-with-validation
                                  text="${inputText}"
                                  name="${inputName}"></span>
                                  
                            <input name="username" type="text" value="blabla" placeholder="Username" ng-model="demo.user.username" aria-describedby="usernameHelpText" required>
                        </label>				
				</form>
			`;
			
			element 	= $compile(html)(scope);
			controller 	= element.controller;
			form 		= scope[formName];
			
			scope.$apply();
		})
	});

	// What should the feature do?
	it('should have access to the form controller', () => {
		expect(form).toBeDefined();
	});

	// What should the feature do?
	it('should compile the template, with ng-messages', () => {
		expect( element.html() ).toContain('ng-messages');
	});

	// What should the feature do?
	it('should not replace text with validation message, when input is $pristine && !$valid', () => {
		form[inputName].$valid 		= false;
		form[inputName].$error 		= {required: true};
		form[inputName].$pristine 	= true;

		scope.$apply();

		const actual = element.html();

		expect(actual).toContain('class="ng-messages ng-active ng-hide"');
		expect(actual).not.toContain('class="ng-binding ng-hide is-invalid-input"');
	});

	// What should the feature do?
	it('should replace text with validation message, when input is !$pristine && !$valid', () => {
		form[inputName].$valid 		= false;
		form[inputName].$error 		= {required: true};
		form[inputName].$pristine 	= false;

		scope.$apply();

		const actual = element.html();
		expect(actual).toContain('class="ng-binding ng-hide is-invalid-input"');
		expect(actual).not.toContain('class="ng-messages ng-active ng-hide"');
	});

	// What should the feature do?
	it('should not replace text with validation message, when input is $pristine && $valid', () => {
		form[inputName].$valid 		= true;
		form[inputName].$error 		= {};
		form[inputName].$pristine 	= false;

		scope.$apply();

		const actual = element.html();
		expect(actual).not.toContain('Please enter a value for this field. (default)');
		expect(actual).not.toContain('class="ng-binding ng-hide is-invalid-input"');
	});
});