angular.module('mra.crudResource', ['ngResource']);

interface ICRUDService {
    resource<T>(restURL: string, parameterID: any): ICrudResourceClass<T>;  
}

interface ICrudResourceClass<T> extends ng.resource.IResourceClass<T> {
    update(data: Object): T;
} 

class crudService implements ICRUDService {
    static $inject = ['$resource'];

    constructor(private ngResourceService: ng.resource.IResourceService) {
        
    }

    updateAction: ng.resource.IActionDescriptor = {
        method: 'PUT',
        isArray: false
    }
    
    resource<T>(restURL: string, parameterID: any): ICrudResourceClass<T> {
        var resourceClass = <ICrudResourceClass<T>>this.ngResourceService<T>(restURL, parameterID, {
            update: this.updateAction
        });
        return resourceClass;
    }
}

angular.module('mra.crudResource').service('crudService', crudService);