document.addEventListener('DOMContentLoaded', function() {
    anime.timeline({loop: false})
        .add({
            targets: '#card1',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 500,

        })
        .add({
            targets: '#card2',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            offset: '-=500' 
        })
        .add({
            targets: '#card3',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            
            offset: '-=500'
        });

});


function selectPlan(plan) {
    let storageWidth, usersWidth, speedWidth, coverageWidth;
    
    if (plan === 'Basic') {
        storageWidth = '50%';
        usersWidth = '25%';
        speedWidth = '50%';
        coverageWidth = '75%';
    } else if (plan === 'Premium') {
        storageWidth = '75%';
        usersWidth = '50%';
        speedWidth = '75%';
        coverageWidth = '85%';
    } else if (plan === 'Family') {
        storageWidth = '100%';
        usersWidth = '100%';
        speedWidth = '100%';
        coverageWidth = '100%';
    }

    anime({
        targets: '#memoria-line',
        width: storageWidth
    });

    anime({
        targets: '#usuarios-line',
        width: usersWidth
    });

    anime({
        targets: '#velocidad-line',
        width: speedWidth
    });

    anime({
        targets: '#cobertura-line',
        width: coverageWidth
    });
}



