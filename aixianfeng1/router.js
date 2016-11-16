define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "shop": "shopFn",
        "order": "orderFn",
        "cart": "cartFn",
        "mine": "mineFn",
        "location" : "locationFn",
        "kill" : "killFn",
        "score" : "scoreFn",
        "find" : "findFn",
        "find2" : "find2Fn",
        "myorder" : "myorderFn",
        "*actions":'defaultAction'
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
            home.getData();
            home.getJson();
          })
      },
      shopFn: function() {
        require(['./modules/shop/shop.js'],function(shop){
          shop.render();
          shop.getData();
//        shop.add();
//        shop.reduce();
          shop.addGoods();
          shop.reduceGoods();
          
        })
      },
      orderFn: function() {
	      require(['./modules/order/order.js'],function(order){
	          order.render();
	          order.getData();
	          order.increase();
	          order.move();
	        })
      },
      cartFn: function() {
         require(['./modules/cart/cart.js'],function(cart){
          cart.render();
          cart.getData();
          cart.upNum();
          cart.downNum();
        })
      },
      mineFn: function() {
         require(['./modules/mine/mine.js'],function(mine){
          mine.render();
        })
      },
      locationFn: function() {
         require(['./modules/location/location.js'],function(location){
          location.render();
        })
      },
       killFn: function() {
         require(['./modules/kill/kill.js'],function(kill){
          kill.render();
          kill.getData();
        })
      }, 
      scoreFn: function() {
         require(['./modules/score/score.js'],function(score){
          score.render();
        })
      },
      findFn: function() {
         require(['./modules/find/find.js'],function(find){
          find.render();
        })
      },
       find2Fn: function() {
         require(['./modules/find2/find2.js'],function(find2){
          find2.render();
        })
      },
       myorderFn: function() {
         require(['./modules/myorder/myorder.js'],function(myorder){
          myorder.render();
        })
      },
      defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})
