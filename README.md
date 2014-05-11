
to run:
beefy test.js:builtTest.js --live

Each node modules main.js will should always be the name of the node module. This is simply for use with beefy, so that when we get a console log error, it will tell us which file its in


for now, the only way to get your module to do something on update, is to us the addToUpdateArray function call, this is just so that there is only ONE way to do the right thing, although a .update may be added...
