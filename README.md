## hook.io-mtgox

Hook from mtgox to integrate with the rest of hook.io ecosystem

This is a branch to fix some inconsistencies with new mtgox api such as https server and to use my branch of hook.io-ws.

Notice local npm installs.

### Dependencies

- [hook.io](http://hook.io)
- [hook.io-ws](http://github.com/cronopio/hook.io-ws)

### Installation
    git clone git://github.com/polidore/hook.io-mtgox.git
    git clone git://github.com/polidore/hook.io-ws.git
    cd hook.io-ws
    git submodule init
    git submodule update
    cd ../hook.io-mtgox
    npm install hook.io
    npm install ../hook.io-ws
    npm install ../hook.io-ws/3rd/socket.io-client

### Runing
    cd hook.io-mtgox
    ./bin/ticker

### Screenshot
![Screenshot1](http://i.imgur.com/Zilic.jpg)

Is possible set verbose with `-v` or `--verbose` to see the changes to the order book
![Screenshot2](http://i.imgur.com/n5rbE.jpg)
