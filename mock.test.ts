import { fetchEmployes } from "./mock";

const MOCK_DATA = [{ a: 1 }];

jest.mock(`node-fetch`, () => {
  return jest.fn().mockResolvedValue(
    (() => {
      return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      });
    })()
  );
});

describe("Test mock", () => {
  it("should  add", async () => {
    const res = await fetchEmployes();
    expect(res).toBe(MOCK_DATA);
  });
});
