/**
 * Created by ivan.datsiv on 4/28/2016.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['GoIT/markup/home/lesson_js_17-18/js/src1/*.js'],
                dest: 'GoIT/markup/home/lesson_js_17-18/js/dist/script.main.js'
            }
        },

        uglify: {
            dist: {
                src: ['GoIT/markup/home/lesson_js_17-18/js/dist/script.main.js'],
                dest: 'GoIT/markup/home/lesson_js_17-18/js/dist/script.main.min.js'
            }
        },

        sass: {
            dist: {
                files: {
                    //just one file
                    'GoIT/markup/home/lesson_js_19-20/css/main.css' : 'GoIT/markup/home/lesson_js_19-20/css/style.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['GoIT/markup/home/lesson_js_19-20/css/style.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};