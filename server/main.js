import { Meteor } from 'meteor/meteor';

var myAddress = "";
var TestNetClient = new CoinStack('c7dbfacbdf1510889b38c01b8440b1', '10e88e9904f29c98356fd2d12b26de');
TestNetClient.endpoint = "testchain.blocko.io";
TestNetClient.protocol = "http://";

Meteor.startup(() => {
  // code to run on server at startup
console.log(TestNetClient);
TestNetClient.getBlockchainStatus(function(err, status) {
    console.log(status);
});

// server
var balance = CoinStack.Math.toBitcoin(TestNetClient.getBalanceSync(myAddress));
console.log('my Wallet: ' + balance);
});
