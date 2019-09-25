Homework Week 4
In this homework we would be building an application to interact with customers both online and via SMS. We would be using Twilio for communication in this project, which handles the SMS sending and receiving part via both a REST API and a Node client.

Step 1: Create a Node Server visible to the world
Start a node project.

Install express. Add a route at /check which returns ok as text which we'll use to test visibility.

Install localtunnel module, and in your express app.listen callback, add the following:

localtunnel(port, { subdomain } (err, tunnel) => {
  if (!err)
    console.log('Tunnel is open');
  else
    console.log('Error opening tunnel: ', err);
});

tunnel.on('close', function() {
  // When the tunnel is closed
  console.log('Tunnel is closed');
});
Where port is the same as for your express app and subdomain is a random string. Choose a long random string so that you don't have collision with somebody else trying to use the same.

Start the app and then head over to https://{subdomain}.localtunnel.me/check and make sure your app is visible over the internet.

NOTE: Localtunnel would be running as part of the app, so we won't be using lt in our console to run it.

Install and setup dotenv. Move the PORT and SUBDOMAIN to an .env file.

git init, add a .gitignore which ignores node_modules and .env. Make a commit and push.

Step 2: Setup a phone number through Twilio
Sign up at https://www.twilio.com/try-twilio?promo=DEVTO10
After you have verified your account, go to the console https://www.twilio.com/console
Copy your ACCOUNT_SID, AUTH_TOKEN to your .env file.
Click on Get a Trial Number., and then Search for a different Number, then Search and then Try again. On this page click on Search again and then select one of the numbers for $15 which should have SMS and Voice capabilities.
Once you have added your address and finished the purchase, you should arrive at the phone number page (Otherwise open https://www.twilio.com/console/phone-numbers/ and then click on the number). If you get an error in between, just close the error and select the number from the search list and try again.
In the Messaging section, in A Message comes in field add https://{subdomain}.localtunnel.me/incoming-sms, where subdomain is what you used in Step 1.
Step 3: Sending and Receiving SMS
npm install --save twilio
Here's most of the reference you would need in order to use Twilio. You can find more detailed instructions here: https://www.twilio.com/docs/sms/quickstart/node
// a. setup twilio client
const client = require('twilio')(accountSid, authToken);

// b. to send message
client.messages
.create({
   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
   // number bought from twilio
   from: '+15017122661',
   // your number
   to: '+15558675310'
 })
.then(message => console.log(message.sid));

// c. receive sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

// hook that we setup in **Step 2** to receive sms
app.post('/incoming-sms', (req, res) => {
  // look in re.body to see incoming message

  // response that you want to send back in response immediately
  const twiml = new MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});
I would advise at this stage you try out parts for sending and receiving messages to be sure you understand how the above works.
Move CUSTOMER_NUMER (to) and TWILIO_NUMBER (from) to .env as well.
Make a commit and push!
Step 4: Building the SMS application
Now that we have all the infrastructure setup for this project, you have to build it around the following requirements.

Create an Order class which has the following:
type which can be pizza, burger or salad.
status which can be ordered, preparing or delivered.
created which is set to new Date() when this object is created.
modified which is set to new Date() whenever the status is changed.
id which is an integer set during creation.
Implement the following sms commands (i.e handle these in you /incoming-sms route):
help, which lists all available commands.
menu which lists all order types
order <type> which creates a new Order and returns order id if type is acceptable for order.
status <id> which returns Order is in ${status}. Last updated ${modified}. if order exists.
Implement kitchen routes:
GET /kitchen/order/:id shows the order.
PATCH /kitchen/order/:id with body { status: <new Status> } which updates the status of the order.
For storing orders you can either use mysql as you have done before, or you can try https://www.npmjs.com/package/node-json-db. If you try node-json-db then I'll advise you to store an /index which you use to track latest order number (with increment), and store orders like /order/id where id is the latest index.
Bonus
Send an sms update to customer whenever the kitchen makes an update on the order status.
Implement a route GET /customer/order/ which shows a HTML page with the order information.
Setup static hosting using middleware app.use(express.static('public')) where public folder exists in your node application and contains HTML, JS, CSS etc which is served directly.
In your route you can do res.sendFile('index.html'); which will send an index.html file form your public folder.
In your HTML/JS make a request to GET /kitchen/order/:id to load data about the order and update DOM accordingly.
