/**
 * Created by ivan.datsiv on 4/28/2016.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['GoIT/markup/home/lesson_js_17-18/js/src/*.js'],
                dest: 'GoIT/markup/home/lesson_js_17-18/js/dist/script.main.js'
            }
        },

        uglify: {
            dist: {
                src:['GoIT/markup/home/lesson_js_17-18/js/dist/script.main.js'],
                dest: 'GoIT/markup/home/lesson_js_17-18/js/dist/script.main.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);

};