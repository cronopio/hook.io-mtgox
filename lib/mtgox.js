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
        self.delegateMessage(message);
      });
    });

  });
};


util.inherits(MtgoxHook, Hook);


MtgoxHook.prototype.delegateMessage = function(message) {
  
  switch (message.op) {
    case 'private':
      console.log('private', message);
    break;
    case 'subscribe':
      console.log('subscribe', message);
    break;
    default:
      console.log('default');
    break;
  }
  
};


/*
getChannel: function(key){
  var selected = this.channels.filter(function(c){
    if (c.key == key)
      return true;
    return false;
  });
  return selected[0];
},
showMsg: function(data){
  var ch = this.getChannel(data.channel);
  this['_'+ch.private](data);
},
_depth: function(depth){
  var vol,
      now  = new Date(),
      data = depth.depth,
      msg = '<'+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+'> ';
  if (data.volume < 0){
    // An order has been deleted
    msg += 'Remove ';
    vol = data.volume * -1;
  } else {
    // An order has been created
    msg += 'Create ';
    vol = data.volume;
  }
  msg += data.type_str + ' ' +vol + ' @ ' + data.price;
  console.log(msg);
},
_trade: function(trade){
  var data = trade.trade,
      time = new Date(data.date),
      msg = '['+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+'] ';
  if (data.trade_type == 'ask'){
    msg += 'Sell ';      
  } else if (data.trade_type == 'bid'){
    msg += 'Buy ';
  }
  msg += data.amount + ' '+data.item+ '  @  '+data.price+' '+data.price_currency;
  if (data.price > this.lastTrade){
    msg += ' ⇧ ';
  }
  if (data.price < this.lastTrade){
    msg += ' ⇩ ';
  }
  this.lastTrade = data.price;
  console.log(msg);
},
_ticker: function(tick){
  var data = tick.ticker;
  mtgoxTest.emit('ticker', data);
  console.log('---------------------');
  console.log('   Volume: %d      ', data.vol);
  console.log(' Buy:%d - Sell:%d  ', data.buy, data.sell);
  console.log(' Max:%d - Min:%d   ', data.high, data.low);
  console.log(' Last Price: %d    ', this.lastTrade);
  console.log('---------------------')
}
*/