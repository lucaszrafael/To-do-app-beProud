//Retorna um estado e uma cidade relacionada aleatoriamente
RandomStateAndCity = function () {
    if (Meteor.isClient) {
        Meteor.subscribe('LocationCollection')
    }

    var locals = LocationCollection.find().fetch()
    var randomState = RandomItem(locals)
    var stateCities = randomState.cidades
    var randomCity = RandomItem(stateCities)
    return {
        state: randomState.sigla,
        city: randomCity
    }
}

//Retorna apenas um estado aleatório
RandomState= function(){
    if (Meteor.isClient) {
        Meteor.subscribe('LocationCollection')
    }
    var locals = LocationCollection.find().fetch()
    var randomState = locals[RandomNumber(0, locals.length)]
    if(randomState != undefined){
        return randomState.sigla
    }
}

//Retorna apenas uma cidade aleatória baseada em um estado
RandomCity = function (state) {
    if (Meteor.isClient) {
        Meteor.subscribe('LocationCollection')
    }
    var locals = LocationCollection.find().fetch()
    var stateData = _.find(locals, function (iterator) {
        if(state == iterator.sigla){
            return iterator
        }
    })
    var stateCities = stateData.cidades
    var randomCity = stateCities[RandomNumber(0, stateCities.length)]
    return randomCity
}