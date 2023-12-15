test("random string test", () => {
  const password = "pizza123";
  expect(password).toMatch(/.{7,}/);
  expect(password).toMatch(/(?=\d)/);
  expect(password).toMatch(/(?=[a-z])/);
  expect(password).not.toMatch(/(?=[A-Z])/);
});

test("random array test", () => {
  const list = ["banana", "pear", "cherry"];
  expect(list).toContain("banana");
  expect(list).toContain("pear");
  expect(list).not.toContain("dog");
});
