describe("cancelMemberships", () => {
    test("should return an empty array when passed empty array ", () => {
        // arrange
        const input = [];
        const expected = [];

        // act
        const actual = cancelMemberships(input);

        // assert
        // .toEqual will check contents
        expect(actual).toEqual(expected);
    });

    test("should return unchanged object when passed single cancelled member", () => {
        //arrange
        const input = [{ name: "Paul", status: "cancelled" }];
        const expected = [{ name: "Paul", status: "cancelled" }];

        //act
        const actual = cancelMemberships(input);

        //assert
        expect(actual).toEqual(expected);
    });
    test("should change single member object to cancelled", () => {
        //arrange
        const input = [{ name: "Paul", status: "active" }];
        const expected = [{ name: "Paul", status: "cancelled" }];

        //act
        const actual = cancelMemberships(input);
        //assert
        expect(actual).toEqual(expected);
    });
    test("should cancel multiple active members", () => {
        const input = [
            { name: "Paul", status: "active" },
            { name: "Vel", status: "active" },
        ];
        const expected = [
            { name: "Paul", status: "cancelled" },
            { name: "Vel", status: "cancelled" },
        ];

        const actual = cancelMemberships(input);
        // assert
        expect(actual).toEqual(expected);
    });
    test("should return a new array (reference test)", () => {
        // arrange
        const input = [{ name: "Paul", status: "cancelled" }];

        //act
        const actual = cancelMemberships(input);

        // assert
        // do these live in the same place in memory
        expect(actual).not.toBe(input);
    });
    test("should not mutate input", () => {
        //arrange
        const input = [
            { name: "Paul", status: "active" },
            { name: "Vel", status: "active" },
        ];
        const copyInput = [
            { name: "Paul", status: "active" },
            { name: "Vel", status: "active" },
        ];
        //act
        // Put the input into the function
        cancelMemberships(input);
        
        //assert
        //afterwards, does the input still look like its copy?
        expect(input).toEqual(copyInput);
    });
});