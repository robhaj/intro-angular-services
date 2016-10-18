//ES6
let instance = null;

class Galvanize{
  constructor() {
    if(!instance){
      instance = this;
    }
    this.instructors = ['Mike', 'Wes', 'Robby', 'Ben']

    return instance;
  }
}

let singleton = new Galvanize()
console.log(singleton.instructors);

setTimeout(function(){
  let singleton = new Galvanize();
  console.log(singleton.instructors);
},4000);










var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
