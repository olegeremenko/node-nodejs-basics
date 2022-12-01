const parseEnv = () => {
    let res = [];
    for (let prop in process.env) {
        if (process.env.hasOwnProperty(prop) && prop.startsWith('RSS_')) {
            res.push(prop + '=' + process.env[prop]);
        }
    }
    console.log(res.join('; '));
};

parseEnv();
