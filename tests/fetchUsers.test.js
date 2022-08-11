import axios from 'axios'

const { BASE_URL, fetchUsers } = require('../src/fetchUsers');

jest.mock("axios");

describe("fetchUsers", () => {
	it("should return users list", async () => {
		const users = [
			{ id: 1, name: "name1" },
			{ id: 2, name: "name2" },
		];

		axios.get.mockResolvedValueOnce(users);
		const result = await fetchUsers();

		expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
		expect(result).toEqual(users);
	})

	it("should return empty users list", async () => {
		const error = "no users";
		axios.get.mockRejectedValueOnce(new Error(error));
		const result = await fetchUsers();

		expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
		expect(result).toEqual([]);
	});
});