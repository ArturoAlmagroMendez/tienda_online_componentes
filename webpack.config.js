const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // El archivo de entrada principal de tu aplicación.
  output: {
    filename: 'main.js', // El nombre del archivo JavaScript compilado.
    path: __dirname + '/dist', // La ruta de salida para los archivos compilados.
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // El archivo HTML que se usará como base para generar el HTML final.
    }),
  ],
};
