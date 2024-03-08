export function buildAssetLoader() {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
    }
}