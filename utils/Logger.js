class Logger {

    static info(message) {

        console.log(
            `[INFO] ${message}`
        );
    }

    static error(message) {

        console.log(
            `[ERROR] ${message}`
        );
    }

    static warning(message) {

        console.log(
            `[WARNING] ${message}`
        );
    }
}

module.exports = Logger;