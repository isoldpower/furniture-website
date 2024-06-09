export const getPathChunks = (path: string): string[] => {
    const chunkPaths: string[] = [];
    chunkPaths.push('/');

    for (let i = 1; nthIndexOf(path, '/', i + 1) >= 0; i++) {
        const index = nthIndexOf(path, '/', i + 1);
        chunkPaths.push(path.slice(0, index));
    }

    chunkPaths.push(path);
    return chunkPaths;
}

const nthIndexOf = (string: string, subString: string, index: number) => {
    const length = string.length;
    let i = -1;

    while (index-- && i++ < length) {
        i = string.indexOf(subString, i);
        if (i < 0) break;
    }

    return i;
}