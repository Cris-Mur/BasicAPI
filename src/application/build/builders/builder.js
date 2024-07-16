class Builder {
    controller = undefined;
    static reset() {
        this.product = {};
    }

    static getResult() {
        console.debug("default Builder", this.product);
        return this.product;
    }
}

module.exports = Builder;