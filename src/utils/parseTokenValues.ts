import convertToTokenArray from './convertTokens';

export default function parseTokenValues(tokens) {
    if (Array.isArray(tokens)) {
        return {
            global: {
                type: 'array',
                values: tokens,
            },
        };
    }
    const reducedTokens = Object.entries(tokens).reduce((prev, group) => {
        const parsedGroup = group[1];
        if (typeof parsedGroup === 'object') {
            const groupValues = [];
            const convertedToArray = convertToTokenArray({tokens: parsedGroup});
            convertedToArray.forEach(([key, value]) => {
                groupValues.push({name: key, ...value});
            });
            const convertedGroup = groupValues;
            prev.push({[group[0]]: {type: 'array', values: convertedGroup}});
            return prev;
        }
    }, []);

    return Object.assign({}, ...reducedTokens);
}
