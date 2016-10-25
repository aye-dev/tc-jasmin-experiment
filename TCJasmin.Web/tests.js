describe("Simple test", function () {
    it("says hello", function () {
        expect(helloWorld()).toEqual("Hello word!");
    });
});

function helloWorld() {
    return "Hello world!";
}
