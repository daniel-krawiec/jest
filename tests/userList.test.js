const UserList = require("../src/userList");

describe("totalUsers", () => {
  it("returns zero when there are no users", () => {
    const subject = new UserList();
    expect(subject.totalUsers).toBe(0);
  });

  it("returns count of total users", () => {
    const subject = new UserList([
      { email: "email@email.com" },
      { email: "test@test.com" }
    ]);

    expect(subject.totalUsers).toBe(2);
  });
});

describe("add", () => {
  it("adds user", () => {
    const subject = new UserList();
    const initialCount = subject.totalUsers;
    subject.add({ email: "test@test.com" });

    expect(subject.totalUsers).toBeGreaterThan(initialCount);
  });

  it("throws error when no email given", () => {
    const subject = new UserList();

    expect(() => {
      subject.add({ emails: "tester@gmail.com" });
    }).toThrow("no email");
  });
});

describe("random", () => {
  it("rejects when no users", async () => {
    const subject = new UserList();

    try {
      await subject.random();
    } catch (err) {
      expect(err).toEqual("No users");
    }
  });

  it("returns random user", async () => {
    const subject = new UserList();
    const emails = [
      "test0@test.com",
      "test1@test.com",
      "test2@test.com"
    ];

    emails.forEach(email => subject.add({ email }));

    const randomEmail = await subject.random();
    expect(emails).toContain(randomEmail.email);
  });
});
