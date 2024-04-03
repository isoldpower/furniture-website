import {Configuration} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildProdPlugins(): Configuration['plugins'] {
    return [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:8].css',
            chunkFilename: 'css/[name]-[contenthash:8].css'
        })
    ]
}