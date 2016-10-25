describe("Simple test", function () {
    it("says hello should fail", function () {
        expect(helloWorld()).toEqual("Hello !");
    });
    it("says hello", function () {
        expect(helloWorld()).toEqual("Hello world!");
    });
});

function helloWorld() {
    return "Hello world!";
}
