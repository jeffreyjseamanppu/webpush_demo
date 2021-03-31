self.addEventListener('push', function(e) {

    var options = {
        body: 'Class Selfie',
        icon: 'images/ppuicon.png',
        vibrate: [100, 50, 100],
        data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
        },
        actions: [
        {
            action: 'explore',
            title: 'Food in the lobby',
            icon: 'images/checkmark.png'
        },
        { action: 'close', title: 'Close', icon: 'images/xmark.png' }
        ]
    };
    //e.waitUntil(self.registration.showNotification('Hello world!', options));
});