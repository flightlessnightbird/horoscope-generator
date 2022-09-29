console.log('Welcome to the Horoscope Generator')

const signData = {
    signX: ['aligned with Jupiter', 'channeling the cosmic rays from the outer universe', 'taking on excess energy right now', 'being drawn to an unknown source of dark matter', 'seeking Venus and Mercury', 'looking into the Sun\'s rays'],
    signY: ['sheer misery', 'overwhelming joy', 'great fortune', 'great things to look forward to', 'a lot of deep sadness', 'pain and anxiety', 'amazing love'],
    signZ: ['keep calm and carry on', 'look on the bright side', 'hide from the world for a while', 'invest in yourself', 'treat yoself', 'get back to your roots', 'have a break, have a Kitkat', 'find something to occupy your mind', 'pray for forgiveness'],
    randomX () {
        let randomX = this.signX[Math.floor(Math.random() * this.signX.length)];
        return randomX;
    },
    randomY () {
        let randomY = this.signY[Math.floor(Math.random() * this.signX.length)];
        return randomY;
    },
    randomZ () {
        let randomZ = this.signZ[Math.floor(Math.random() * this.signZ.length)];
        return randomZ;
    }
};


console.log(signData.randomX());
console.log(signData.randomY());
console.log(signData.randomZ());