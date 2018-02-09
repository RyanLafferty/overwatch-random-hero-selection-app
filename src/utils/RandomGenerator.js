class RandomGenerator {

    constructor(config) {
        this.config = null;
        this.lowerLimit = 0;
        this.offenseCnt = -1;
        this.defenseCnt = -1;
        this.tankCnt = -1;
        this.supportCnt = -1;

        if (typeof config !== 'undefined' && config) {
            try {
                this.config = require(config);
            }
            catch (err) {
                console.error('Error [utils/RandomGenerator:RandomGenerator]: Invalid config given');
                this.config = require('../res/config/config.json');
            }
        }
        else {
            this.config = require('../res/config/config.json');
        }

        if (typeof this.config !== 'undefined' && this.config) {
            this.offenseCnt = Object.keys(this.config.Offense).length;
            this.defenseCnt = Object.keys(this.config.Offense).length;
            this.tankCnt = Object.keys(this.config.Offense).length;
            this.supportCnt = Object.keys(this.config.Offense).length;
            console.log('config: ', this.config);
            console.log('offense: ', this.offenseCnt);
            console.log('defense: ', this.defenseCnt);
            console.log('tank: ', this.tankCnt);
            console.log('support: ', this.supportCnt);
        }
        else {
            return null;
        }
    }

    async generate(type) {
        let url = '';

        switch(type) {
            case 0:
                url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.offenseCnt - 1) + '&col=1&format=plain&rnd=new';
                break;
            case 1:
                url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.defenseCnt - 1) + '&col=1&format=plain&rnd=new';
                break;
            case 2:
                url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.tankCnt - 1) + '&col=1&format=plain&rnd=new';
                break;
            case 3:
                url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.supportCnt - 1) + '&col=1&format=plain&rnd=new';
                break;
            default:
                return -1;
        }
        if (typeof url !== 'undefined' && url) {
            let result = await fetch(url, { method: "GET" });
            result = await result.text();

            //console.log('result', result.split("\n")[0]);
            return parseInt(result[0]);
        }
        else {
            return -1;
        }
    }
}

export { RandomGenerator };
