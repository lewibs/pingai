const PubSub = require('pubsub-js');

class PingDispatcher {
	/**
	 * this is used to keep track of all the pings attached to this object.
	 * the data within the array looks like this:
	 * {
	 * 	token: token
	 * 	topic: string
	 *  subscriber: function
	 * }
	 */
	pings = [];
	
	addReaction( topic, subscriber ) {
		const token = PubSub.subscribe(topic, subscriber);

		this.pings.push({
			topic,
			subscriber,
			token,
		});
	}

	removeByTopic( topic ) {
		this.pings = this.pings.filter((ping)=>ping.topic !== topic);
		PubSub.unsubscribe(topic);
	}

	removeByToken( token ) {
		this.pings = this.pings.filter((ping)=>ping.token !== token);
		PubSub.unsubscribe(token);
	}

	kill() {
		this.pings.forEach((ping)=>{
			PubSub.unsubscribe(ping.token);
		})
		this.pings = [];
	}

	ping( topic, data, sync=false ) {
		if (sync) {
			// publish a topic synchronously, which is faster in some environments,
			// but will get confusing when one topic triggers new topics in the
			// same execution chain
			// USE WITH CAUTION, HERE BE DRAGONS!!!
			PubSub.publishSync(topic, data);
		} else {
			PubSub.publish(topic, data);
		}

	}
}

module.exports = { PingDispatcher };