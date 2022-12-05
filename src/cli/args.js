const getArgs = (argsRaw) => {
    let argsResult = [];
    const args = argsRaw.slice(2);
    for (let i = 0; i < args.length; i+=2) {
        argsResult.push({
            prop: args[i].substring(2),
            value: args[i + 1]
        });
    }
    return argsResult;
}

const parseArgs = () => {
    const extractedArgs = getArgs(process.argv).map((arg) => {
        return `${arg.prop} is ${arg.value}`;
    });

    console.log(extractedArgs.join(', '));
};

parseArgs();
