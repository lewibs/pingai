const { PingDispatcher } = require("./PingDispatcher");

test("this is used to test that the ping dispatcher is infact sending out pings", async ()=>{
    const PING = "dummy";
    class Dummy extends PingDispatcher {}

    const a = new Dummy();
    a.addReaction(PING, (msg, data)=>{console.log(msg, data)});
    const b = new Dummy();
    b.ping(PING, "test", true);
});