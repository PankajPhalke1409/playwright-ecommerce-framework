const fs = require('fs');

class TestDataManager {

    static readJson(path) {

        return JSON.parse(
            fs.readFileSync(path)
        );
    }
}

module.exports = TestDataManager;