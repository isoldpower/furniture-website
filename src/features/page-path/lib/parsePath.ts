export const getPathChunks = (path: string): string[] => {
    let bufferPath = path;
    const chunkPaths: string[] = [];

    while (bufferPath != '') {
        let index = bufferPath.indexOf('/');
        if (index < 0) index = path.length - 1;

        bufferPath = bufferPath.slice(index + 1);
        chunkPaths.push(path.slice(0, index + 1));
    }

    return chunkPaths;
}