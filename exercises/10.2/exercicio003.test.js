const { expect } = require('@jest/globals');
const { getUserName, users } = require('./exercicio002');

it('Get user name by id = 4', async () => {
    const data = await getUserName(4);
    expect.assertions(1);
    expect(data).toBe('Mark');
});

it('Get user name by id = 5', async () => {
    const data = await getUserName(5);
    expect.assertions(1);
    expect(data).toBe('Paul');
});

it('Get user name by id = 1', async () => {
    const id = 1;
    expect.assertions(1);
    try {
        await getUserName(id);
    } catch (error) {
        expect(error).toStrictEqual({ error: `User with ${id} not found.` });
    }
});