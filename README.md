# Intro to Angular Services!

## Objectives
- Compare services/factories in Angular
- Describe and consider use cases for the Singleton pattern
- Create your own service or factory in an Angular app
- Manage data across controllers with a service.

## What is a Service/Factory/Provider?
- Objects that are wired together using dependency injection (DI).
- You can use services to organize and share code across your app.
- Angular only instantiates a service when an application component depends on it.
- Singletons
  - Each component dependent on a service gets a reference to the single instance generated by the service factory

### Wait....Singleton?
- When you hear the word "Singleton", think, an object which can only be instantiated one time.
- Actual definition, "A pattern which ensures a class only has one instance, and provides a global point of access to it.
- If the object's constructor is called again, it just returns the same instance created before.

## To $rootScope...or not to $rootScope?
Q: How do we share data from one controller to another in Angular?
(The first thought might be to use $rootScope and pass it to each of our controllers..but there is a better way!)

A: We don't. If two controllers need common data it should live in a service that we then inject into both controllers.


#### Factory Syntax
```js
angular
  .module("learnServices", [])
  .factory('menuFactory', function(){
    var dishes = ['Plate', 'Bowl', 'Fork', 'Spoon'];
    return {
      getAllDishes: function() {
        return dishes;
      },
      getDish: function(i){
        return dishes[i];
      },
      getUtensils: function(){
        return dishes.filter((item) => {
          return ((item === 'Fork') || (item === 'Spoon'))
        })
      }
    }
  }).controller('utensilController', function(menuFactory){
    // I now have access to all the methods/properties returned from the personFactory!
  }).controller('dinnerwareController', function(menuFactory){
    // I now have access to all the methods/properties returned from the personFactory!
  }
```

#### Service Syntax

```js
angular
  .module("learnServices", [])
  .service('menuService', function(){
    this.getAllDishes = function() {
      return dishes;
    }
    this.getDish = function(i){
      return dishes[i];
    }
    this.getUtensils = function(){
      return dishes.filter((item) => {
        return ((item === 'Fork') || (item === 'Spoon'))
      })
    }
  }).controller('utensilController', function(menuService){
    // I now have access to the menuService!
  }).controller('dinnerWareController', function(menuService){
    // I now have access to the menuService!
  })
```

#### Exercise 1: Singletons
Use the singleton pattern in plain javascript to create an object that stores a list of instructors. Add Mike, Wes, Robby, and Ben to the list. Get a second instance of the singleton and verify that the four instructors are still in the list.



#### So which one??

Many resources and examples will lean towards factories, however, the new ES2015 syntax can make services preferable. Be aware of both of these and the differences between them.

To read more about the differences and why some choose factories over services and vise versa - check out these articles:

[ng-newsletter: The short guide to service definitions](http://www.ng-newsletter.com/25-days-of-angular/day-1)

[Service VS Factory - ONCE AND FOR ALL](http://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html)

[AngularJS: Factory vs Service vs Provider](https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider-5f426cfe6b8c#.amcogmlyx)

### CFU

Answer the following questions:

- What is a service? What problem do they solve for us?
- What is a singleton? Why would we use them?
- What is the difference between a factory, service and provider?
- Name at least 3 angular built in services that we have used so far.

##### Exercise 2: Custom Services + Built-in Services
Let's try a more robust example. Using both the built-in `$http` service and also a custom service, build an app That

##### Exercise 3: CryptoFactory!
Build an Angular app with at least two controllers, two templates, and a service or factory. This app should show the current value of two different crypto currencies. Use a different controller for each template, but calculate the value of the cryptocurrency with a request made from your service. Then inject that service to each controller.

Here is a sample GET request to the cryptonator api.
`https://api.cryptonator.com/api/ticker/btc-usd`
This will return the following object:
```
{
  "ticker": {
    "base":"ETH",
    "target":"USD",
    "price":"11.99255421",
    "volume":"42962.52719390",
    "change":"-0.00093119"
  },
  "timestamp":1476735394,
  "success":true,
  "error":""
}
```
Here are a few other cryptocurrency pairs, the full list supported by the API is available [here](https://www.cryptonator.com/api/currencies):
- `https://api.cryptonator.com/api/ticker/eth-usd`
- `https://api.cryptonator.com/api/ticker/trump-usd`
- `https://api.cryptonator.com/api/ticker/nav-usd`
- `https://api.cryptonator.com/api/ticker/rep-usd`


#### Bonus
