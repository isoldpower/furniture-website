import HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration} from "webpack";
import {BuildOptions} from "../types";

export function buildGlobalPlugins(options: BuildOptions): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({
            template: options.paths.html
        })
    ]
}