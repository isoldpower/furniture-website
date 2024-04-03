import {BuildOptions} from "./types";
import webpack from "webpack";
import {
    buildAssetLoader,
    buildModulesLoader,
    buildStylesLoader,
    buildSvgLoader,
    buildTypescriptLoader
} from "./loaders";

export function buildLoaders(options: BuildOptions): webpack.ModuleOptions['rules'] {
    const tsLoader = buildTypescriptLoader(options);
    const modulesLoader = buildModulesLoader(options);
    const stylesLoader = buildStylesLoader();
    const assetLoader = buildAssetLoader();
    const svgLoader = buildSvgLoader();

    return [
        tsLoader,
        assetLoader,
        modulesLoader,
        stylesLoader,
        svgLoader
    ]
}