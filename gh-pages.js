var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/CristinaRacovita/tailoring-project', // Update to point to your repository  
        user: {
            name: 'CristinaRacovita', // update to use your name
            email: 'cristina.racovita98@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)