/**
 * Timer object
 */
class Timer {
    constructor(seconds) {
        this.minutes = Math.floor(seconds / 60);
        this.seconds = seconds % 60
        console.log(this.minutes);
    }

    /**
     * Decrement the timer by one second.
     */
    decrement() {
        if (this.seconds > 0) {
            this.seconds--;
        }
        else {
            if (this.minutes > 0) {
                this.minutes--;
                this.seconds = 59;
            }
        }
    }

    /**
     * Get a string representation of time remaining.
     * 
     * @returns A string representation of the time remaining
     */
    toString() {
        return this.minutes.toString() + ":" + nf(this.seconds, 2);
    }

    /**
     * Check if the timer has run out of time
     * 
     * @returns true if the timer is at 0, else false
     */
    timeout(){
        return this.minutes == 0 && this.seconds == 0;
    }
}