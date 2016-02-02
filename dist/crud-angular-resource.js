angular.module('mra.crudResource', ['ngResource']);
var crudService = (function () {
    function crudService(ngResourceService) {
        this.ngResourceService = ngResourceService;
        this.updateAction = {
            method: 'PUT',
            isArray: false
        };
    }
    crudService.prototype.resource = function (restURL, parameterID) {
        var resourceClass = this.ngResourceService(restURL, parameterID, {
            update: this.updateAction
        });
        return resourceClass;
    };
    crudService.$inject = ['$resource'];
    return crudService;
})();
angular.module('mra.crudResource').service('crudService', crudService);
//# sourceMappingURL=crud-angular-resource.js.map