module.exports = {
    pug: {
        // pretty: true,
        data: {
            dataHead: require('../data/dataHead.json'),
        },
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        // Вказуємо необхідні формати (окрім woff2)
        formats: ["ttf", "woff"],
    },

    icons: {
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        padding: 1
    }
};