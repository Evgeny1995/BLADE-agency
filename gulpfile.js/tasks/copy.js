'use strict';

const settings = require('../settings');
const { task, src, dest } = require('gulp');

// Копирование вендорных JS файлов
task('copyjs', () =>
  src(settings.vendor.scripts).pipe(dest(settings.paths.dest.scripts))
);
// Копирование вендорных CSS файлов
task('copycss', () =>
  src(settings.vendor.styles).pipe(dest(settings.paths.dest.styles))
);
