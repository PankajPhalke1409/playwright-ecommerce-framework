class Helpers {

    static generateRandomNumber() {

        return Math.floor(
            Math.random() * 100000
        );
    }

    static generateEmail() {

        return `playwright${
            this.generateRandomNumber()
        }@gmail.com`;
    }

    static currentDateTime() {

        return new Date()
            .toLocaleString();
    }
}

module.exports = Helpers;