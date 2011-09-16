/*
 * Hook class for interacting with mtgox.com
 */
var Hook = require('hook.io').Hook,
    util = require('util');
    
var MtgoxHook = exports.MtgoxHook = function(options){
  Hook.call(this, options);
  
  var self = this;

  self.on('hook::ready', function(){

    self.spawn([{ 
      "name": "mtgox-ws-hook",
      "type": "ws",
      "debug": "false",
      "url": "ws://websocket.mtgox.com/mtgox"
    }], function(err){
      // spawn ready
      self.on('*::websocket::message',function(message){
        
        if(message.op === 'subscribe') {
          self.emit('subscribe', message);
        } else {
          self.emit(message.private, message);
        }
        
      });
    });
  });
};



util.inherits(MtgoxHook, Hook);
