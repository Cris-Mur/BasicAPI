const test = require('node:test');
const assert = require('node:assert');

const application = require("../index");

test("Class test", (inner_test) => {
    let test_application = new application();
    assert.strictEqual(true, test_application instanceof application);
});

test("Instance test", (inner_test) => {
    let test_application = new application();
    assert.notStrictEqual(undefined, test_application.express);
});

test("Application setup test", (inner_test) => {
    let test_application = new application();
    let application_setup_test = application.setup(test_application.express);
    assert.deepEqual(test_application.express, application_setup_test)
});