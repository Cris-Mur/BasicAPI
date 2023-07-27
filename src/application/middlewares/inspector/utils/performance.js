class Performance {
    constructor() {
        this.start = Date.now()
    }
    measure() {
        this.end = Date.now();
        let difference = ((this.end - this.start) / 1000);
        let unit = 'seconds';
        if (difference > 120 && difference < 3000) {
            difference = difference / 60;
            unit = 'minutes';
        } else if ( difference > 3000) {
            difference = difference / 3600;
            unit = 'hours'
        }
        return `time of exec: [${difference}][${unit}]`;
    }
}

module.exports = Performance;