/**
 * Created by Hermanik on 10.07.14.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            responsive: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    paths: ["less/"],
                    modifyVars: {
                        "columns" : 24
                    }
                },
                files: {
                    "src/css/bowtie.css": "src/less/core.less",
                    "website/css/bowtie.css": "src/less/core.less"
                }
            },

            noresponsive: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    modifyVars: {
                        "responsive" : false,
                        "columns" : 24
                    }
                },
                files: {
                    "src/css/bowtie-noneresposive.css": "src/less/core.less"
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

    grunt.registerTask('responsive', ['watch']);
    grunt.registerTask('noresponsive', ['watch']);
};