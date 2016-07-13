module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/index.css': 'lib/index.scss',
                    'css/conmon.css':'lib/conmon.scss'
                }
            }
        },
        clean:{
            dist:{
                src:['css/**/*']
            }
        },
        watch: {
            options: {
                livereload: true
            },
            target: {
                files: ['index.html']
            },
            sass: {
                files: ['lib/*.scss'],
                tasks:['clean','sass']
            }
        }
        
    })
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //执行sass编译
    grunt.registerTask('first',['clean','sass','watch'])
}

