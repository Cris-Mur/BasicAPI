/**
 * A utility class for measuring performance and execution time.
 * @class
 * @module PerformanceMeasurement
 */
class Performance {
    /**
     * Creates an instance of the Performance class.
     * The start time is initialized to the current time.
     */
    constructor() {
        this.start = Date.now();
    }

    /**
     * Measures the time difference between the start and end times.
     * @returns {string} A formatted string indicating the time of execution.
     */
    measure() {
        this.end = Date.now();
        let difference = (this.end - this.start) / 1000;
        let unit = 'seconds';

        if (difference > 120 && difference < 3000) {
            difference = difference / 60;
            unit = 'minutes';
        } else if (difference > 3000) {
            difference = difference / 3600;
            unit = 'hours';
        }

        return `Time of execution: [${difference}][${unit}]`;
    }
}

/**
 * Exports the Performance class for measuring performance and execution time.
 * @type {Performance}
 */
module.exports = Performance;
