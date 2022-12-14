'use strict';

const settings = require('../settings');
const { task, src, dest } = require('gulp');
const gulpIf = require('gulp-if');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const browserSync = require('browser-sync').get('Local Server');
const wait = require('gulp-wait');

const isDev = !process.env.NODE_ENV;


// Компиляция стилей проекта
task('styles', () => {
  let pluginsPostcss = [autoprefixer()];

  return src(`${settings.paths.src.styles}style.scss`)
    .pipe(wait(200))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss(pluginsPostcss))
    .pipe(csso({ forceMediaMerge: true, comments: false }))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(settings.paths.dest.styles))
    .pipe(gulpIf(isDev, browserSync.stream()));
});
