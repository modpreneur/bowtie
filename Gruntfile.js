/**
 * Created by Hermanik on 10.07.14.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // "src/css/style.css": "src/less/core.less",
                    // "src/css/grid.css": "src/less/core-grid.less",
                    // "src/css/menu.css": "src/less/awesome-menu.less",
                    // "build/bowtie.css": "src/less/core.less",
                    "src/css/bowtie-2.0.0.css": "src/less/bowtie-2.0.0.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['src/less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};