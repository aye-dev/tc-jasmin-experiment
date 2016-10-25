

var TeamcityReporter = jasmineRequire.TeamcityReporter();
window.teamcityReporter = new TeamcityReporter();
jasmine.getEnv().addReporter(window.teamcityReporter);

describe("Simple test", function () {
    it("says hello", function () {
        expect(helloWorld()).toEqual("Hello world!");
    });
});

function helloWorld() {
    return "Hello world!";
}
