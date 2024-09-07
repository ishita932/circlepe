const { KafkaClient, Consumer } = require('kafka-node');
const client = new KafkaClient({ kafkaHost: process.env.KAFKA_BROKER });
const consumer = new Consumer(client, [{ topic: 'RealTimeUpdates', partition: 0 }], { autoCommit: true });

exports.getRealTimeUpdates = (req, res) => {
    consumer.on('message', (message) => {
        res.write(JSON.stringify(message));
    });
    res.set('Content-Type', 'application/json');
};
