import { sum } from "./sum";
describe("sum func", () => {
  it("Сумма", () => {
    expect(sum(2, 3)).toEqual(5);
  })
})
