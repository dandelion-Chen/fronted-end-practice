var module = {
    x: 42,
    getX: function() {
        console.log(this.x);
      return this.x;
    }
  }
  
 
window.onload = function () {
    var x = 2;
    catName("Chloe");  // 我的猫名叫 Chloe

    function catName(name) {
        console.log("我的猫名叫 " + name); 
    }


    var notHoisted = function() {
    console.log('bar');
    };

    notHoisted();   // bar


    console.log('---------------------- 开始apply -------------------------');
    var arr = [2, 5, 6, 8, 8, 9];

    console.log(Math.max.apply(null, arr));  // 9
    console.log(Math.min.apply(null, arr));  // 2

    console.log('---------------------- 开始以call -------------------------');

    console.log(Math.max.call(this, ...arr));  // 9
    console.log(Math.min.call(this, ...arr));  // 2


    console.log('---------------------- bind 实践 -------------------------');
    console.log(module.getX()); // 42

    var unboundGetX = module.getX;
    console.log(unboundGetX());  //undefined  The function gets invoked at the global scope

    
    var boundGetX = unboundGetX.bind(module);
    console.log(boundGetX());  // 42
    
}

