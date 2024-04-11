export function buildFileLoader() {
    return {
        test: /\.(pdf|pptx?|docx?)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
}