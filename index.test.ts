test("random test", () => {
  const password = "pizza123";
  expect(password).toMatch(/.{7,}/);
  expect(password).toMatch(/(?=\d)/);
  expect(password).toMatch(/(?=[a-z])/);
  expect(password).not.toMatch(/(?=[A-Z])/);
});
