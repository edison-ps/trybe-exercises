const { it, expect } = require('@jest/globals');
const { get } = require('http');
const getRepos = require('./exercicio004');

const url = 'https://api.github.com/orgs/tryber/repos';
const toDOList = 'sd-01-week4-5-project-todo-list';
const memeGenerator = 'sd-01-week4-5-project-meme-generator';

it(`Search folder ${toDOList}`, (done) => {
    expect.assertions(1);
    return getRepos(url).then((data) => {
        expect(data).toContain(toDOList);
    done();
    })
});

 it(`Search folder ${memeGenerator}`, (done) => {
    expect.assertions(1);
    return getRepos(url).then((data) => {
         expect(data).toContain(memeGenerator);
    done();
     });
 });