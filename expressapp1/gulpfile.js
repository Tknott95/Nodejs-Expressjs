var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsFiles = ['*.js', 'src/**/**.js'];

gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint());
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var options= { bowerJson: require('./bower.json'),
    //hands on 10
}

    return gulp.src('./src/views*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
})