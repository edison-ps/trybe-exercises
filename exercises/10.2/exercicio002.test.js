const { getUserName, users } = require('./exercicio002');

it('Get user name by id = 4', () => {
    expect.assertions(1);
    return getUserName(4).then((data) => {
        expect(data).toBe('Mark');
    });
});

it('Get user name by id = 5', () => {
    expect.assertions(1);
    return getUserName(5).then((data) => {
        expect(data).toBe('Paul');
    });
});

it('Get user name by id = 1', () => {
    const id = 1;
    expect.assertions(1);
    return getUserName(id).catch((data) => {
        expect(data).toStrictEqual({ error: `User with ${id} not found.` });
    });
});