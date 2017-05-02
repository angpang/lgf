var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence');

gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/lgf'));
});

// 将所有css文件连接为一个文件并压缩，存到dist/lgf/css
gulp.task('concatCss', function() {
    gulp.src(['css/*.css'])
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/lgf/css'));
});


// 将所有js文件连接为一个文件并压缩，存到public/js
gulp.task('concatJs', function() {
    gulp.src(['js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/lgf/js'));
});

// 拷贝images到目标目录
gulp.task('copyImages', function() {
    return gulp.src(['images/**/*'])
        .pipe(gulp.dest('dist/lgf/images'));
});

gulp.task('default', function (callback) {
    runSequence(
        'htmlmin',
        "concatCss",
        "concatJs",
        "copyImages",
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('RELEASE FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});
