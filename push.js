var push = require('web-push');



let vapidkeys = {
    publickey: 'BNgHZEeaNeI4M9c4r1FaMkUSLI2rKOBWcJGw-mGh2t5lHBjJngaHJJAXzMhlrqVlgNflL4Fa1MEhi93BM5DPHWk',
    privatekey: 'DQAG1k5wo5GZ6WX1ChXK0C7cF0JDxwRzFFgIjnxKDT4'
}

push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidkeys.publickey, vapidkeys.privatekey)

let sub = {};

push.sendNotification(sub, 'Welcome to Friday');
