class RandomGenerator {

    constructor(config) {
        this.config = null;
        this.lowerLimit = 0;
        this.damageCnt = -1;
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
            this.damageCnt = Object.keys(this.config.Damage).length;
            this.tankCnt = Object.keys(this.config.Tank).length;
            this.supportCnt = Object.keys(this.config.Support).length;
            this.heroCnt = [this.damageCnt, this.defenseCnt, this.tankCnt, this.supportCnt];
            console.log('config: ', this.config);
            console.log('damage: ', this.damageCnt);
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
                url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.damageCnt - 1) + '&col=1&format=plain&rnd=new';
                break;
            case 1:
                url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.tankCnt - 1) + '&col=1&format=plain&rnd=new';
                break;
            case 2:
                url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.supportCnt - 1) + '&col=1&format=plain&rnd=new';
                break;
            default:
                return -1;
        }
        if (typeof url !== 'undefined' && url) {
            let result = await fetch(url, { method: "GET" });
            result = await result.text();

            return parseInt(result[0], 10);
        }
        else {
            return -1;
        }
    }

    async all_generate() {
        let type = -1;
        let value = -1;

        let url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + 3 + '&col=1&format=plain&rnd=new';
        if (typeof url !== 'undefined' && url) {
            let result = await fetch(url, { method: "GET" });
            result = await result.text();
            type = parseInt(result[0], 10);
        }        

        url = 'https://www.random.org/sequences/?min=' + this.lowerLimit + '&max=' + (this.heroCnt[type]) + '&col=1&format=plain&rnd=new';
        if (typeof url !== 'undefined' && url) {
            let result = await fetch(url, { method: "GET" });
            result = await result.text();
            value = parseInt(result[0], 10);

            return ([type, value]);
        }

        return([type, value]);
    }
}

export { RandomGenerator };
