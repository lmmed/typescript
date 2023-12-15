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

test("random object test", () => {
  const obj = { firstName: "John", lastName: "Doe", age: 15 };
  expect(obj).toHaveProperty("firstName");
  expect(obj).not.toHaveProperty("address");
});

function fakeApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 500);
  });
}

test("random promise test", () => {
  return fakeApi().then((res) => {
    expect(res).toBe("data");
  });
});

test("random promise test with async test", async () => {
  const res = await fakeApi();
  expect(res).toBe("data");
});
