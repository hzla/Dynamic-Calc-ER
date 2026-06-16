"use strict";

var helper_1 = require("./helper");

describe("inverse battles", function () {
    (0, helper_1.inGen)(8, function (_a) {
        var calculate = _a.calculate, Pokemon = _a.Pokemon, Move = _a.Move, Field = _a.Field;
        test("inverts type immunities", function () {
            var normal = calculate(Pokemon("Snorlax"), Pokemon("Gengar"), Move("Hyper Beam"), Field({}));
            var inverse = calculate(Pokemon("Snorlax"), Pokemon("Gengar"), Move("Hyper Beam"), Field({ isInverse: true }));

            expect(normal.damage).toBe(0);
            expect(inverse.damage[0]).toBeGreaterThan(0);
            expect(inverse.field.isInverse).toBe(true);
        });
    });
});
