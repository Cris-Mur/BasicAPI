const test = require('node:test');
const assert = require('node:assert');

test.describe("Init Class", ()=>{
    const application = require("../index");
    test.it("Class test", () => {
        console.log("[Class test]")
        let test_application = new application();
        assert.strictEqual(true, test_application instanceof application);
        console.log('#'.repeat(40))
    });
    
    test.it("Instance test", () => {
        let test_application = new application();
        assert.notStrictEqual(undefined, test_application.express);
        console.log('#'.repeat(40))
    });
    
    
    const builder = require('../builder');
    const express = require('express');
    test.it("Application setup test", async () => {
        let test_application = JSON.stringify(new application().express);
        let application_setup_test = JSON.stringify(builder.setup(express()));
        assert.strictEqual(test_application, application_setup_test)
        console.log('#'.repeat(40))
    });
});
