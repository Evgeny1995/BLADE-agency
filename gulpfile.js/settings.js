'use strict';

const dirs = {
  src: './source/',
  dest: './build/'
};

module.exports = {
  paths: {
    src: {
      root: dirs.src,
      styles: dirs.src + 'styles/',
      scripts: dirs.src + 'js/',
      images: {
        all: dirs.src + 'img/',
        icons: dirs.src + 'img/icons/',
        content: dirs.src + 'img/content/'
      },
      fonts: dirs.src + 'fonts/'
    },
    dest: {
      root: dirs.dest,
      styles: dirs.dest + 'css/',
      scripts: dirs.dest + 'js/',
      images: {
        all: dirs.dest + 'img/',
        content: dirs.dest + 'img/content/'
      },
      fonts: dirs.dest + 'fonts/'
    },
    dist: './dist'
  },
  vendor: {
    scripts: [
      './source/assets/scripts/jquery-3.5.0.min.js',
      './source/assets/scripts/jquery.fancybox.min.js',
      './source/assets/scripts/jquery.form.min.js',
      './source/assets/scripts/swiper.min.js',
      // './source/assets/scripts/aos.js',
      './source/assets/scripts/simplebar.min.js',
    ],
    styles: [
      './source/assets/styles/fancybox.min.css',
      './source/assets/styles/swiper.min.css',
      './source/assets/styles/normalize.min.css',
      // './source/assets/styles/aos.css'
      './source/assets/styles/simplebar.min.css'
    ]
  }
};
