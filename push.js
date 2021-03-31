var push = require('web-push');



let vapidkeys = {
    publickey: 'BNgHZEeaNeI4M9c4r1FaMkUSLI2rKOBWcJGw-mGh2t5lHBjJngaHJJAXzMhlrqVlgNflL4Fa1MEhi93BM5DPHWk',
    privatekey: 'DQAG1k5wo5GZ6WX1ChXK0C7cF0JDxwRzFFgIjnxKDT4'
}

push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidkeys.publickey, vapidkeys.privatekey)

//Firefox
let sub = {
    endpoint:'https://updates.push.services.mozilla.com/wpush/v1/gAAAAABgY…2Cn9-YMqmBSAnZ1wsIN6qxK48i8q7fHF7vIO2bTJIz6zHPAGHCHdTAbwstXX',
    expirationTime: null,
    keys: {
        p256dh:'BKLdodGPKXQYbEm0_B1FiMsyLlIscN-YLJ7Bo5XRFoW75IFPo4euEjix-sdRKywJhHmiz43l7ftrKKBs8PFfwJs',
        auth:'bImh4DR7_fN43flIzGEryA'
    }
};

push.sendNotification(sub, 'Welcome to Friday');
