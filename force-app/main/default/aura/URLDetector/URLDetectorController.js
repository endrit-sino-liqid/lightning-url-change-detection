({
    handleRouteChange : function(component, event, helper) {
        console.log('Route Change Handler fired!');
        component.set('v.routeChangeDetectedResult', JSON.stringify(event));
    },
    handleLocationChange : function(component, event, helper) {
        console.log('Location Change Handler fired!');
        const loc = event.getParam('token');
        component.set('v.locationChangeDetectedResult', JSON.stringify(event) + '\nToken: ' + loc);
    }
})
