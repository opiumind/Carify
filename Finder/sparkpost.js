const SparkPost = require('sparkpost');
const client = new SparkPost('1e5968efedc059bbba0dfbd7a969ca2bd5a6996f');

const sparkpost = function() {
   return client.transmissions.send({
        options: {
            sandbox: true
        },
        content: {
            from: 'testing@sparkpostbox.com',
            subject: 'Your Children is in dangerous area',
            html:'<html><body><p>The child is currently in the hood</p></body></html>'
        },
        recipients: [
            {address: '<pht200@email.vccs.edu>'}
        ],

    })
        .then(data => {{
            console.warn('Woohoo! You just sent your first mailing!');
            console.log(data);
        })
        .catch(err => {
            console.warn('Whoops! Something went wrong');
            console.log(err);
        });
};

export default sparkpost;
