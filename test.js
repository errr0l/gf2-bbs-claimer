// const path = require('path')
// const json = require(path.resolve(__dirname, './config.example.json'));

// console.log(json);

// function getSecondsBeforeDawn() {
//     const date = new Date();
//     const millseconds = date.getTime();
//     // return (23 - date.getHours()) * 60 * 60 + (59 - date.getMinutes()) * 60 + 59 - date.getSeconds();
//     date.setHours(24, 0, 0, 0);
//     return date.getTime() - millseconds;
// }

// console.log(getSecondsBeforeDawn());

async function task1(token, posts) {
    let resps = [], index = 0;
    while (index < posts.length) {
        const item = posts[index++];
        resps.push({ ...item });
        if (item.is_like) {
            item.is_like = false;
            index--;
        }
    }
    return resps;
}

const posts = [
    {
        id: 1,
        is_like: true,
    },
    {
        id: 2,
        is_like: false,
    },
    {
        id: 3,
        is_like: true,
    },
];

const r = task1("", posts);
console.log(r);