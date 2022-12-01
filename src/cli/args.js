const parseArgs = () => {
    let res = [];
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i+=2) {
        let propName = args[i].substring(2);
        let value = args[i + 1];
        res.push(propName + ' is ' + value);
    }
    console.log(res.join(', '));
};

parseArgs();
