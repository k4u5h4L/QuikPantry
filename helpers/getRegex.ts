const sendRegex = (arrayOfStrings: string[]): RegExp => {
    let stringBeforeRegex: string = "";

    // for (let str of arrayOfStrings) {
    //     regexStr = regexStr.concat(str)
    // }

    arrayOfStrings.forEach((str) => {
        stringBeforeRegex = `${stringBeforeRegex}(${str.trim()})|`;
    });
    stringBeforeRegex = stringBeforeRegex.slice(0, -1);

    // console.log(stringBeforeRegex);

    return new RegExp(stringBeforeRegex, "i");
};

export { sendRegex };
