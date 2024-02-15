export const createPdf=(products)=>{
    var html1 = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap CSS Example</title>
  <!-- Bootstrap CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

<style>
  /************************************
    Custom bootsrap
*************************************/
.container-max {
  max-width: 1920px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1170px) {
  .container-max {
    padding-left: 30px;
    padding-right: 30px;
  }
}
.container-max.no-gutter {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;                                
  margin-right: auto;
  margin-left: auto;
}

/*!
 * Bootstrap Grid v4.5.2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 375px) {
  .container,
  .container-sm {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .container,
  .container-sm,
  .container-md {
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 100%;
  }
}

@media (min-width: 1170px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1170px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto,
.col-xxl-1,
.col-xxl-2,
.col-xxl-3,
.col-xxl-4,
.col-xxl-5,
.col-xxl-6,
.col-xxl-7,
.col-xxl-8,
.col-xxl-9,
.col-xxl-10,
.col-xxl-11,
.col-xxl-12,
.col-xxl,
.col-xxl-auto,
.col-xxxl-1,
.col-xxxl-2,
.col-xxxl-3,
.col-xxxl-4,
.col-xxxl-5,
.col-xxxl-6,
.col-xxxl-7,
.col-xxxl-8,
.col-xxxl-9,
.col-xxxl-10,
.col-xxxl-11,
.col-xxxl-12,
.col-xxxl,
.col-xxxl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
}

.col-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.col-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
}

.col-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
}

.col-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.33333%;
}

.offset-2 {
  margin-left: 16.66667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333%;
}

.offset-5 {
  margin-left: 41.66667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333%;
}

.offset-8 {
  margin-left: 66.66667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333%;
}

.offset-11 {
  margin-left: 91.66667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-sm-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-sm-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-sm-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-first {
    order: -1;
  }
  .order-sm-last {
    order: 13;
  }
  .order-sm-0 {
    order: 0;
  }
  .order-sm-1 {
    order: 1;
  }
  .order-sm-2 {
    order: 2;
  }
  .order-sm-3 {
    order: 3;
  }
  .order-sm-4 {
    order: 4;
  }
  .order-sm-5 {
    order: 5;
  }
  .order-sm-6 {
    order: 6;
  }
  .order-sm-7 {
    order: 7;
  }
  .order-sm-8 {
    order: 8;
  }
  .order-sm-9 {
    order: 9;
  }
  .order-sm-10 {
    order: 10;
  }
  .order-sm-11 {
    order: 11;
  }
  .order-sm-12 {
    order: 12;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333%;
  }
  .offset-sm-2 {
    margin-left: 16.66667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333%;
  }
  .offset-sm-5 {
    margin-left: 41.66667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333%;
  }
  .offset-sm-8 {
    margin-left: 66.66667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333%;
  }
  .offset-sm-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-md-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-md-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-md-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-md-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-first {
    order: -1;
  }
  .order-md-last {
    order: 13;
  }
  .order-md-0 {
    order: 0;
  }
  .order-md-1 {
    order: 1;
  }
  .order-md-2 {
    order: 2;
  }
  .order-md-3 {
    order: 3;
  }
  .order-md-4 {
    order: 4;
  }
  .order-md-5 {
    order: 5;
  }
  .order-md-6 {
    order: 6;
  }
  .order-md-7 {
    order: 7;
  }
  .order-md-8 {
    order: 8;
  }
  .order-md-9 {
    order: 9;
  }
  .order-md-10 {
    order: 10;
  }
  .order-md-11 {
    order: 11;
  }
  .order-md-12 {
    order: 12;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333%;
  }
  .offset-md-2 {
    margin-left: 16.66667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333%;
  }
  .offset-md-5 {
    margin-left: 41.66667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333%;
  }
  .offset-md-8 {
    margin-left: 66.66667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333%;
  }
  .offset-md-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-lg-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-lg-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-lg-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-first {
    order: -1;
  }
  .order-lg-last {
    order: 13;
  }
  .order-lg-0 {
    order: 0;
  }
  .order-lg-1 {
    order: 1;
  }
  .order-lg-2 {
    order: 2;
  }
  .order-lg-3 {
    order: 3;
  }
  .order-lg-4 {
    order: 4;
  }
  .order-lg-5 {
    order: 5;
  }
  .order-lg-6 {
    order: 6;
  }
  .order-lg-7 {
    order: 7;
  }
  .order-lg-8 {
    order: 8;
  }
  .order-lg-9 {
    order: 9;
  }
  .order-lg-10 {
    order: 10;
  }
  .order-lg-11 {
    order: 11;
  }
  .order-lg-12 {
    order: 12;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333%;
  }
  .offset-lg-2 {
    margin-left: 16.66667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333%;
  }
  .offset-lg-5 {
    margin-left: 41.66667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333%;
  }
  .offset-lg-8 {
    margin-left: 66.66667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333%;
  }
  .offset-lg-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 1170px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-xl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-xl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-xl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-xl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-xl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xl-first {
    order: -1;
  }
  .order-xl-last {
    order: 13;
  }
  .order-xl-0 {
    order: 0;
  }
  .order-xl-1 {
    order: 1;
  }
  .order-xl-2 {
    order: 2;
  }
  .order-xl-3 {
    order: 3;
  }
  .order-xl-4 {
    order: 4;
  }
  .order-xl-5 {
    order: 5;
  }
  .order-xl-6 {
    order: 6;
  }
  .order-xl-7 {
    order: 7;
  }
  .order-xl-8 {
    order: 8;
  }
  .order-xl-9 {
    order: 9;
  }
  .order-xl-10 {
    order: 10;
  }
  .order-xl-11 {
    order: 11;
  }
  .order-xl-12 {
    order: 12;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333%;
  }
  .offset-xl-2 {
    margin-left: 16.66667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333%;
  }
  .offset-xl-5 {
    margin-left: 41.66667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333%;
  }
  .offset-xl-8 {
    margin-left: 66.66667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333%;
  }
  .offset-xl-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 1400px) {
  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-xxl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-xxl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xxl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-xxl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-xxl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-xxl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-xxl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-xxl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-xxl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xxl-first {
    order: -1;
  }
  .order-xxl-last {
    order: 13;
  }
  .order-xxl-0 {
    order: 0;
  }
  .order-xxl-1 {
    order: 1;
  }
  .order-xxl-2 {
    order: 2;
  }
  .order-xxl-3 {
    order: 3;
  }
  .order-xxl-4 {
    order: 4;
  }
  .order-xxl-5 {
    order: 5;
  }
  .order-xxl-6 {
    order: 6;
  }
  .order-xxl-7 {
    order: 7;
  }
  .order-xxl-8 {
    order: 8;
  }
  .order-xxl-9 {
    order: 9;
  }
  .order-xxl-10 {
    order: 10;
  }
  .order-xxl-11 {
    order: 11;
  }
  .order-xxl-12 {
    order: 12;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 1770px) {
  .col-xxxl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-xxxl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-xxxl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-xxxl-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-xxxl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-xxxl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-xxxl-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xxxl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-xxxl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-xxxl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xxxl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xxxl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-xxxl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-xxxl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xxxl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-xxxl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-xxxl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xxxl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-xxxl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-xxxl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xxxl-first {
    order: -1;
  }
  .order-xxxl-last {
    order: 13;
  }
  .order-xxxl-0 {
    order: 0;
  }
  .order-xxxl-1 {
    order: 1;
  }
  .order-xxxl-2 {
    order: 2;
  }
  .order-xxxl-3 {
    order: 3;
  }
  .order-xxxl-4 {
    order: 4;
  }
  .order-xxxl-5 {
    order: 5;
  }
  .order-xxxl-6 {
    order: 6;
  }
  .order-xxxl-7 {
    order: 7;
  }
  .order-xxxl-8 {
    order: 8;
  }
  .order-xxxl-9 {
    order: 9;
  }
  .order-xxxl-10 {
    order: 10;
  }
  .order-xxxl-11 {
    order: 11;
  }
  .order-xxxl-12 {
    order: 12;
  }
  .offset-xxxl-0 {
    margin-left: 0;
  }
  .offset-xxxl-1 {
    margin-left: 8.33333%;
  }
  .offset-xxxl-2 {
    margin-left: 16.66667%;
  }
  .offset-xxxl-3 {
    margin-left: 25%;
  }
  .offset-xxxl-4 {
    margin-left: 33.33333%;
  }
  .offset-xxxl-5 {
    margin-left: 41.66667%;
  }
  .offset-xxxl-6 {
    margin-left: 50%;
  }
  .offset-xxxl-7 {
    margin-left: 58.33333%;
  }
  .offset-xxxl-8 {
    margin-left: 66.66667%;
  }
  .offset-xxxl-9 {
    margin-left: 75%;
  }
  .offset-xxxl-10 {
    margin-left: 83.33333%;
  }
  .offset-xxxl-11 {
    margin-left: 91.66667%;
  }
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 1170px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 1400px) {
  .d-xxl-none {
    display: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 1770px) {
  .d-xxxl-none {
    display: none !important;
  }
  .d-xxxl-inline {
    display: inline !important;
  }
  .d-xxxl-inline-block {
    display: inline-block !important;
  }
  .d-xxxl-block {
    display: block !important;
  }
  .d-xxxl-table {
    display: table !important;
  }
  .d-xxxl-table-row {
    display: table-row !important;
  }
  .d-xxxl-table-cell {
    display: table-cell !important;
  }
  .d-xxxl-flex {
    display: flex !important;
  }
  .d-xxxl-inline-flex {
    display: inline-flex !important;
  }
}

@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 1170px) {
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 1400px) {
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
    justify-content: center !important;
  }
  .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxl-center {
    align-items: center !important;
  }
  .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-between {
    align-content: space-between !important;
  }
  .align-content-xxl-around {
    align-content: space-around !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 1770px) {
  .flex-xxxl-row {
    flex-direction: row !important;
  }
  .flex-xxxl-column {
    flex-direction: column !important;
  }
  .flex-xxxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-xxxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-xxxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxxl-center {
    justify-content: center !important;
  }
  .justify-content-xxxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxxl-around {
    justify-content: space-around !important;
  }
  .align-items-xxxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxxl-center {
    align-items: center !important;
  }
  .align-items-xxxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxxl-center {
    align-content: center !important;
  }
  .align-content-xxxl-between {
    align-content: space-between !important;
  }
  .align-content-xxxl-around {
    align-content: space-around !important;
  }
  .align-content-xxxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxxl-auto {
    align-self: auto !important;
  }
  .align-self-xxxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxxl-center {
    align-self: center !important;
  }
  .align-self-xxxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxxl-stretch {
    align-self: stretch !important;
  }
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (max-width: 767px) {
  #closeFilter {
    display: block;
  }
  #filter {
    /* border-top: 1px solid black; */
    height: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    bottom: 0%;
    right: 2%;
    z-index: 12;
    width: 96%;
    background: white;
  }
  @keyframes closeFilter {
    0% {
      bottom: 0%;
    }
    100% {
      bottom: -95%;
    }
  }
  @keyframes openFilter {
    0% {
      bottom: -95%;
    }
    100% {
      bottom: 0%;
    }
  }
  #categoryFilter {
    border-radius: 10px 10px 0 0;
    position: fixed;
    z-index: 15;
    width: 100vw;
    left: 0%;
    right: 0%;
    /* bottom: 1%; */
    bottom: -95%;
    box-shadow: 0 0 10px black;
    padding: 15px;
    background: white;
    animation-duration: 2s;
  }
}
@media (min-width: 768px) {
  #closeFilter {
    display: none;
  }
}
@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .pt-sm-3,
  .py-sm-3 {
    padding-top: 1rem !important;
  }
  .pr-sm-3,
  .px-sm-3 {
    padding-right: 1rem !important;
  }
  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pl-sm-3,
  .px-sm-3 {
    padding-left: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .pt-sm-5,
  .py-sm-5 {
    padding-top: 3rem !important;
  }
  .pr-sm-5,
  .px-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 3rem !important;
  }
  .pl-sm-5,
  .px-sm-5 {
    padding-left: 3rem !important;
  }
  .m-sm-n1 {
    margin: -0.25rem !important;
  }
  .mt-sm-n1,
  .my-sm-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-sm-n1,
  .mx-sm-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-sm-n1,
  .my-sm-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-sm-n1,
  .mx-sm-n1 {
    margin-left: -0.25rem !important;
  }
  .m-sm-n2 {
    margin: -0.5rem !important;
  }
  .mt-sm-n2,
  .my-sm-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-sm-n2,
  .mx-sm-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-sm-n2,
  .my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-sm-n2,
  .mx-sm-n2 {
    margin-left: -0.5rem !important;
  }
  .m-sm-n3 {
    margin: -1rem !important;
  }
  .mt-sm-n3,
  .my-sm-n3 {
    margin-top: -1rem !important;
  }
  .mr-sm-n3,
  .mx-sm-n3 {
    margin-right: -1rem !important;
  }
  .mb-sm-n3,
  .my-sm-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-sm-n3,
  .mx-sm-n3 {
    margin-left: -1rem !important;
  }
  .m-sm-n4 {
    margin: -1.5rem !important;
  }
  .mt-sm-n4,
  .my-sm-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-sm-n4,
  .mx-sm-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-sm-n4,
  .my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-sm-n4,
  .mx-sm-n4 {
    margin-left: -1.5rem !important;
  }
  .m-sm-n5 {
    margin: -3rem !important;
  }
  .mt-sm-n5,
  .my-sm-n5 {
    margin-top: -3rem !important;
  }
  .mr-sm-n5,
  .mx-sm-n5 {
    margin-right: -3rem !important;
  }
  .mb-sm-n5,
  .my-sm-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-sm-n5,
  .mx-sm-n5 {
    margin-left: -3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 768px) {
  #filter {
    display: none;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important;
  }
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important;
  }
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important;
  }
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .pt-md-1,
  .py-md-1 {
    padding-top: 0.25rem !important;
  }
  .pr-md-1,
  .px-md-1 {
    padding-right: 0.25rem !important;
  }
  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-md-1,
  .px-md-1 {
    padding-left: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .pt-md-2,
  .py-md-2 {
    padding-top: 0.5rem !important;
  }
  .pr-md-2,
  .px-md-2 {
    padding-right: 0.5rem !important;
  }
  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-md-2,
  .px-md-2 {
    padding-left: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .pt-md-3,
  .py-md-3 {
    padding-top: 1rem !important;
  }
  .pr-md-3,
  .px-md-3 {
    padding-right: 1rem !important;
  }
  .pb-md-3,
  .py-md-3 {
    padding-bottom: 1rem !important;
  }
  .pl-md-3,
  .px-md-3 {
    padding-left: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important;
  }
  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important;
  }
  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .pt-md-5,
  .py-md-5 {
    padding-top: 3rem !important;
  }
  .pr-md-5,
  .px-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-5,
  .py-md-5 {
    padding-bottom: 3rem !important;
  }
  .pl-md-5,
  .px-md-5 {
    padding-left: 3rem !important;
  }
  .m-md-n1 {
    margin: -0.25rem !important;
  }
  .mt-md-n1,
  .my-md-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-md-n1,
  .mx-md-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-md-n1,
  .my-md-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-md-n1,
  .mx-md-n1 {
    margin-left: -0.25rem !important;
  }
  .m-md-n2 {
    margin: -0.5rem !important;
  }
  .mt-md-n2,
  .my-md-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-md-n2,
  .mx-md-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-md-n2,
  .my-md-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-md-n2,
  .mx-md-n2 {
    margin-left: -0.5rem !important;
  }
  .m-md-n3 {
    margin: -1rem !important;
  }
  .mt-md-n3,
  .my-md-n3 {
    margin-top: -1rem !important;
  }
  .mr-md-n3,
  .mx-md-n3 {
    margin-right: -1rem !important;
  }
  .mb-md-n3,
  .my-md-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-md-n3,
  .mx-md-n3 {
    margin-left: -1rem !important;
  }
  .m-md-n4 {
    margin: -1.5rem !important;
  }
  .mt-md-n4,
  .my-md-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-md-n4,
  .mx-md-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-md-n4,
  .my-md-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-md-n4,
  .mx-md-n4 {
    margin-left: -1.5rem !important;
  }
  .m-md-n5 {
    margin: -3rem !important;
  }
  .mt-md-n5,
  .my-md-n5 {
    margin-top: -3rem !important;
  }
  .mr-md-n5,
  .mx-md-n5 {
    margin-right: -3rem !important;
  }
  .mb-md-n5,
  .my-md-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-md-n5,
  .mx-md-n5 {
    margin-left: -3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important;
  }
  .m-lg-n1 {
    margin: -0.25rem !important;
  }
  .mt-lg-n1,
  .my-lg-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-lg-n1,
  .mx-lg-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-lg-n1,
  .my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-lg-n1,
  .mx-lg-n1 {
    margin-left: -0.25rem !important;
  }
  .m-lg-n2 {
    margin: -0.5rem !important;
  }
  .mt-lg-n2,
  .my-lg-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-lg-n2,
  .mx-lg-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-lg-n2,
  .my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-lg-n2,
  .mx-lg-n2 {
    margin-left: -0.5rem !important;
  }
  .m-lg-n3 {
    margin: -1rem !important;
  }
  .mt-lg-n3,
  .my-lg-n3 {
    margin-top: -1rem !important;
  }
  .mr-lg-n3,
  .mx-lg-n3 {
    margin-right: -1rem !important;
  }
  .mb-lg-n3,
  .my-lg-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-lg-n3,
  .mx-lg-n3 {
    margin-left: -1rem !important;
  }
  .m-lg-n4 {
    margin: -1.5rem !important;
  }
  .mt-lg-n4,
  .my-lg-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-lg-n4,
  .mx-lg-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-lg-n4,
  .my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1.5rem !important;
  }
  .m-lg-n5 {
    margin: -3rem !important;
  }
  .mt-lg-n5,
  .my-lg-n5 {
    margin-top: -3rem !important;
  }
  .mr-lg-n5,
  .mx-lg-n5 {
    margin-right: -3rem !important;
  }
  .mb-lg-n5,
  .my-lg-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-lg-n5,
  .mx-lg-n5 {
    margin-left: -3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1170px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important;
  }
  .m-xl-n1 {
    margin: -0.25rem !important;
  }
  .mt-xl-n1,
  .my-xl-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-xl-n1,
  .mx-xl-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-xl-n1,
  .my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-xl-n1,
  .mx-xl-n1 {
    margin-left: -0.25rem !important;
  }
  .m-xl-n2 {
    margin: -0.5rem !important;
  }
  .mt-xl-n2,
  .my-xl-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-xl-n2,
  .mx-xl-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-xl-n2,
  .my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-xl-n2,
  .mx-xl-n2 {
    margin-left: -0.5rem !important;
  }
  .m-xl-n3 {
    margin: -1rem !important;
  }
  .mt-xl-n3,
  .my-xl-n3 {
    margin-top: -1rem !important;
  }
  .mr-xl-n3,
  .mx-xl-n3 {
    margin-right: -1rem !important;
  }
  .mb-xl-n3,
  .my-xl-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-xl-n3,
  .mx-xl-n3 {
    margin-left: -1rem !important;
  }
  .m-xl-n4 {
    margin: -1.5rem !important;
  }
  .mt-xl-n4,
  .my-xl-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-xl-n4,
  .mx-xl-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-xl-n4,
  .my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-xl-n4,
  .mx-xl-n4 {
    margin-left: -1.5rem !important;
  }
  .m-xl-n5 {
    margin: -3rem !important;
  }
  .mt-xl-n5,
  .my-xl-n5 {
    margin-top: -3rem !important;
  }
  .mr-xl-n5,
  .mx-xl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xl-n5,
  .my-xl-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-xl-n5,
  .mx-xl-n5 {
    margin-left: -3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1400px) {
  .m-xxl-0 {
    margin: 0 !important;
  }
  .mt-xxl-0,
  .my-xxl-0 {
    margin-top: 0 !important;
  }
  .mr-xxl-0,
  .mx-xxl-0 {
    margin-right: 0 !important;
  }
  .mb-xxl-0,
  .my-xxl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xxl-0,
  .mx-xxl-0 {
    margin-left: 0 !important;
  }
  .m-xxl-1 {
    margin: 0.25rem !important;
  }
  .mt-xxl-1,
  .my-xxl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xxl-1,
  .mx-xxl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xxl-1,
  .my-xxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xxl-1,
  .mx-xxl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xxl-2 {
    margin: 0.5rem !important;
  }
  .mt-xxl-2,
  .my-xxl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xxl-2,
  .mx-xxl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xxl-2,
  .my-xxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xxl-2,
  .mx-xxl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xxl-3 {
    margin: 1rem !important;
  }
  .mt-xxl-3,
  .my-xxl-3 {
    margin-top: 1rem !important;
  }
  .mr-xxl-3,
  .mx-xxl-3 {
    margin-right: 1rem !important;
  }
  .mb-xxl-3,
  .my-xxl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xxl-3,
  .mx-xxl-3 {
    margin-left: 1rem !important;
  }
  .m-xxl-4 {
    margin: 1.5rem !important;
  }
  .mt-xxl-4,
  .my-xxl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xxl-4,
  .mx-xxl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xxl-4,
  .my-xxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xxl-4,
  .mx-xxl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xxl-5 {
    margin: 3rem !important;
  }
  .mt-xxl-5,
  .my-xxl-5 {
    margin-top: 3rem !important;
  }
  .mr-xxl-5,
  .mx-xxl-5 {
    margin-right: 3rem !important;
  }
  .mb-xxl-5,
  .my-xxl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xxl-5,
  .mx-xxl-5 {
    margin-left: 3rem !important;
  }
  .p-xxl-0 {
    padding: 0 !important;
  }
  .pt-xxl-0,
  .py-xxl-0 {
    padding-top: 0 !important;
  }
  .pr-xxl-0,
  .px-xxl-0 {
    padding-right: 0 !important;
  }
  .pb-xxl-0,
  .py-xxl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xxl-0,
  .px-xxl-0 {
    padding-left: 0 !important;
  }
  .p-xxl-1 {
    padding: 0.25rem !important;
  }
  .pt-xxl-1,
  .py-xxl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xxl-1,
  .px-xxl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xxl-1,
  .py-xxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xxl-1,
  .px-xxl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xxl-2 {
    padding: 0.5rem !important;
  }
  .pt-xxl-2,
  .py-xxl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xxl-2,
  .px-xxl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xxl-2,
  .py-xxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xxl-2,
  .px-xxl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xxl-3 {
    padding: 1rem !important;
  }
  .pt-xxl-3,
  .py-xxl-3 {
    padding-top: 1rem !important;
  }
  .pr-xxl-3,
  .px-xxl-3 {
    padding-right: 1rem !important;
  }
  .pb-xxl-3,
  .py-xxl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xxl-3,
  .px-xxl-3 {
    padding-left: 1rem !important;
  }
  .p-xxl-4 {
    padding: 1.5rem !important;
  }
  .pt-xxl-4,
  .py-xxl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xxl-4,
  .px-xxl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xxl-4,
  .py-xxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xxl-4,
  .px-xxl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xxl-5 {
    padding: 3rem !important;
  }
  .pt-xxl-5,
  .py-xxl-5 {
    padding-top: 3rem !important;
  }
  .pr-xxl-5,
  .px-xxl-5 {
    padding-right: 3rem !important;
  }
  .pb-xxl-5,
  .py-xxl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xxl-5,
  .px-xxl-5 {
    padding-left: 3rem !important;
  }
  .m-xxl-n1 {
    margin: -0.25rem !important;
  }
  .mt-xxl-n1,
  .my-xxl-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-xxl-n1,
  .mx-xxl-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-xxl-n1,
  .my-xxl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-xxl-n1,
  .mx-xxl-n1 {
    margin-left: -0.25rem !important;
  }
  .m-xxl-n2 {
    margin: -0.5rem !important;
  }
  .mt-xxl-n2,
  .my-xxl-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-xxl-n2,
  .mx-xxl-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-xxl-n2,
  .my-xxl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-xxl-n2,
  .mx-xxl-n2 {
    margin-left: -0.5rem !important;
  }
  .m-xxl-n3 {
    margin: -1rem !important;
  }
  .mt-xxl-n3,
  .my-xxl-n3 {
    margin-top: -1rem !important;
  }
  .mr-xxl-n3,
  .mx-xxl-n3 {
    margin-right: -1rem !important;
  }
  .mb-xxl-n3,
  .my-xxl-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-xxl-n3,
  .mx-xxl-n3 {
    margin-left: -1rem !important;
  }
  .m-xxl-n4 {
    margin: -1.5rem !important;
  }
  .mt-xxl-n4,
  .my-xxl-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-xxl-n4,
  .mx-xxl-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-xxl-n4,
  .my-xxl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-xxl-n4,
  .mx-xxl-n4 {
    margin-left: -1.5rem !important;
  }
  .m-xxl-n5 {
    margin: -3rem !important;
  }
  .mt-xxl-n5,
  .my-xxl-n5 {
    margin-top: -3rem !important;
  }
  .mr-xxl-n5,
  .mx-xxl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xxl-n5,
  .my-xxl-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-xxl-n5,
  .mx-xxl-n5 {
    margin-left: -3rem !important;
  }
  .m-xxl-auto {
    margin: auto !important;
  }
  .mt-xxl-auto,
  .my-xxl-auto {
    margin-top: auto !important;
  }
  .mr-xxl-auto,
  .mx-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-auto,
  .my-xxl-auto {
    margin-bottom: auto !important;
  }
  .ml-xxl-auto,
  .mx-xxl-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1770px) {
  .m-xxxl-0 {
    margin: 0 !important;
  }
  .mt-xxxl-0,
  .my-xxxl-0 {
    margin-top: 0 !important;
  }
  .mr-xxxl-0,
  .mx-xxxl-0 {
    margin-right: 0 !important;
  }
  .mb-xxxl-0,
  .my-xxxl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xxxl-0,
  .mx-xxxl-0 {
    margin-left: 0 !important;
  }
  .m-xxxl-1 {
    margin: 0.25rem !important;
  }
  .mt-xxxl-1,
  .my-xxxl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xxxl-1,
  .mx-xxxl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xxxl-1,
  .my-xxxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xxxl-1,
  .mx-xxxl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xxxl-2 {
    margin: 0.5rem !important;
  }
  .mt-xxxl-2,
  .my-xxxl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xxxl-2,
  .mx-xxxl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xxxl-2,
  .my-xxxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xxxl-2,
  .mx-xxxl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xxxl-3 {
    margin: 1rem !important;
  }
  .mt-xxxl-3,
  .my-xxxl-3 {
    margin-top: 1rem !important;
  }
  .mr-xxxl-3,
  .mx-xxxl-3 {
    margin-right: 1rem !important;
  }
  .mb-xxxl-3,
  .my-xxxl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xxxl-3,
  .mx-xxxl-3 {
    margin-left: 1rem !important;
  }
  .m-xxxl-4 {
    margin: 1.5rem !important;
  }
  .mt-xxxl-4,
  .my-xxxl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xxxl-4,
  .mx-xxxl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xxxl-4,
  .my-xxxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xxxl-4,
  .mx-xxxl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xxxl-5 {
    margin: 3rem !important;
  }
  .mt-xxxl-5,
  .my-xxxl-5 {
    margin-top: 3rem !important;
  }
  .mr-xxxl-5,
  .mx-xxxl-5 {
    margin-right: 3rem !important;
  }
  .mb-xxxl-5,
  .my-xxxl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xxxl-5,
  .mx-xxxl-5 {
    margin-left: 3rem !important;
  }
  .p-xxxl-0 {
    padding: 0 !important;
  }
  .pt-xxxl-0,
  .py-xxxl-0 {
    padding-top: 0 !important;
  }
  .pr-xxxl-0,
  .px-xxxl-0 {
    padding-right: 0 !important;
  }
  .pb-xxxl-0,
  .py-xxxl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xxxl-0,
  .px-xxxl-0 {
    padding-left: 0 !important;
  }
  .p-xxxl-1 {
    padding: 0.25rem !important;
  }
  .pt-xxxl-1,
  .py-xxxl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xxxl-1,
  .px-xxxl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xxxl-1,
  .py-xxxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xxxl-1,
  .px-xxxl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xxxl-2 {
    padding: 0.5rem !important;
  }
  .pt-xxxl-2,
  .py-xxxl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xxxl-2,
  .px-xxxl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xxxl-2,
  .py-xxxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xxxl-2,
  .px-xxxl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xxxl-3 {
    padding: 1rem !important;
  }
  .pt-xxxl-3,
  .py-xxxl-3 {
    padding-top: 1rem !important;
  }
  .pr-xxxl-3,
  .px-xxxl-3 {
    padding-right: 1rem !important;
  }
  .pb-xxxl-3,
  .py-xxxl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xxxl-3,
  .px-xxxl-3 {
    padding-left: 1rem !important;
  }
  .p-xxxl-4 {
    padding: 1.5rem !important;
  }
  .pt-xxxl-4,
  .py-xxxl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xxxl-4,
  .px-xxxl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xxxl-4,
  .py-xxxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xxxl-4,
  .px-xxxl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xxxl-5 {
    padding: 3rem !important;
  }
  .pt-xxxl-5,
  .py-xxxl-5 {
    padding-top: 3rem !important;
  }
  .pr-xxxl-5,
  .px-xxxl-5 {
    padding-right: 3rem !important;
  }
  .pb-xxxl-5,
  .py-xxxl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xxxl-5,
  .px-xxxl-5 {
    padding-left: 3rem !important;
  }
  .m-xxxl-n1 {
    margin: -0.25rem !important;
  }
  .mt-xxxl-n1,
  .my-xxxl-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-xxxl-n1,
  .mx-xxxl-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-xxxl-n1,
  .my-xxxl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-xxxl-n1,
  .mx-xxxl-n1 {
    margin-left: -0.25rem !important;
  }
  .m-xxxl-n2 {
    margin: -0.5rem !important;
  }
  .mt-xxxl-n2,
  .my-xxxl-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-xxxl-n2,
  .mx-xxxl-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-xxxl-n2,
  .my-xxxl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-xxxl-n2,
  .mx-xxxl-n2 {
    margin-left: -0.5rem !important;
  }
  .m-xxxl-n3 {
    margin: -1rem !important;
  }
  .mt-xxxl-n3,
  .my-xxxl-n3 {
    margin-top: -1rem !important;
  }
  .mr-xxxl-n3,
  .mx-xxxl-n3 {
    margin-right: -1rem !important;
  }
  .mb-xxxl-n3,
  .my-xxxl-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-xxxl-n3,
  .mx-xxxl-n3 {
    margin-left: -1rem !important;
  }
  .m-xxxl-n4 {
    margin: -1.5rem !important;
  }
  .mt-xxxl-n4,
  .my-xxxl-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-xxxl-n4,
  .mx-xxxl-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-xxxl-n4,
  .my-xxxl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-xxxl-n4,
  .mx-xxxl-n4 {
    margin-left: -1.5rem !important;
  }
  .m-xxxl-n5 {
    margin: -3rem !important;
  }
  .mt-xxxl-n5,
  .my-xxxl-n5 {
    margin-top: -3rem !important;
  }
  .mr-xxxl-n5,
  .mx-xxxl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xxxl-n5,
  .my-xxxl-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-xxxl-n5,
  .mx-xxxl-n5 {
    margin-left: -3rem !important;
  }
  .m-xxxl-auto {
    margin: auto !important;
  }
  .mt-xxxl-auto,
  .my-xxxl-auto {
    margin-top: auto !important;
  }
  .mr-xxxl-auto,
  .mx-xxxl-auto {
    margin-right: auto !important;
  }
  .mb-xxxl-auto,
  .my-xxxl-auto {
    margin-bottom: auto !important;
  }
  .ml-xxxl-auto,
  .mx-xxxl-auto {
    margin-left: auto !important;
  }
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Spartan", sans-serif;
  font-weight: normal;
  font-size: 16px;
}
@media only screen and (max-width: 992px) {
  html,
  body {
    font-size: 15px;
  }
}
@media only screen and (max-width: 768px) {
  html,
  body {
    font-size: 14px;
  }
}

* {
  box-sizing: border-box;
}

html {
  line-height: 1;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

body {
  margin: 0;
  overflow-x: hidden;
}

main {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

hr {
  box-sizing: content-box;
  /* 1 */
  height: 1;
  /* 1 */
  overflow: visible;
  /* 2 */
}

pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button {
  cursor: pointer;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button:focus,
select:focus {
  outline: 0;
  box-shadow: none;
}

input:focus {
  outline: 0;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

@font-face {
  font-family: "Braga";
  src: url("../fonts/BragaRegular.eot");
  src: url("../fonts/BragaRegular.eot") format("embedded-opentype"),
    url("../fonts/BragaRegular.woff") format("woff"),
    url("../fonts/BragaRegular.woff2") format("woff2"),
    url("../fonts/BragaRegular.ttf") format("truetype"),
    url("../fonts/BragaRegular.otf") format("opentype");
}

.container-full-half {
  max-width: 1700px;
  width: 100%;
  padding-right: 35px;
  padding-left: 35px;
  margin-right: auto;
  margin-left: auto;
}
@media (max-width: 1199.98px) {
  .container-full-half {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.accordion-group {
  border-bottom: 1px solid #e1e1e1;
  padding: 1.25em 0;
}
.accordion-group:last-child {
  border-bottom: 0;
}
.accordion-group.active .accordion-header:after {
  content: "\f106";
}

.accordion-header {
  cursor: pointer;
}
.accordion-header:after {
  content: "\f107";
  font-family: "Font Awesome 5 Pro";
  display: inline-block;
  font-size: 14px;
  float: right;
  font-weight: 500;
}
.accordion-header > a {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.accordion-header > a:hover {
  color: #f26460;
}

.accordion-content {
  margin-left: 0;
  margin-top: 0.9375em;
}

.add-to-cart {
  position: relative;
  height: 3.125em;
  display: inline-block;
  padding: 0 1.875em 0 4.375em;
  border-radius: 999px;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.add-to-cart.-dark,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.add-to-cart,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.add-to-cart {
  background-color: #111;
}
.add-to-cart.-dark h5,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.add-to-cart
  h5,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.add-to-cart
  h5 {
  color: #fff;
}
.add-to-cart.-disable {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
  padding: 0 4.375em 0 1.875em;
}
.add-to-cart.-disable .btn,
.add-to-cart.-disable
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .add-to-cart.-disable
  button,
.add-to-cart.-disable .paginator li button,
.paginator li .add-to-cart.-disable button,
.add-to-cart.-disable .category-two .slick-arrow,
.category-two .add-to-cart.-disable .slick-arrow,
.add-to-cart.-disable
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .add-to-cart.-disable
  button,
.add-to-cart.-disable
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .add-to-cart.-disable
  button,
.add-to-cart.-disable .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .add-to-cart.-disable .slick-arrow,
.add-to-cart.-disable .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .add-to-cart.-disable .slick-arrow,
.add-to-cart.-disable .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .add-to-cart.-disable .slick-arrow,
.add-to-cart.-disable .testimonial-three .slick-arrow,
.testimonial-three .add-to-cart.-disable .slick-arrow {
  left: 100%;
  transform: translateX(-100%);
}
.add-to-cart .btn,
.add-to-cart
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .add-to-cart
  button,
.add-to-cart .paginator li button,
.paginator li .add-to-cart button,
.add-to-cart .category-two .slick-arrow,
.category-two .add-to-cart .slick-arrow,
.add-to-cart
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .add-to-cart
  button,
.add-to-cart .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form .add-to-cart button,
.add-to-cart .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .add-to-cart .slick-arrow,
.add-to-cart .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .add-to-cart .slick-arrow,
.add-to-cart .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .add-to-cart .slick-arrow,
.add-to-cart .testimonial-three .slick-arrow,
.testimonial-three .add-to-cart .slick-arrow {
  position: absolute;
  left: 0;
  top: 0;
  height: 3.84615em;
  width: 3.84615em;
  padding: 0;
  line-height: 3.84615em;
  transition: 0.2s ease-in-out;
}
.add-to-cart h5 {
  color: #111;
  font-size: 0.8125em;
  font-weight: 600;
  line-height: 3.84615em;
  text-transform: uppercase;
}
.add-to-cart:hover {
  padding: 0 4.375em 0 1.875em;
}
.add-to-cart:hover .btn,
.add-to-cart:hover
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .add-to-cart:hover
  button,
.add-to-cart:hover .paginator li button,
.paginator li .add-to-cart:hover button,
.add-to-cart:hover .category-two .slick-arrow,
.category-two .add-to-cart:hover .slick-arrow,
.add-to-cart:hover
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .add-to-cart:hover
  button,
.add-to-cart:hover .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form .add-to-cart:hover button,
.add-to-cart:hover .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .add-to-cart:hover .slick-arrow,
.add-to-cart:hover .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .add-to-cart:hover .slick-arrow,
.add-to-cart:hover .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .add-to-cart:hover .slick-arrow,
.add-to-cart:hover .testimonial-three .slick-arrow,
.testimonial-three .add-to-cart:hover .slick-arrow {
  left: 100%;
  transform: translateX(-100%);
}

@media only screen and (max-width: 992px) {
  .benefits {
    font-size: 16px;
  }
}

.benefits__item {
  display: flex;
  align-items: flex-start;
}
.benefits__item:hover .benefits__item__icon {
  animation: pulse 1s forwards;
}
@media only screen and (max-width: 992px) {
  .benefits__item {
    margin-bottom: 1.875em;
  }
}
.benefits__item__icon {
  width: 1.875em;
  margin-right: 1.5625em;
}
.benefits__item__icon img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.benefits__item__content h5 {
  color: #111;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.625em;
}
.benefits__item__content p {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1.69231em;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.blog-sidebar__section {
  padding-bottom: 2.5em;
  margin-bottom: 2.5em;
  border-bottom: 1px solid #e1e1e1;
}
.blog-sidebar__section:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.blog-sidebar__section.-search form {
  position: relative;
}
.blog-sidebar__section.-search form input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.125em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input:focus {
  outline: 0;
}
.blog-sidebar__section.-search form input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
  line-height: -moz-block-height;
}
.blog-sidebar__section.-search form input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
  line-height: -moz-block-height;
}
.blog-sidebar__section.-search form input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.125em;
}
.blog-sidebar__section.-search form button {
  position: absolute;
  top: 50%;
  right: 1.25em;
  transform: translateY(-50%);
  color: #111;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  background-color: transparent;
  border: 0;
}
.blog-sidebar__section.-search form button:hover {
  color: #f26460;
}
.blog-sidebar__section.-categories ul {
  list-style: none;
}
.blog-sidebar__section.-categories ul li {
  margin-bottom: 1.25em;
}
.blog-sidebar__section.-categories ul li a {
  color: #888;
  font-size: 0.9375em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.blog-sidebar__section.-categories ul li a:hover {
  color: #111;
}
.blog-sidebar__section.-categories ul li a span {
  float: right;
}
.blog-sidebar__section.-polular-post .post-card-three {
  margin-bottom: 1.875em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"] {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.21429em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  margin-bottom: 1.07143em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]:focus {
  outline: 0;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  input[type="email"]::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.blog-sidebar__section.-newsletter .blog-sidebar-newsletter .mc-form label {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 2em;
  display: block;
  margin-bottom: 1.25em;
}
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  label
  input {
  margin-right: 0.625em;
}
.blog-sidebar__section.-newsletter .blog-sidebar-newsletter .mc-form button {
  height: 3.46154em !important;
  padding: 0 2.30769em !important;
}
.blog-sidebar__section.-newsletter p {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.86667em;
  margin-bottom: 1.33333em;
}

.blog-sidebar__title {
  color: #111;
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.75em;
}

.breadcrumb {
  text-align: center;
  background-image: url("../images/common/Breadcrumb/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3.125em 0;
  margin-bottom: 6.25rem;
}
.breadcrumb h2 {
  color: #111;
  font-size: 3.125em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.4em;
}
.breadcrumb ul {
  list-style: none;
}
.breadcrumb ul li {
  display: inline-block;
}
.breadcrumb ul li.active {
  color: #f26460;
}
.breadcrumb ul li:last-child:after {
  display: none;
}
.breadcrumb ul li:after {
  content: "/";
  margin: 0 0.625em;
}

.btn,
.blog-sidebar__section.-newsletter .blog-sidebar-newsletter .mc-form button,
.paginator li button,
.category-two .slick-arrow,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form button,
.product-detail__slide-two__small .slick-arrow,
.product-tab-slide__content .slick-arrow,
.slider.-style-3 .slider__carousel .slick-arrow,
.testimonial-three .slick-arrow {
  transition: 0.2s ease-in-out;
  font-size: 0.8125em;
  line-height: 1.625em;
  text-align: center;
  text-decoration: none;
  width: auto;
  height: auto;
  display: inline-block;
  padding: 1.15385em 2.30769em;
  text-transform: uppercase;
  font-weight: 600;
  border: 0;
  letter-spacing: 0.1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}
.btn.-disable,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-disable,
.paginator li button.-disable,
.category-two .-disable.slick-arrow,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button.-disable,
.footer-two__content .footer-two-newsletter .mc-form button.-disable,
.product-detail__slide-two__small .-disable.slick-arrow,
.product-tab-slide__content .-disable.slick-arrow,
.slider.-style-3 .slider__carousel .-disable.slick-arrow,
.testimonial-three .-disable.slick-arrow {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}
.btn.-round,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-round,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .paginator
  li
  button,
.paginator
  li
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow,
.product-detail__slide-two__small
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.slick-arrow,
.paginator li button,
.category-two .-round.slick-arrow,
.category-two .paginator li button.slick-arrow,
.paginator li .category-two button.slick-arrow,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button.-round,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .paginator
  li
  button,
.paginator
  li
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow,
.product-detail__slide-two__small
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.slick-arrow,
.footer-two__content .footer-two-newsletter .mc-form button.-round,
.footer-two__content .footer-two-newsletter .mc-form .paginator li button,
.paginator li .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow,
.product-detail__slide-two__small
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button.slick-arrow,
.product-detail__slide-two__small .slick-arrow,
.product-tab-slide__content .-round.slick-arrow,
.product-tab-slide__content .paginator li button.slick-arrow,
.paginator li .product-tab-slide__content button.slick-arrow,
.slider.-style-3 .slider__carousel .-round.slick-arrow,
.slider.-style-3 .slider__carousel .paginator li button.slick-arrow,
.paginator li .slider.-style-3 .slider__carousel button.slick-arrow,
.slider.-style-3
  .slider__carousel
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.testimonial-three .-round.slick-arrow,
.testimonial-three .paginator li button.slick-arrow,
.paginator li .testimonial-three button.slick-arrow {
  border-radius: 999px;
}
.btn.-underline,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-underline,
.paginator li button.-underline,
.category-two .-underline.slick-arrow,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-underline,
.footer-two__content .footer-two-newsletter .mc-form button.-underline,
.product-detail__slide-two__small .-underline.slick-arrow,
.product-tab-slide__content .-underline.slick-arrow,
.slider.-style-3 .slider__carousel .-underline.slick-arrow,
.testimonial-three .-underline.slick-arrow {
  border: 0;
  padding: 0;
  padding-bottom: 0.625em;
  position: relative;
  overflow: hidden;
}
.btn.-underline:after,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-underline:after,
.paginator li button.-underline:after,
.category-two .-underline.slick-arrow:after,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-underline:after,
.footer-two__content .footer-two-newsletter .mc-form button.-underline:after,
.product-detail__slide-two__small .-underline.slick-arrow:after,
.product-tab-slide__content .-underline.slick-arrow:after,
.slider.-style-3 .slider__carousel .-underline.slick-arrow:after,
.testimonial-three .-underline.slick-arrow:after,
.btn.-underline:before,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-underline:before,
.paginator li button.-underline:before,
.category-two .-underline.slick-arrow:before,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-underline:before,
.footer-two__content .footer-two-newsletter .mc-form button.-underline:before,
.product-detail__slide-two__small .-underline.slick-arrow:before,
.product-tab-slide__content .-underline.slick-arrow:before,
.slider.-style-3 .slider__carousel .-underline.slick-arrow:before,
.testimonial-three .-underline.slick-arrow:before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #f26460;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.2s ease-in-out;
}
.btn.-underline:after,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-underline:after,
.paginator li button.-underline:after,
.category-two .-underline.slick-arrow:after,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-underline:after,
.footer-two__content .footer-two-newsletter .mc-form button.-underline:after,
.product-detail__slide-two__small .-underline.slick-arrow:after,
.product-tab-slide__content .-underline.slick-arrow:after,
.slider.-style-3 .slider__carousel .-underline.slick-arrow:after,
.testimonial-three .-underline.slick-arrow:after {
  left: -100%;
  background-color: #111;
}
.btn.-underline:hover:after,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-underline:hover:after,
.paginator li button.-underline:hover:after,
.category-two .-underline.slick-arrow:hover:after,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-underline:hover:after,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  button.-underline:hover:after,
.product-detail__slide-two__small .-underline.slick-arrow:hover:after,
.product-tab-slide__content .-underline.slick-arrow:hover:after,
.slider.-style-3 .slider__carousel .-underline.slick-arrow:hover:after,
.testimonial-three .-underline.slick-arrow:hover:after {
  left: 0;
}
.btn:focus,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button:focus,
.paginator li button:focus,
.category-two .slick-arrow:focus,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button:focus,
.footer-two__content .footer-two-newsletter .mc-form button:focus,
.product-detail__slide-two__small .slick-arrow:focus,
.product-tab-slide__content .slick-arrow:focus,
.slider.-style-3 .slider__carousel .slick-arrow:focus,
.testimonial-three .slick-arrow:focus {
  outline: 0;
}
.btn.-red,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-red,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.paginator li button.-red,
.category-two .-red.slick-arrow,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button.-red,
.footer-two__content .footer-two-newsletter .mc-form button,
.product-detail__slide-two__small .-red.slick-arrow,
.product-tab-slide__content .-red.slick-arrow,
.slider.-style-3 .slider__carousel .-red.slick-arrow,
.slider.-style-3
  .slider__carousel
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button.slick-arrow,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .slider.-style-3
  .slider__carousel
  button.slick-arrow,
.testimonial-three .-red.slick-arrow {
  background-color: #f26460;
  color: #fff;
}
.btn.-red:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-red:hover,
.paginator li button.-red:hover,
.category-two .-red.slick-arrow:hover,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-red:hover,
.footer-two__content .footer-two-newsletter .mc-form button:hover,
.product-detail__slide-two__small .-red.slick-arrow:hover,
.product-tab-slide__content .-red.slick-arrow:hover,
.slider.-style-3 .slider__carousel .-red.slick-arrow:hover,
.testimonial-three .-red.slick-arrow:hover {
  background-color: #ee3631;
}
.btn.-light-red,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-light-red,
.paginator li button.-light-red,
.category-two .-light-red.slick-arrow,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-light-red,
.footer-two__content .footer-two-newsletter .mc-form button.-light-red,
.product-detail__slide-two__small .-light-red.slick-arrow,
.product-tab-slide__content .-light-red.slick-arrow,
.slider.-style-3 .slider__carousel .-light-red.slick-arrow,
.testimonial-three .-light-red.slick-arrow {
  background-color: #f26460;
  color: #fff;
}
.btn.-light-red:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-light-red:hover,
.paginator li button.-light-red:hover,
.category-two .-light-red.slick-arrow:hover,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-light-red:hover,
.footer-two__content .footer-two-newsletter .mc-form button.-light-red:hover,
.product-detail__slide-two__small .-light-red.slick-arrow:hover,
.product-tab-slide__content .-light-red.slick-arrow:hover,
.slider.-style-3 .slider__carousel .-light-red.slick-arrow:hover,
.testimonial-three .-light-red.slick-arrow:hover {
  background-color: #ee3631;
}
.btn.-dark,
.blog-sidebar__section.-newsletter .blog-sidebar-newsletter .mc-form button,
.paginator li button.-dark,
.category-two .-dark.slick-arrow,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form button.-dark,
.product-detail__slide-two__small .-dark.slick-arrow,
.product-tab-slide__content .-dark.slick-arrow,
.slider.-style-3 .slider__carousel .-dark.slick-arrow,
.slider.-style-3
  .slider__carousel
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.slick-arrow,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .slider.-style-3
  .slider__carousel
  button.slick-arrow,
.testimonial-three .-dark.slick-arrow {
  background-color: #111;
  color: #fff;
}
.btn.-dark:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button:hover,
.paginator li button.-dark:hover,
.category-two .-dark.slick-arrow:hover,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button:hover,
.footer-two__content .footer-two-newsletter .mc-form button.-dark:hover,
.product-detail__slide-two__small .-dark.slick-arrow:hover,
.product-tab-slide__content .-dark.slick-arrow:hover,
.slider.-style-3 .slider__carousel .-dark.slick-arrow:hover,
.testimonial-three .-dark.slick-arrow:hover {
  background-color: black;
}
.btn.-light,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-light,
.paginator li button.-light,
.category-two .-light.slick-arrow,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button.-light,
.footer-two__content .footer-two-newsletter .mc-form button.-light,
.product-detail__slide-two__small .-light.slick-arrow,
.product-tab-slide__content .-light.slick-arrow,
.slider.-style-3 .slider__carousel .-light.slick-arrow,
.testimonial-three .-light.slick-arrow {
  background-color: #f5f5f5;
  color: #fff;
  color: #111;
}
.btn.-light:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-light:hover,
.paginator li button.-light:hover,
.category-two .-light.slick-arrow:hover,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-light:hover,
.footer-two__content .footer-two-newsletter .mc-form button.-light:hover,
.product-detail__slide-two__small .-light.slick-arrow:hover,
.product-tab-slide__content .-light.slick-arrow:hover,
.slider.-style-3 .slider__carousel .-light.slick-arrow:hover,
.testimonial-three .-light.slick-arrow:hover {
  background-color: gainsboro;
}
.btn.-white,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-white,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .paginator
  li
  button,
.paginator
  li
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow,
.product-detail__slide-two__small
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.slick-arrow,
.paginator li button,
.category-two .-white.slick-arrow,
.category-two .paginator li button.slick-arrow,
.paginator li .category-two button.slick-arrow,
.footer-one__header__newsletter .footer-one-newsletter .mc-form button.-white,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .paginator
  li
  button,
.paginator
  li
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow,
.product-detail__slide-two__small
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.slick-arrow,
.footer-two__content .footer-two-newsletter .mc-form button.-white,
.footer-two__content .footer-two-newsletter .mc-form .paginator li button,
.paginator li .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow,
.product-detail__slide-two__small
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button.slick-arrow,
.product-detail__slide-two__small .slick-arrow,
.product-tab-slide__content .-white.slick-arrow,
.product-tab-slide__content .paginator li button.slick-arrow,
.paginator li .product-tab-slide__content button.slick-arrow,
.slider.-style-3 .slider__carousel .-white.slick-arrow,
.slider.-style-3 .slider__carousel .paginator li button.slick-arrow,
.paginator li .slider.-style-3 .slider__carousel button.slick-arrow,
.slider.-style-3
  .slider__carousel
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.testimonial-three .-white.slick-arrow,
.testimonial-three .paginator li button.slick-arrow,
.paginator li .testimonial-three button.slick-arrow {
  background-color: #fff;
  color: #fff;
  border: 1px solid #e1e1e1;
  color: #111;
}
.btn.-white:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-white:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .paginator
  li
  button:hover,
.paginator
  li
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow:hover,
.product-detail__slide-two__small
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.slick-arrow:hover,
.paginator li button:hover,
.category-two .-white.slick-arrow:hover,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-white:hover,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .paginator
  li
  button:hover,
.paginator
  li
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button:hover,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow:hover,
.product-detail__slide-two__small
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.slick-arrow:hover,
.footer-two__content .footer-two-newsletter .mc-form button.-white:hover,
.footer-two__content .footer-two-newsletter .mc-form .paginator li button:hover,
.paginator li .footer-two__content .footer-two-newsletter .mc-form button:hover,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .product-detail__slide-two__small
  button.slick-arrow:hover,
.product-detail__slide-two__small
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button.slick-arrow:hover,
.product-detail__slide-two__small .slick-arrow:hover,
.product-tab-slide__content .-white.slick-arrow:hover,
.slider.-style-3 .slider__carousel .-white.slick-arrow:hover,
.slider.-style-3 .slider__carousel .paginator li button.slick-arrow:hover,
.paginator li .slider.-style-3 .slider__carousel button.slick-arrow:hover,
.slider.-style-3
  .slider__carousel
  .product-detail__slide-two__small
  .slick-arrow:hover,
.product-detail__slide-two__small
  .slider.-style-3
  .slider__carousel
  .slick-arrow:hover,
.testimonial-three .-white.slick-arrow:hover {
  background-color: #e6e6e6;
}
.btn.-transparent,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-transparent,
.paginator li button.-transparent,
.category-two .-transparent.slick-arrow,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-transparent,
.footer-two__content .footer-two-newsletter .mc-form button.-transparent,
.product-detail__slide-two__small .-transparent.slick-arrow,
.product-tab-slide__content .-transparent.slick-arrow,
.slider.-style-3 .slider__carousel .-transparent.slick-arrow,
.testimonial-three .-transparent.slick-arrow {
  background-color: transparent;
  color: #fff;
  color: #111;
}
.btn.-transparent:hover,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.-transparent:hover,
.paginator li button.-transparent:hover,
.category-two .-transparent.slick-arrow:hover,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.-transparent:hover,
.footer-two__content .footer-two-newsletter .mc-form button.-transparent:hover,
.product-detail__slide-two__small .-transparent.slick-arrow:hover,
.product-tab-slide__content .-transparent.slick-arrow:hover,
.slider.-style-3 .slider__carousel .-transparent.slick-arrow:hover,
.testimonial-three .-transparent.slick-arrow:hover {
  background-color: rgba(0, 0, 0, 0);
}

.cart-sidebar {
  height: 100%;
}
.cart-sidebar .cart-items__wrapper {
  height: 100%;
  background-color: #fff;
  z-index: 101;
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 768px) {
  .cart-sidebar .cart-items__wrapper {
    font-size: 0.875em;
  }
}
.cart-sidebar .cart-items__wrapper h2 {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.5em;
}
.cart-sidebar .cart-items__wrapper .empty-noti {
  color: #111;
  font-size: 1.875em;
  font-weight: normal;
  line-height: 1;
  padding: 3.125em 0;
}
.cart-sidebar .cart-items__wrapper .cart-item {
  display: flex;
  align-items: center;
  padding-bottom: 1.875em;
  margin-bottom: 1.875em;
  border-bottom: 1px solid #e1e1e1;
}
.cart-sidebar .cart-items__wrapper .cart-item:last-child {
  padding-bottom: 0;
  border: 0;
}
.cart-sidebar .cart-items__wrapper .cart-item__image {
  margin-right: 1.5625em;
}
.cart-sidebar .cart-items__wrapper .cart-item__image img {
  height: 5em;
  width: 5em;
  object-fit: cover;
}
.cart-sidebar .cart-items__wrapper .cart-item__info {
  margin-right: 1.875em;
}
.cart-sidebar .cart-items__wrapper .cart-item__info a {
  color: #111;
  font-size: 0.9375em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.6em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
  margin-bottom: 0.66667em;
}
.cart-sidebar .cart-items__wrapper .cart-item__info a:hover {
  color: #f26460;
}
.cart-sidebar .cart-items__wrapper .cart-item__info h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  display: block;
  margin-bottom: 1em;
}
.cart-sidebar .cart-items__wrapper .cart-item__info p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.cart-sidebar .cart-items__wrapper .cart-item__remove {
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1.33333em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid #888;
  height: 1.33333em;
  width: 1.33333em;
  text-align: center;
  border-radius: 999px;
  margin-left: auto;
}
.cart-sidebar .cart-items__wrapper .cart-item__remove:hover {
  color: #f26460;
}
.cart-sidebar .cart-items__wrapper .cart-item__remove:hover {
  border-color: #f26460;
}
.cart-sidebar .cart-items__wrapper .cart-items__total {
  margin-top: 1.875em;
  padding-top: 1.875em;
  border-top: 1px solid #e1e1e1;
  margin-top: auto;
}
.cart-sidebar .cart-items__wrapper .cart-items__total__price {
  display: flex;
  justify-content: space-between;
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.875em;
}
.cart-sidebar .cart-items__wrapper .cart-items__total__price span {
  color: #f26460;
}
.cart-sidebar .cart-items__wrapper .cart-items__total__buttons .btn,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .paginator
  li
  button,
.paginator
  li
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .category-two
  .slick-arrow,
.category-two
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow {
  width: 100%;
}
.cart-sidebar .cart-items__wrapper .cart-items__total__buttons .btn:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button:first-child,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .paginator
  li
  button:first-child,
.paginator
  li
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .category-two
  .slick-arrow:first-child,
.category-two
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button:first-child,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button:first-child,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  button:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .product-detail__slide-two__small
  .slick-arrow:first-child,
.product-detail__slide-two__small
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .product-tab-slide__content
  .slick-arrow:first-child,
.product-tab-slide__content
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slider.-style-3
  .slider__carousel
  .slick-arrow:first-child,
.slider.-style-3
  .slider__carousel
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow:first-child,
.cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .testimonial-three
  .slick-arrow:first-child,
.testimonial-three
  .cart-sidebar
  .cart-items__wrapper
  .cart-items__total__buttons
  .slick-arrow:first-child {
  margin-bottom: 0.9375em;
}

.customed-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  padding-right: 2.1875em;
  font-size: 1em;
  color: #111;
  cursor: pointer;
  border: 1px solid #e1e1e1;
  background-image: url("../images/common/Select/ic-down.png");
  background-position: 100% center;
  background-repeat: no-repeat;
  background-size: 12px;
  background-color: #fff;
}
.customed-select option {
  color: #111;
  font-size: 1em;
  font-weight: normal;
  line-height: 1;
  outline: 0;
  border: 0;
}
.customed-select option[disable] {
  color: #888;
}
.customed-select.-borderless {
  border: 0;
  background-color: transparent;
}
.customed-select.-white,
.paginator li button.customed-select,
.product-detail__slide-two__small .customed-select.slick-arrow {
  color: #fff;
  background-image: url("../images/common/Select/ic-down-white.png");
}
.customed-select.-white option,
.paginator li button.customed-select option,
.product-detail__slide-two__small .customed-select.slick-arrow option {
  color: #111;
  font-size: 1em;
  font-weight: normal;
  line-height: 1;
}

.paginator {
  list-style: none;
}
.paginator li {
  display: inline-block;
  margin: 0 0.3125em;
}
.paginator li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.paginator li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.paginator li.active button {
  background-color: #111;
  color: #fff;
  height: 3.57143em;
  width: 3.57143em;
  padding: 0;
}
.paginator li button {
  height: 3.57143em;
  width: 3.57143em;
  padding: 0;
}

.post-card-one {
  display: flex;
  align-items: flex-start;
  padding: 2.5em;
  box-shadow: 0px 1px 5px 0 #dfdfe0;
  background-color: #fff;
  transition: 0.2s ease-in-out;
}
.post-card-one:hover {
  box-shadow: 0px 3px 20px 0 #dfdfe0;
}
.post-card-one__date {
  padding: 0.625em 0.9375em;
  background-color: #111;
  margin-right: 2.5em;
}
.post-card-one__date h5 {
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.3125em;
}
.post-card-one__date p {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post-card-one__content__info {
  margin-bottom: 0.9375em;
}
.post-card-one__content__info p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
}
.post-card-one__content__info p span {
  color: #111;
}
.post-card-one__content__info p:after {
  content: "/";
  margin: 0 0.625em;
}
.post-card-one__content__info a {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: inline-block;
}
.post-card-one__content__info a:hover {
  color: #f26460;
}
.post-card-one__content__title {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.3em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  -webkit-box-orient: vertical;
}
.post-card-one__content__title:hover {
  color: #f26460;
}

.post-card-two:hover .post-card-two__image img {
  transform: scale(1.05);
}

.post-card-two:hover .post-card-two__image .post-card-two__info__date {
  background-color: #f26460;
  color: #fff;
}

.post-card-two__image {
  position: relative;
  margin-bottom: 1.875em;
  overflow: hidden;
}
.post-card-two__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s ease-in-out;
}
.post-card-two__image .post-card-two__info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
.post-card-two__image .post-card-two__info__date {
  padding: 0.625em 0.9375em;
  background-color: #111;
  transition: 0.2s ease-in-out;
}
.post-card-two__image .post-card-two__info__date h5 {
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.3125em;
}
.post-card-two__image .post-card-two__info__date p {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post-card-two__image .post-card-two__info__detail {
  background-color: #fff;
  margin-right: 1.25em;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 0 1.25em;
}
.post-card-two__image .post-card-two__info__detail p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post-card-two__image .post-card-two__info__detail p span {
  color: #111;
}
.post-card-two__image .post-card-two__info__detail p:after {
  content: "/";
  margin: 0 0.625em;
}
.post-card-two__image .post-card-two__info__detail a {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.post-card-two__image .post-card-two__info__detail a:hover {
  color: #f26460;
}

.post-card-two__content a {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.3em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  -webkit-box-orient: vertical;
  margin-bottom: 1.1em;
}
.post-card-two__content a:hover {
  color: #111;
}
.post-card-two__content a:hover {
  text-decoration: underline;
}

.post-card-two__content p {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  -webkit-box-orient: vertical;
}

.post-card-three {
  display: flex;
}
.post-card-three:hover .post-card-three__image img {
  transform: scale(1.05);
}
.post-card-three__image {
  margin-right: 1.5625em;
  overflow: hidden;
  flex: none;
}
.post-card-three__image img {
  height: 5.625em;
  width: 5.625em;
  object-fit: cover;
  transition: 0.2s ease-in-out;
}
.post-card-three__content a {
  color: #111;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.3125em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  -webkit-box-orient: vertical;
  margin-bottom: 0.625em;
}
.post-card-three__content a:hover {
  color: #f26460;
}
.post-card-three__content p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}

.post-card-featured {
  position: relative;
}
.post-card-featured:hover .post-card-featured__image img {
  transform: scale(1.05);
}
.post-card-featured:hover .post-card-featured__content__date {
  background-color: #f26460;
  color: #fff;
}
.post-card-featured__image {
  overflow: hidden;
  height: 24.0625em;
  position: inherit;
  z-index: -1;
}
.post-card-featured__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s ease-in-out;
}
.post-card-featured__content {
  background-color: #fff;
  margin-top: -2.5em;
  margin-right: 1.875em;
  padding: 2.5em 3.125em 1.25em 0;
  display: flex;
  align-items: flex-start;
}
.post-card-featured__content__date {
  padding: 0.625em 0.9375em;
  background-color: #111;
  transition: 0.2s ease-in-out;
  margin-right: 2.5em;
}
.post-card-featured__content__date h5 {
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.3125em;
}
.post-card-featured__content__date p {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post-card-featured__content__detail .post-card-featured__info {
  display: flex;
  margin-bottom: 0.625em;
}
.post-card-featured__content__detail .post-card-featured__info p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post-card-featured__content__detail .post-card-featured__info p span {
  color: #111;
}
.post-card-featured__content__detail .post-card-featured__info p:after {
  content: "/";
  margin: 0 0.625em;
}
.post-card-featured__content__detail .post-card-featured__info a {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.post-card-featured__content__detail .post-card-featured__info a:hover {
  color: #f26460;
}
.post-card-featured__content__detail .post-card-featured-title {
  color: #111;
  font-size: 1.5em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.29167em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
  margin-bottom: 1.25em;
}
.post-card-featured__content__detail .post-card-featured-title:hover {
  color: #f26460;
}
.post-card-featured__content__detail .post-card-featured-description {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
}

.post-card-five {
  display: flex;
}
.post-card-five:hover .post-card-five__date {
  background-color: #f26460;
}
.post-card-five__date {
  padding: 0.625em 0.9375em;
  background-color: #111;
  margin-right: 2.5em;
  position: absolute;
  top: 10px;
  left: 10px;
  transition: 0.2s ease-in-out;
}
.post-card-five__date h5 {
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.3125em;
}
.post-card-five__date p {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post-card-five__image {
  flex: 1 1 40%;
  max-width: 40%;
  margin-right: 1.875em;
  position: relative;
}
.post-card-five__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.post-card-five__content {
  flex: 1 1 60%;
  max-width: 60%;
}
.post-card-five__content__info {
  display: flex;
  margin-bottom: 0.9375em;
}
.post-card-five__content__info p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post-card-five__content__info p span {
  color: #111;
}
.post-card-five__content__info p:after {
  content: "/";
  margin: 0 0.625em;
}
.post-card-five__content__info a {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.post-card-five__content__info a:hover {
  color: #f26460;
}
.post-card-five__content__title {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.3em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  -webkit-box-orient: vertical;
  margin-bottom: 0.75em;
}
.post-card-five__content__title:hover {
  color: #111;
}
.post-card-five__content__title:hover {
  text-decoration: underline;
}
.post-card-five__content__description {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* number of lines to show */
  -webkit-box-orient: vertical;
}

.product {
  position: relative;
}
.product-category {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  text-transform: capitalize;
}
.product-price--main {
  color: #111;
  font-size: 0.8125em;
  font-weight: 600;
  line-height: 1;
}
.product-price--discount {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  text-decoration: line-through;
}
.product-colors {
  margin-left: auto;
}
.product-colors__item {
  height: 0.625em;
  width: 0.625em;
  border-radius: 999px;
  display: inline-block;
  margin: 0 0.1875em;
  cursor: pointer;
}
.product-colors__item:first-child {
  margin-left: 0;
  padding-left: 0;
}
.product-colors__item:last-child {
  margin-right: 0;
  padding-right: 0;
}
.product-colors__item:hover {
  border: 1px solid #e1e1e1;
}
.product-colors__item.active {
  border: 1px solid #e1e1e1;
}
.product-type {
  position: absolute;
  top: 0.9375em;
  left: 0.9375em;
  z-index: 10;
}
.product-type .-new,
.product-type .-sale {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  background-color: #1a7be9;
  padding: 0.3125em;
  border-radius: 0.1875em;
}
.product-type .-sale {
  background-color: #de1339;
}
.product-btn {
  display: inline-block;
}
.product-description {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
}
.product:hover .product-thumb__image img:nth-child(2) {
  opacity: 0;
}
.product-thumb {
    height:'254px';
  position: relative;
  text-align: center;
  overflow: hidden;
  margin-bottom: 1.5625em;
}
.product-thumb:hover .product-thumb__actions {
  opacity: 1;
  transform: translateY(0);
}
.product-thumb__image {
  display: block;
  width: 100%;
}
.product-thumb__image img {
 
  width: 100%;
  object-fit: cover;
}
.product-thumb__image img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  z-index: 9;
}
.product-thumb__image img:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  z-index: 10;
}
.product-thumb__actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25em 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  opacity: 0;
  transform: translateY(20px);
  transition: 0.2s ease-in-out;
}
.product-thumb__actions .product-btn {
  margin: 0 0.3125em;
  display: inline-block;
}
.product-thumb__actions .product-btn .product__actions__item {
  height: 3.57143em;
  width: 3.57143em;
  padding: 0;
  line-height: 3.57143em;
}
.product-thumb__actions .product-btn .product__actions__item:first-child {
  margin-left: 0;
  padding-left: 0;
}
.product-thumb__actions .product-btn .product__actions__item:last-child {
  margin-right: 0;
  padding-right: 0;
}
.product-thumb__actions .product-btn .product__actions__item.active {
  background-color: #f26460;
  color: #fff;
}
.product-name {
  color: #111;
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.625em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
  margin-bottom: 0.625em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  /* number of lines to show */
  -webkit-box-orient: vertical;
}
.product-name:hover {
  color: #f26460;
}
.product-content__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625em;
}
.product-content__header h5 {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  text-transform: capitalize;
}
.product-content__footer {
  display: flex;
  align-items: center;
}
.product-content__footer .product-price--main {
  margin-right: 0.76923em;
}
.product.-inline-content {
  position: relative;
}
.product.-inline-content .product-thumb__actions {
  bottom: 50%;
  transform: translateY(50%);
}
.product.-inline-content .product-content {
  position: absolute;
  bottom: 1.875em;
  left: 1.875em;
  right: 1.875em;
  z-index: 10;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #e1e1e1;
}
.product-list:hover .product-list__thumb__image img:nth-child(2) {
  opacity: 0;
}
.product-list-thumb {
  flex: 1 1 35%;
  max-width: 35%;
  position: relative;
  text-align: center;
  overflow: hidden;
}
@media only screen and (max-width: 576px) {
  .product-list-thumb {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
.product-list-thumb__image {
  display: block;
  height: 100%;
  width: 100%;
  max-height: 21.875em;
}
.product-list-thumb__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.product-list-thumb__image img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  z-index: 9;
}
.product-list-thumb__image img:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  z-index: 10;
}
.product-list-content {
  flex: 1 1 65%;
  max-width: 65%;
  padding: 3.125em;
}
@media only screen and (max-width: 1400px) {
  .product-list-content {
    padding: 2.14286em;
  }
}
@media only screen and (max-width: 992px) {
  .product-list-content {
    padding: 1.42857em;
  }
}
@media only screen and (max-width: 576px) {
  .product-list-content {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 1.42857em;
  }
}
.product-list-content__top {
  padding-bottom: 1.5625em;
  margin-bottom: 1.5625em;
  border-bottom: 1px solid #e1e1e1;
}
.product-list-content__top .product-category__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625em;
}
.product-list-content__top .product__price {
  display: flex;
  align-items: center;
}
.product-list-content__top .product__price__wrapper {
  display: flex;
}
.product-list-content__top .product__price__wrapper .product-price--main {
  margin-right: 0.76923em;
}
.product-list-content__bottom .product-description {
  margin-bottom: 2em;
}
.product-list-content__bottom .product-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.product-list-content__bottom .product-actions .product-btn:not(:last-child) {
  margin-right: 0.625em;
  margin: 0 0.625em 0.625em 0;
}
@media only screen and (max-width: 768px) {
  .product-list-content__bottom .product-actions .product-btn:not(:last-child) {
    margin-right: 0 0.35714em 0.35714em 0;
  }
}
.product-list-content__bottom .product-actions .product-btn a {
  height: 3.46154em;
  width: 3.46154em;
  line-height: 3.46154em;
  padding: 0;
}
@media only screen and (max-width: 1170px) {
  .product-list-content__bottom .product-actions .product-btn a {
    font-size: 13px;
  }
}
.product-list-content__bottom .product-actions .product-btn .add-to-cart {
  height: 2.8125em;
}
@media only screen and (max-width: 768px) {
  .product-list-content__bottom .product-actions .product-btn .add-to-cart {
    height: 3.21429em;
  }
}
.product-list-content__bottom .product-actions .product-btn .add-to-cart .btn,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  button,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .paginator
  li
  button,
.paginator
  li
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  button,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .category-two
  .slick-arrow,
.category-two
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .slick-arrow,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  button,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  button,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .slick-arrow,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .slick-arrow,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .slick-arrow,
.product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .product-list-content__bottom
  .product-actions
  .product-btn
  .add-to-cart
  .slick-arrow {
  height: 3.30769em;
  width: 3.30769em;
}

.product-quickview {
  padding: 3.125em;
}
@media only screen and (max-width: 768px) {
  .product-quickview .product-detail_slide-one {
    margin-bottom: 3.125em;
  }
}

.quantity-controller {
  height: 3.125em;
  display: flex;
  align-items: center;
}
.quantity-controller.-border {
  padding: 0 1.25em;
  border: 1px solid #e1e1e1;
}
.quantity-controller.-round,
.paginator li button.quantity-controller,
.product-detail__slide-two__small .quantity-controller.slick-arrow {
  border-radius: 999px;
}
.quantity-controller__btn {
  color: #888;
  font-size: 1.25em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.quantity-controller__btn:hover {
  color: #f26460;
}
.quantity-controller__number {
  padding: 0 2.8125em;
  color: #111;
  font-size: 0.9375em;
  font-weight: 700;
  line-height: 1;
  width: 6.66667em;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  .quantity-controller__number {
    padding: 0 0.9375em;
    width: 4em;
  }
}

.review__header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5625em;
}
.review__header__avatar {
  margin-right: 1.25em;
}
.review__header__avatar img {
  height: 3.125em;
  width: 3.125em;
  object-fit: cover;
  border-radius: 999px;
}
.review__header__info h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.66667em;
}
.review__header__info p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.review__header__rate {
  margin-left: auto;
}

.review__content {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
  margin-bottom: 1.25em;
}

.review__report {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: underline;
}
.review__report:hover {
  color: #f26460;
}

@media only screen and (max-width: 992px) {
  .section-title {
    font-size: 14px;
  }
}

@media only screen and (max-width: 768px) {
  .section-title {
    font-size: 12px;
  }
}

.section-title.-medium.-style1 h2 {
  font-size: 1.5em;
}

.section-title.-center {
  text-align: center;
}

.section-title h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  margin-bottom: 2em;
}

.section-title h2 {
  color: #111;
  font-size: 2.5em;
  font-weight: 500;
  line-height: 1.375em;
  text-transform: capitalize;
  margin-bottom: 0.25em;
}

.section-title p {
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.6em;
  margin-bottom: 1.66667em;
}

.slider-arrow-middle .slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.slider-arrow-middle .slick-arrow.slick-prev {
  left: 0;
}
.slider-arrow-middle .slick-arrow.slick-next {
  right: 0;
}

.social-icons.-white a,
.paginator li button.social-icons a,
.product-detail__slide-two__small .social-icons.slick-arrow a {
  color: #fff;
}

.social-icons.-border ul > li {
  margin: 0 0.3125em;
}
.social-icons.-border ul > li a {
  height: 2.8125em;
  width: 2.8125em;
  text-align: center;
  line-height: 2.8125em;
  border-radius: 999px;
  border: 1px solid #e1e1e1;
  display: inline-block;
}
.social-icons.-border ul > li a:hover {
  background-color: #f26460;
  color: #fff;
  border-color: transparent;
}

.social-icons.-border ul--light-bg > li a {
  background-color: #e1e1e1;
}

.social-icons ul > li {
  display: inline-block;
  margin: 0 0.625em;
}
.social-icons ul > li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.social-icons ul > li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.social-icons ul > li a {
  color: #111;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.social-icons ul > li a:hover {
  color: #f26460;
}

ul {
  list-style: none;
}

.tab-switcher {
  display: inline-block;
  cursor: pointer;
  margin-right: 25px;
}

#overlay .overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.rate i {
  color: #ecba0b;
  font-size: 0.75em;
}

.outline-none {
  outline: 0;
}

.slick-disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.9;
  color: #e1e1e1 !important;
}

.input-validator span.input-error {
  color: #de1339;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  margin-top: 0.9375em;
  display: block;
  text-align: right;
  font-style: italic;
}

.five-col {
  flex: 1 1 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
}

.w-100 {
  width: 100%;
}

.mb-100 {
  margin-bottom: 6.25rem;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.blog-one {
  margin-bottom: 5rem;
}
.blog-one__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5em;
}
@media only screen and (max-width: 768px) {
  .blog-one__content {
    grid-template-columns: 1fr;
    gap: 1.07143em;
  }
}

.blog-two {
  margin-bottom: 4.375rem;
}
.blog-two-content {
  margin: 0 -0.9375em;
  padding-bottom: 6.25rem;
  border-bottom: 1px solid #e1e1e1;
}
.blog-two-content .slider-item {
  padding: 0.9375em;
  outline: 0;
}

.blog-three {
  margin-bottom: 4.375rem;
}
.blog-three .post-card-five {
  margin-bottom: 1.875em;
}

.brand-one__wrapper {
  background-color: #feefef;
  margin-bottom: 6.25rem;
  padding: 3.125em;
}

.brand-one .section-title {
  margin-bottom: 0;
}

.brand-one__logos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.875em;
}
@media only screen and (max-width: 768px) {
  .brand-one__logos {
    grid-template-columns: 1fr 1fr;
    margin-top: 2.14286em;
  }
}
.brand-one__logos__item {
  padding: 0.9375em;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../images/brands/BrandsOne/pattern.png");
  background-size: cover;
  background-position: center;
  transition: 0.2s ease-in-out;
}
.brand-one__logos__item:hover {
  padding: 0.75em;
}
.brand-one__logos__item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.cta {
  padding: 5.625em 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.cta__form__detail .input-validator {
  margin-bottom: 0.9375em;
}
.cta__form__detail .input-validator label.error {
  margin-top: 0.625em;
  display: block;
  color: #f26460;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1;
  font-style: italic;
  text-align: right;
}
.cta__form__detail textarea {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 7.14286em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.53846em;
  border-radius: 0px;
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea:focus {
  outline: 0;
}
.cta__form__detail textarea:-webkit-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea::-webkit-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea:-moz-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.cta__form__detail textarea::-moz-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.cta__form__detail textarea:-ms-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea::-ms-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea:-o-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea::-o-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea:input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail textarea::input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.cta__form__detail input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.84615em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 0 1.53846em;
  border-radius: 0px;
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input:focus {
  outline: 0;
}
.cta__form__detail input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input:-moz-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
  line-height: -moz-block-height;
}
.cta__form__detail input::-moz-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
  line-height: -moz-block-height;
}
.cta__form__detail input:-ms-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input::-ms-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input:-o-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input::-o-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input:input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail input::input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 3.84615em;
}
.cta__form__detail select {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  height: 3.84615em;
  width: 100%;
  padding: 0 1.53846em;
  background-position: calc(100% - 20px) center;
}
.cta.-style-1,
.cta.slider.-style-5 {
  background-attachment: fixed;
}
.cta.-style-1 .cta__form,
.cta.slider.-style-5 .cta__form {
  background-color: #fff;
  padding: 3.125em;
  text-align: center;
}
.cta.-style-2,
.cta.menu.-style-6 {
  background-attachment: fixed;
}
.cta.-style-2 .cta__form h3,
.cta.menu.-style-6 .cta__form h3 {
  color: #111;
  font-size: 2.625em;
  font-weight: 600;
  line-height: 1.30952em;
  text-align: center;
  margin-bottom: 2.02381em;
}
.cta.-style-2 .btn,
.cta.menu.-style-6 .btn,
.cta.-style-2
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .cta.-style-2
  button,
.cta.menu.-style-6
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .cta.menu.-style-6
  button,
.cta.-style-2 .paginator li button,
.paginator li .cta.-style-2 button,
.cta.menu.-style-6 .paginator li button,
.paginator li .cta.menu.-style-6 button,
.cta.-style-2 .category-two .slick-arrow,
.category-two .cta.-style-2 .slick-arrow,
.cta.menu.-style-6 .category-two .slick-arrow,
.category-two .cta.menu.-style-6 .slick-arrow,
.cta.-style-2
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .cta.-style-2
  button,
.cta.menu.-style-6
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .cta.menu.-style-6
  button,
.cta.-style-2 .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form .cta.-style-2 button,
.cta.menu.-style-6 .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form .cta.menu.-style-6 button,
.cta.-style-2 .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .cta.-style-2 .slick-arrow,
.cta.menu.-style-6 .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .cta.menu.-style-6 .slick-arrow,
.cta.-style-2 .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .cta.-style-2 .slick-arrow,
.cta.menu.-style-6 .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .cta.menu.-style-6 .slick-arrow,
.cta.-style-2 .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .cta.-style-2 .slick-arrow,
.cta.menu.-style-6 .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .cta.menu.-style-6 .slick-arrow,
.cta.-style-2 .testimonial-three .slick-arrow,
.testimonial-three .cta.-style-2 .slick-arrow,
.cta.menu.-style-6 .testimonial-three .slick-arrow,
.testimonial-three .cta.menu.-style-6 .slick-arrow {
  width: 100%;
}

.category-one {
  margin-bottom: 6.25rem;
}
.category-one .category-card {
  position: relative;
  height: 22.5em;
  display: block;
  text-decoration: none;
  overflow: hidden;
}
.category-one .category-card:hover .category-card__background {
  transform: scale(1.05);
}
.category-one .category-card__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: 0.5s ease-out;
  transform-origin: bottom right;
}
.category-one .category-card__background img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.category-one .category-card__content {
  padding: 3.125em;
}
.category-one .category-card__content h3 {
  color: #111;
  font-size: 1.875em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.66667em;
}
.category-one .category-card__content h5 {
  color: #111;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
}

.category-two {
  margin-bottom: 6.25rem;
}
.category-two .slick-arrow {
  color: #e1e1e1;
  font-size: 1.875em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  padding: 0;
}
.category-two .slick-arrow:hover {
  color: #f26460;
}
.category-two .slick-arrow:hover {
  color: #888;
}
.category-two .slick-arrow.slick-next {
  right: 0em;
}
.category-two .slick-arrow.slick-prev {
  left: 0em;
}
@media only screen and (max-width: 768px) {
  .category-two .slick-arrow.slick-next {
    right: 0.5em;
  }
  .category-two .slick-arrow.slick-prev {
    left: 0.5em;
  }
}
.category-two__item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f26460;
  padding: 3.125em 0;
  position: relative;
  color: #fff;
  font-size: 0.9375em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.category-two__item:hover {
  color: #f26460;
}
.category-two__item::after {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: 0.2s ease-in-out;
}
.category-two__item:hover::after {
  top: 0;
}
.category-two__item:hover img {
  filter: none;
}
.category-two__item img {
  height: 3.125em;
  width: 3.125em;
  object-fit: contain;
  margin-right: 1.5625em;
  filter: brightness(5);
  transition: 0.2s ease-in-out;
}
.category-two__item h3,
.category-two__item img {
  position: relative;
  z-index: 1;
}

.dow-one {
  position: relative;
  margin-bottom: 6.25rem;
}
.dow-one__image {
  max-width: 52%;
  padding-bottom: 3.125em;
}
.dow-one__image:hover img {
  transform: scale(1.05);
}
.dow-one__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s ease-in-out;
}
@media only screen and (max-width: 1400px) {
  .dow-one__image {
    max-width: 80%;
    padding-bottom: 300px;
  }
}
@media only screen and (max-width: 768px) {
  .dow-one__image {
    max-width: 90%;
    padding-bottom: 300px;
  }
}
.dow-one__content {
  position: absolute;
  max-width: 52%;
  width: 100%;
  right: 0;
  bottom: 0;
  padding: 5.625em 5em;
  box-shadow: 0px 3px 20px 0 #dfdfe0;
  overflow: hidden;
  background-image: url("../images/deal_of_week/DOWOne/2.png");
  background-size: cover;
  background-position: center;
}
@media only screen and (max-width: 1400px) {
  .dow-one__content {
    max-width: 70%;
  }
}
@media only screen and (max-width: 768px) {
  .dow-one__content {
    max-width: 90%;
    font-size: 13px;
  }
}
@media only screen and (max-width: 576px) {
  .dow-one__content {
    font-size: 11px;
  }
}
.dow-one__content h5 {
  color: #f26460;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  margin-bottom: 1.875em;
}
.dow-one__content h3 {
  color: #111;
  font-size: 3.75em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.41667em;
}
.dow-one__content__countdown {
  display: flex;
  margin-bottom: 3.125em;
}
.dow-one__content__countdown .countdown__item {
  text-align: center;
  padding: 0.9375em 0;
  width: 4.375em;
  margin-right: 3.125em;
  background-image: url("../images/deal_of_week/DOWOne/decoration.png");
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 576px) {
  .dow-one__content__countdown .countdown__item {
    margin-right: 0.90909em;
  }
}
.dow-one__content__countdown .countdown__item:last-child {
  margin-right: 0;
}
.dow-one__content__countdown .countdown__item h6 {
  color: #111;
  font-size: 1.875em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.16667em;
}
.dow-one__content__countdown .countdown__item span {
  color: #111;
  font-size: 1em;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
}

.dow-two {
  background-image: url("../images/deal_of_week/DOWTwo/bg.png");
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  margin-bottom: 6.25rem;
  padding: 5em 0;
}
.dow-two__content h5 {
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  margin-bottom: 1.875em;
}
.dow-two__content h3 {
  color: #fff;
  font-size: 3.75em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.41667em;
}
.dow-two__content__countdown {
  display: flex;
  margin-bottom: 3.125em;
}
.dow-two__content__countdown .countdown__item {
  height: 6.25em;
  width: 6.25em;
  margin-right: 2.5em;
  border-radius: 999px;
  border: 1px dashed rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dow-two__content__countdown .countdown__item h6 {
  color: #fff;
  font-size: 1.875em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.33333em;
}
.dow-two__content__countdown .countdown__item span {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.dow-two__content__countdown .countdown__item:last-child {
  margin-right: 0;
}
@media only screen and (max-width: 768px) {
  .dow-two__content__countdown .countdown__item {
    margin-right: 1.07143em;
  }
  .dow-two__content__countdown .countdown__item h6 {
    font-size: 1.42857em;
  }
}
.dow-two__content .special-price {
  display: flex;
  align-items: center;
  margin-bottom: 2.5em;
}
.dow-two__content .special-price p {
  color: #fff;
  font-size: 1.875em;
  font-weight: 700;
  line-height: 1;
  margin-right: 1.16667em;
}
.dow-two__content .special-price span {
  text-decoration: line-through;
  color: #fff;
  font-size: 1em;
  font-weight: 700;
  line-height: 1;
}
@media only screen and (max-width: 992px) {
  .dow-two__image {
    margin-bottom: 3.125em;
  }
}
.dow-two__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.dow-three {
  margin-bottom: 6.25rem;
  background-image: url("../images/deal_of_week/DOWThree/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8.125em 0;
}
.dow-three__content {
  text-align: center;
}
.dow-three__content h5 {
  color: #f26460;
  font-size: 1em;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.875em;
}
.dow-three__content h3 {
  color: #fff;
  font-size: 3.75em;
  font-weight: normal;
  line-height: 1;
  font-family: "Braga";
  margin-bottom: 0.83333em;
}
.dow-three__content__countdown {
  display: flex;
  justify-content: center;
  background-color: #fff;
  max-width: 32.5em;
  margin-left: auto;
  margin-right: auto;
  padding: 2.1875em 0;
  margin-bottom: 2.5em;
}
.dow-three__content__countdown .countdown__item {
  margin-left: 2.1875em;
  margin-right: 2.1875em;
}
@media only screen and (max-width: 768px) {
  .dow-three__content__countdown .countdown__item {
    margin-left: 0.9375em;
    margin-right: 0.9375em;
  }
}
.dow-three__content__countdown .countdown__item:first-child {
  margin-left: 0;
  padding-left: 0;
}
.dow-three__content__countdown .countdown__item:last-child {
  margin-right: 0;
  padding-right: 0;
}
.dow-three__content__countdown .countdown__item h6 {
  color: #111;
  font-size: 1.875em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.33333em;
}
@media only screen and (max-width: 768px) {
  .dow-three__content__countdown .countdown__item h6 {
    font-size: 1.42857em;
  }
}
.dow-three__content__countdown .countdown__item span {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1;
}
.dow-three__content .btn,
.dow-three__content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .dow-three__content
  button,
.dow-three__content .paginator li button,
.paginator li .dow-three__content button,
.dow-three__content .category-two .slick-arrow,
.category-two .dow-three__content .slick-arrow,
.dow-three__content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .dow-three__content
  button,
.dow-three__content .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form .dow-three__content button,
.dow-three__content .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .dow-three__content .slick-arrow,
.dow-three__content .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .dow-three__content .slick-arrow,
.dow-three__content .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .dow-three__content .slick-arrow,
.dow-three__content .testimonial-three .slick-arrow,
.testimonial-three .dow-three__content .slick-arrow {
  color: #fff;
}

.footer-one {
  padding-top: 2.5rem;
}
.footer-one__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 2.5em;
  margin-bottom: 3.125em;
  border-bottom: 1px solid #e1e1e1;
}
@media only screen and (max-width: 768px) {
  .footer-one__header {
    flex-direction: column;
    align-items: center;
  }
}
.footer-one__header__logo a {
  display: inline-block;
}
.footer-one__header__logo a img {
  height: 100%;
  width: 100px;
  object-fit: contains;
}
@media only screen and (max-width: 768px) {
  .footer-one__header__logo {
    margin-bottom: 1.07143em;
  }
}
.footer-one__header__newsletter {
  display: flex;
  align-items: center;
  max-width: 500px;
}
.footer-one__header__newsletter span {
  margin-right: 0.9375em;
  flex: none;
}
.footer-one__header__newsletter .footer-one-newsletter .mc-form {
  display: flex;
}
.footer-one__header__newsletter .footer-one-newsletter .mc-form input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.46154em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 0 1.53846em;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter .footer-one-newsletter .mc-form input:focus {
  outline: 0;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
  line-height: -moz-block-height;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
  line-height: -moz-block-height;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-one__header__newsletter .footer-one-newsletter .mc-form button {
  padding: 0;
  height: 3.46154em;
  width: 3.46154em;
  flex: none;
}
@media only screen and (max-width: 768px) {
  .footer-one__header__newsletter {
    margin-bottom: 1.42857em;
    flex-direction: column;
    width: 100%;
  }
  .footer-one__header__newsletter span {
    margin-right: 0;
    margin-bottom: 0.71429em;
  }
  .footer-one__header__newsletter .form {
    width: 100%;
  }
  .footer-one__header__newsletter .form .input-validator {
    flex-grow: 1;
  }
}
@media only screen and (max-width: 992px) {
  .footer-one__header__social {
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.875em;
  }
  .footer-one__header__social .social-icons {
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .footer-one__header__social {
    margin-top: 0;
  }
}
.footer-one .footer-title {
  color: #111;
  font-size: 1em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 2.5em;
}
@media only screen and (max-width: 992px) {
  .footer-one .footer-title {
    margin-bottom: 1.42857em;
  }
}
.footer-one__body {
  padding-bottom: 3.125em;
}
@media only screen and (max-width: 992px) {
  .footer-one__body .footer__section {
    margin-bottom: 1.875em;
  }
}
.footer-one__body .footer__section.-info p {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
  margin-bottom: 0.625em;
}
.footer-one__body .footer__section.-info p span {
  color: #111;
}
.footer-one__body .footer__section.-info p:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 768px) {
  .footer-one__body .footer__section.-links {
    margin-bottom: 0;
  }
  .footer-one__body .footer__section.-links ul {
    margin-bottom: 1.875em;
  }
}
.footer-one__body .footer__section.-links ul {
  list-style: none;
}
.footer-one__body .footer__section.-links ul li a {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  text-decoration: none;
  line-height: 2.42857em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
}
.footer-one__body .footer__section.-links ul li a:hover {
  color: #111;
}
.footer-one__body .footer__section.-links ul li a:hover:after {
  left: 0;
}
.footer-one__body .footer__section.-links ul li a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -100%;
  background-color: #f2646061;
  height: 0.53333em;
  width: 100%;
  z-index: 0;
  transition: 0.2s ease-in-out;
}
.footer-one__body .footer__section.-payment p {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
  margin-bottom: 2.14286em;
}
.footer-one__body .footer__section.-payment .payment-methods img {
  max-width: 100%;
}
.footer-one__footer {
  background-color: #f7f5f4;
  padding: 1em 0;
}
.footer-one__footer__wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer-one__footer__wrapper p {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1;
}
@media only screen and (max-width: 768px) {
  .footer-one__footer__wrapper p {
    margin-bottom: 1.07143em;
  }
}
.footer-one__footer__wrapper ul {
  list-style: none;
}
.footer-one__footer__wrapper ul li {
  display: inline-block;
}
.footer-one__footer__wrapper ul li a {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.footer-one__footer__wrapper ul li a:hover {
  color: #f26460;
}
.footer-one__footer__wrapper ul li::after {
  content: "|";
  margin: 0 0.625em;
}
.footer-one__footer__wrapper ul li:last-child::after {
  display: none;
}

.footer-two {
  padding: 8.125em 0;
  background-image: url("../images/footer/footer-2-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
.footer-two__content {
  text-align: center;
}
.footer-two__content__logo {
  margin-bottom: 2.5em;
  display: block;
}
.footer-two__content__logo img {
  height: 100%;
  width: 12.5em;
  object-fit: contain;
}
.footer-two__content__description {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
  margin-bottom: 2.85714em;
}
.footer-two__content .footer-two-newsletter {
  margin-bottom: 2.5em;
  max-width: 28.125em;
  margin-left: auto;
  margin-right: auto;
}
.footer-two__content .footer-two-newsletter .mc-form {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.footer-two__content .footer-two-newsletter .mc-form input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.46154em;
  width: auto;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
  flex-grow: 1;
}
.footer-two__content .footer-two-newsletter .mc-form input:focus {
  outline: 0;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
  line-height: -moz-block-height;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
  line-height: -moz-block-height;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content
  .footer-two-newsletter
  .mc-form
  input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content .footer-two-newsletter .mc-form input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content .footer-two-newsletter .mc-form input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.46154em;
}
.footer-two__content .footer-two-newsletter .mc-form button {
  padding: 0 1.53846em;
  height: 3.46154em;
}
.footer-two__content .footer-two-newsletter .mc-form .input-validator {
  width: 100%;
}

.instagram-one {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.instagram-one__background {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.instagram-one__background__item {
  position: relative;
  transition: 0.2s ease-in-out;
}
.instagram-one__background__item:hover {
  opacity: 0.7;
}
.instagram-one__background__item img {
  height: 100%;
  width: auto;
  object-fit: cover;
}
.instagram-one__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #fff;
  padding: 1.875em 3.125em;
  text-decoration: none;
  max-width: 100%;
  margin: 0 15px;
}
.instagram-one__content:hover h5 {
  color: #f26460;
}
.instagram-one__content i {
  font-size: 2.25em;
  color: #888;
  margin-bottom: 0.55556em;
}
.instagram-one__content h5 {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.75em;
  transition: 0.2s ease-in-out;
}
.instagram-one__content p {
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1;
}

.instagram-two .instagram-two-slider {
  width: 100%;
}
.instagram-two .instagram-two-slider .slider-item {
  display: block;
  position: relative;
}
.instagram-two .instagram-two-slider .slider-item:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: 0.2s ease-in-out;
}
.instagram-two .instagram-two-slider .slider-item:hover:after {
  opacity: 1;
}
.instagram-two .instagram-two-slider .slider-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.introduction-one {
  margin-bottom: 6.25rem;
}
@media only screen and (max-width: 992px) {
  .introduction-one {
    font-size: 15px;
  }
}
@media only screen and (max-width: 768px) {
  .introduction-one {
    font-size: 14px;
  }
}
.introduction-one-image {
  position: relative;
  height: 700px;
  width: 100%;
}
@media only screen and (max-width: 992px) {
  .introduction-one-image {
    margin-bottom: 3.125rem;
    height: 490px;
  }
}
@media only screen and (max-width: 768px) {
  .introduction-one-image {
    margin-bottom: 6.25rem;
    height: 600px;
  }
}
@media only screen and (max-width: 576px) {
  .introduction-one-image {
    height: 388px;
  }
}
.introduction-one-image__detail img {
  position: absolute;
  z-index: 1;
}
.introduction-one-image__detail img:first-child {
  top: 0;
  left: 0;
  max-width: 80%;
}
.introduction-one-image__detail img:last-child {
  bottom: 0;
  right: 0;
  max-width: 60%;
}
.introduction-one-image__background .background__item {
  position: absolute;
  z-index: 0;
}
.introduction-one-image__background .background__item img {
  max-width: 100%;
}
.introduction-one-image__background .background__item:first-child {
  top: 24%;
  right: -32px;
  max-width: 70%;
}
.introduction-one-image__background .background__item:last-child {
  bottom: 15%;
  left: -60px;
  max-width: 80%;
}
@media only screen and (max-width: 992px) {
  .introduction-one-image__background .background__item:last-child {
    left: 0;
  }
}
@media only screen and (max-width: 768px) {
  .introduction-one-image__background .background__item:first-child {
    right: 0;
  }
}
.introduction-one-content {
  padding-left: 3.125em;
}
@media only screen and (max-width: 768px) {
  .introduction-one-content {
    padding-left: 0;
  }
}
.introduction-one-content h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.33333em;
  margin-bottom: 2em;
}
.introduction-one-content h5 span {
  color: #f26460;
}
.introduction-one-content p {
  color: #888;
  font-size: 0.9375em;
  font-weight: 400;
  line-height: 2em;
  margin-bottom: 2em;
}

.introduction-two {
  padding-top: 6.25em;
  position: relative;
  margin-bottom: 6.25rem;
}
@media only screen and (max-width: 768px) {
  .introduction-two {
    font-size: 14px;
  }
}
.introduction-two .video-frame {
  position: absolute;
  right: 0;
  top: 0;
  max-width: 80%;
}
@media only screen and (max-width: 1400px) {
  .introduction-two .video-frame {
    max-width: 60%;
    height: auto !important;
  }
}
@media only screen and (max-width: 768px) {
  .introduction-two .video-frame {
    max-width: 70%;
    width: 100% !important;
  }
}
.introduction-two .video-frame__poster img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.introduction-two .video-frame .btn,
.introduction-two
  .video-frame
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .introduction-two
  .video-frame
  button,
.introduction-two .video-frame .paginator li button,
.paginator li .introduction-two .video-frame button,
.introduction-two .video-frame .category-two .slick-arrow,
.category-two .introduction-two .video-frame .slick-arrow,
.introduction-two
  .video-frame
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .introduction-two
  .video-frame
  button,
.introduction-two
  .video-frame
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .introduction-two
  .video-frame
  button,
.introduction-two .video-frame .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .introduction-two .video-frame .slick-arrow,
.introduction-two .video-frame .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .introduction-two .video-frame .slick-arrow,
.introduction-two .video-frame .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .introduction-two .video-frame .slick-arrow,
.introduction-two .video-frame .testimonial-three .slick-arrow,
.testimonial-three .introduction-two .video-frame .slick-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f26460;
}
.introduction-two-content {
  background-color: #f7f5f4;
  padding: 4.375em 0;
}
@media only screen and (max-width: 1170px) {
  .introduction-two-content {
    padding-top: 30%;
  }
}
@media only screen and (max-width: 768px) {
  .introduction-two-content {
    padding-top: 40%;
  }
}
.introduction-two-content__item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3.125em;
}
.introduction-two-content__item:last-child {
  margin-bottom: 0;
}
.introduction-two-content__item span {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1;
  flex-basis: 2.5em;
}
.introduction-two-content__item.active a:after {
  bottom: 0;
}
.introduction-two-content__item a {
  color: #111;
  font-size: 1.875em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
  position: relative;
  overflow: hidden;
}
.introduction-two-content__item a:hover {
  color: #111;
}
.introduction-two-content__item a:after {
  content: "";
  position: absolute;
  bottom: -100%;
  left: 0;
  background-color: #f2646061;
  height: 0.5em;
  width: 100%;
  z-index: 0;
  transition: 0.2s ease-in-out;
}
.introduction-two-content__item p {
  width: 100%;
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1;
  margin-top: 0.9375em;
}

.introduction-three {
  margin-bottom: 6.25rem;
}
.introduction-three__image {
  position: relative;
  height: 540px;
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .introduction-three__image {
    margin-bottom: 3.57143em;
  }
}
.introduction-three__image__background {
  position: absolute;
  top: 0;
  left: -7.5em;
}
.introduction-three__image__background img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
@media only screen and (max-width: 992px) {
  .introduction-three__image__background {
    max-width: 100%;
    left: 0;
  }
}
.introduction-three__image__detail {
  position: relative;
  width: 100%;
  height: 100%;
}
.introduction-three__image__detail .image__item {
  position: absolute;
}
.introduction-three__image__detail .image__item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.introduction-three__image__detail .image__item:first-child {
  top: 0;
  right: 0;
}
@media only screen and (max-width: 768px) {
  .introduction-three__image__detail .image__item:first-child {
    max-width: 80%;
  }
}
.introduction-three__image__detail .image__item:last-child {
  bottom: 0;
  left: 0;
}
@media only screen and (max-width: 768px) {
  .introduction-three__image__detail .image__item:last-child {
    max-width: 80%;
  }
}
.introduction-three__content {
  padding-left: 3.75em;
}
@media only screen and (max-width: 768px) {
  .introduction-three__content {
    padding-left: 0;
  }
}
.introduction-three__content h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.33333em;
  margin-bottom: 2em;
}
.introduction-three__content h5 span {
  color: #f26460;
}
.introduction-three__content h3 {
  color: #111;
  font-size: 2.625em;
  font-weight: 600;
  line-height: 1.30952em;
  margin-bottom: 0.95238em;
}
.introduction-three__content h3 span {
  color: #f26460;
}
.introduction-three__content .more-description {
  display: flex;
  margin-bottom: 2.5em;
}
.introduction-three__content .more-description img {
  height: 100%;
  width: 3.75em;
  object-fit: contain;
  margin-right: 1.875em;
}
.introduction-three__content .more-description span {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.4em;
}
.introduction-three__content p {
  color: #888;
  font-size: 0.9375em;
  font-weight: 400;
  line-height: 2em;
  margin-bottom: 2em;
}

.introduction-four {
  margin-bottom: 6.25rem;
}
.introduction-four__item {
  position: relative;
}
@media only screen and (max-width: 768px) {
  .introduction-four__item {
    margin-bottom: 3.57143em;
  }
}
@media only screen and (max-width: 576px) {
  .introduction-four__item {
    margin-bottom: 2.14286em;
  }
}
.introduction-four__item:hover .introduction-four__item__image img {
  transform: scale(1.1);
}
.introduction-four__item__content {
  position: absolute;
  background-color: #fff;
  padding: 3.125em 0;
  max-width: 100%;
  z-index: 2;
}
@media only screen and (max-width: 576px) {
  .introduction-four__item__content {
    max-width: 90%;
  }
}
.introduction-four__item__content h3 {
  color: #111;
  font-size: 3.125em;
  font-weight: 600;
  line-height: 1.2em;
  margin-bottom: 0.2em;
}
.introduction-four__item__content h3 span {
  color: #f26460;
}
.introduction-four__item__content h5 {
  color: #111;
  font-size: 1.875em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.16667em;
}
.introduction-four__item__content a {
  font-weight: 700;
}
.introduction-four__item__image {
  overflow: hidden;
}
@media only screen and (max-width: 768px) {
  .introduction-four__item__image {
    max-width: 80%;
  }
}
@media only screen and (max-width: 576px) {
  .introduction-four__item__image {
    max-width: 100%;
  }
}
.introduction-four__item__image img {
  transition: 0.75s ease-out;
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.introduction-four__item.-style-1,
.introduction-four__item.slider.-style-5 {
  padding-top: 12.5em;
}
.introduction-four__item.-style-1 .introduction-four__item__content,
.introduction-four__item.slider.-style-5 .introduction-four__item__content {
  top: 3.125em;
  left: 0;
}
.introduction-four__item.-style-2,
.introduction-four__item.menu.-style-6 {
  padding-bottom: 12.5em;
}
.introduction-four__item.-style-2 .introduction-four__item__content,
.introduction-four__item.menu.-style-6 .introduction-four__item__content {
  bottom: 0;
  left: 0;
  padding-right: 3.125em;
}
@media only screen and (max-width: 768px) {
  .introduction-four__item.-style-2 .introduction-four__item__image,
  .introduction-four__item.menu.-style-6 .introduction-four__item__image {
    margin-left: auto;
  }
}
.introduction-four__item.-style-3 {
  padding-top: 6.25em;
}
@media only screen and (max-width: 768px) {
  .introduction-four__item.-style-3 {
    padding-top: 0;
  }
}
.introduction-four__item.-style-3 .introduction-four__item__content {
  padding-right: 3.125em;
  top: 60%;
  transform: translateY(-50%);
}
.introduction-four__item.-style-3 .introduction-four__item__image {
  max-width: 80%;
  margin-left: auto;
}
.introduction-four__item.-style-4 {
  padding-bottom: 11.25em;
}
.introduction-four__item.-style-4 .introduction-four__item__content {
  bottom: 0;
  right: 0;
  padding-left: 3.125em;
}

.introduction-five {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43.75em;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.introduction-five__content {
  text-align: center;
}
.introduction-five__content h2 {
  color: #fff;
  font-size: 5.625em;
  font-weight: 700;
  line-height: 1.22222em;
  margin-bottom: 0.38889em;
}
@media only screen and (max-width: 768px) {
  .introduction-five__content h2 {
    font-size: 3.57143em;
  }
}

.introduction-six {
  margin-bottom: 4.375rem;
}
.introduction-six__wrapper__item {
  margin-bottom: 2.8125em;
}
.introduction-six__wrapper__item:hover
  .introduction-six__wrapper__item__image
  img {
  transform: scale(1.05);
}
.introduction-six__wrapper__item__image {
  height: 9.375em;
  width: 9.375em;
  margin: 0 auto;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 2.1875em;
}
.introduction-six__wrapper__item__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s ease-in-out;
}
.introduction-six__wrapper__item__content {
  text-align: center;
}
.introduction-six__wrapper__item__content a {
  color: #111;
  font-size: 1.25em;
  font-weight: 700;
  text-decoration: none;
  line-height: 1.6em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 0.5em;
}
.introduction-six__wrapper__item__content a:hover {
  color: #f26460;
}
.introduction-six__wrapper__item__content p {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
}

.introduction-seven {
  margin-bottom: 6.25rem;
}
.introduction-seven__wrapper {
  width: 100%;
  position: relative;
  background-color: #f4f6f2;
}
.introduction-seven__wrapper__content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
}
@media only screen and (max-width: 992px) {
  .introduction-seven__wrapper__content__detail {
    padding: 3.57143em 0;
  }
}
@media only screen and (max-width: 992px) {
  .introduction-seven__wrapper__content {
    position: unset;
    transform: translateY(0);
  }
}
.introduction-seven__wrapper__image {
  max-width: 50%;
}
.introduction-seven__wrapper__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media only screen and (max-width: 1400px) {
  .introduction-seven__wrapper__image img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }
}
@media only screen and (max-width: 1170px) {
  .introduction-seven__wrapper__image {
    max-width: 25%;
    height: 600px;
  }
}
@media only screen and (max-width: 992px) {
  .introduction-seven__wrapper__image {
    display: none;
  }
}
.introduction-seven__wrapper.-top .introduction-seven__wrapper__image {
  margin-left: auto;
}
.introduction-seven__wrapper.-top
  .introduction-seven__wrapper__content__detail {
  padding-right: 6.25em;
}
@media only screen and (max-width: 992px) {
  .introduction-seven__wrapper.-top
    .introduction-seven__wrapper__content__detail {
    padding-right: 0;
  }
}
.introduction-seven__wrapper.-top
  .introduction-seven__wrapper__content__detail
  h5 {
  color: #f26460;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 2em;
}
.introduction-seven__wrapper.-top
  .introduction-seven__wrapper__content__detail
  h3 {
  color: #f26460;
  font-size: 3.75em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.66667em;
}
.introduction-seven__wrapper.-top
  .introduction-seven__wrapper__content__detail
  p {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
  margin-bottom: 2.85714em;
}
.introduction-seven__wrapper.-bottom
  .introduction-seven__wrapper__content__detail {
  padding-left: 6.25em;
}
@media only screen and (max-width: 992px) {
  .introduction-seven__wrapper.-bottom
    .introduction-seven__wrapper__content__detail {
    padding-left: 0;
  }
}
.introduction-seven__wrapper.-bottom
  .introduction-seven__wrapper__content
  .accordion {
  margin-bottom: 2.5em;
}
.introduction-seven__wrapper.-bottom
  .introduction-seven__wrapper__content
  .accordion-content
  p {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
}
.introduction-seven__wrapper.-bottom
  .introduction-seven__wrapper__content
  .quantity-group {
  display: flex;
  background-color: #fff;
}
.introduction-seven__wrapper.-bottom
  .introduction-seven__wrapper__content
  .quantity-group__controller {
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0 1.875em;
}
@media only screen and (max-width: 768px) {
  .introduction-seven__wrapper.-bottom
    .introduction-seven__wrapper__content
    .quantity-group__controller {
    padding: 0 0.9375em;
  }
}
.introduction-seven__wrapper.-bottom
  .introduction-seven__wrapper__content
  .quantity-group__controller
  span {
  margin-right: 1.875em;
}

.introduction-eight {
  margin-bottom: 3.125rem;
}
.introduction-eight__content__item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3.125em;
}
.introduction-eight__content__item__image {
  margin-right: 1.875em;
  width: 4.375em;
  flex: none;
}
.introduction-eight__content__item__image img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.introduction-eight__content__item__content h3 {
  color: #111;
  font-size: 1.125em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1em;
}
.introduction-eight__content__item__content p {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.5em;
}
@media only screen and (max-width: 992px) {
  .introduction-eight__image {
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .introduction-eight__image {
    margin-bottom: 3.125em;
    display: block;
  }
}
.introduction-eight__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.introduction-nine {
  margin-bottom: 6.25rem;
}
.introduction-nine .slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: #888;
  font-size: 1.875em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.introduction-nine .slick-arrow:hover {
  color: #f26460;
}
.introduction-nine .slick-arrow.slick-next {
  right: 0;
}
.introduction-nine .slick-arrow.slick-prev {
  left: 0;
}
.introduction-nine__logos {
  background-color: #f7f5f4;
  padding-top: 6.25rem;
  padding-bottom: 21.875rem;
}
.introduction-nine__logos .slide__item {
  height: 4.375em;
  outline: 0;
}
.introduction-nine__logos .slide__item img {
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.introduction-nine__content {
  margin-top: -15.625em;
  background-image: url("../images/introduction/IntroductionNine/bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding: 6.25em 0;
}
.introduction-nine__content h3 {
  color: #fff;
  font-size: 4.375em;
  font-weight: 700;
  line-height: 1.28571em;
  margin-bottom: 0.57143em;
}
@media only screen and (max-width: 768px) {
  .introduction-nine__content h3 {
    font-size: 2.5em;
    line-height: 1.5em;
  }
}

.introduction-ten {
  position: inherit;
  margin-top: -100px;
  z-index: 1;
}
.introduction-ten__wrapper {
  display: grid;
  grid-template-areas:
    "p1 p2 p4"
    "p1 p3 p4";
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25em;
}
@media only screen and (max-width: 992px) {
  .introduction-ten__wrapper {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "p1 p2"
      "p1 p4"
      "p3 p4";
  }
}
@media only screen and (max-width: 768px) {
  .introduction-ten__wrapper {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "p1"
      "p2"
      "p3"
      "p4";
  }
}
.introduction-ten__wrapper__item:nth-child(1) {
  grid-area: p1;
}
.introduction-ten__wrapper__item:nth-child(1)
  .introduction-ten__banner__content {
  padding-top: 25em;
  padding-bottom: 1.875em;
}
.introduction-ten__wrapper__item:nth-child(2) {
  grid-area: p2;
}
.introduction-ten__wrapper__item:nth-child(2)
  .introduction-ten__banner__content {
  padding-top: 4.6875em;
  padding-bottom: 4.6875em;
}
.introduction-ten__wrapper__item:nth-child(3) {
  grid-area: p3;
}
.introduction-ten__wrapper__item:nth-child(3)
  .introduction-ten__banner__content {
  padding-top: 4.6875em;
  padding-bottom: 4.6875em;
}
.introduction-ten__wrapper__item:nth-child(4) {
  grid-area: p4;
}
.introduction-ten__wrapper__item:nth-child(4)
  .introduction-ten__banner__content {
  padding-top: 25em;
  padding-bottom: 1.875em;
}
.introduction-ten__banner {
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.introduction-ten__banner:hover {
  color: #fff;
}
.introduction-ten__banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 0.2s ease-in-out;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.introduction-ten__banner:hover img {
  transform: scale(1.05);
}
.introduction-ten__banner__content {
  padding: 0 2.5em;
}
.introduction-ten__banner__content h5 {
  color: #fff;
  font-size: 0.875em;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.42857em;
}
.introduction-ten__banner__content h3 {
  color: #fff;
  font-size: 2.625em;
  font-weight: 400;
  line-height: 1.75em;
  font-family: "Braga";
  margin-bottom: 0.4em;
}
.introduction-ten__banner__content p {
  color: #fff !important;
}

.menu {
  background-color: #fff;
}
@media only screen and (max-width: 1170px) {
  .menu {
    font-size: 15px;
  }
}
@media only screen and (max-width: 992px) {
  .menu {
    padding: 0.9375em 0;
  }
}
@media only screen and (max-width: 768px) {
  .menu {
    font-size: 14px;
  }
}
.menu-logo img {
  height: 2.5em;
  width: 7.1875em;
  object-fit: cover;
}
.menu-functions {
  display: flex;
  align-items: center;
}
.menu-functions.-white .menu-icon.-navbar .bar,
.paginator li button.menu-functions .menu-icon.-navbar .bar,
.product-detail__slide-two__small
  .menu-functions.slick-arrow
  .menu-icon.-navbar
  .bar {
  background-color: #fff;
}
.menu-functions.-white .menu-cart .menu-icon span,
.paginator li button.menu-functions .menu-cart .menu-icon span,
.product-detail__slide-two__small
  .menu-functions.slick-arrow
  .menu-cart
  .menu-icon
  span {
  color: #f26460;
}
.menu-functions.-white .menu-cart h5,
.paginator li button.menu-functions .menu-cart h5,
.product-detail__slide-two__small .menu-functions.slick-arrow .menu-cart h5 {
  color: #fff;
}
.menu-functions.-white .menu-cart h5 span,
.paginator li button.menu-functions .menu-cart h5 span,
.product-detail__slide-two__small
  .menu-functions.slick-arrow
  .menu-cart
  h5
  span {
  color: #fff;
}
.menu-functions .menu-icon {
  margin-right: 1.875em;
}
.menu-functions .menu-icon img {
  height: 1.5625em;
  width: 1.5625em;
  object-fit: contain;
}
.menu-functions .menu-icon.-navbar {
  display: none;
  margin-right: 0;
}
.menu-functions .menu-icon.-navbar .bar {
  height: 0.125em;
  width: 1.5625em;
  margin-bottom: 0.3125em;
  background-color: #000;
}
.menu-functions .menu-icon.-navbar .bar:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 992px) {
  .menu-functions .menu-icon.-navbar {
    display: block;
  }
}
.menu-functions .menu-cart {
  margin-right: 0;
  display: flex;
  align-items: center;
}
.menu-functions .menu-cart .menu-icon {
  margin-right: 0.625em;
  position: relative;
}
.menu-functions .menu-cart .menu-icon span {
  color: #111;
  font-size: 0.625em;
  font-weight: 400;
  line-height: 1;
  position: absolute;
  top: 1.2em;
  left: 50%;
  transform: translateX(-50%);
}
.menu-functions .menu-cart h5 {
  color: #888;
  font-size: 0.875em;
  font-weight: 400;
  line-height: 1;
}
.menu-functions .menu-cart h5 span {
  color: #111;
}
@media only screen and (max-width: 992px) {
  .menu-functions .menu-icon {
    margin-right: 0.9375em;
  }
  .menu-functions .menu-icon.-search {
    display: none;
  }
  .menu-functions .menu-cart {
    margin-right: 0.9375em;
  }
  .menu-functions .menu-cart .menu-icon {
    margin-right: 0;
  }
  .menu-functions .menu-cart h5 {
    display: none;
  }
}
.menu__wrapper {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
}
@media only screen and (max-width: 992px) {
  .menu__wrapper .navigator {
    display: none;
  }
}
.menu__wrapper .navigator.-off-submenu > ul > li > a {
  line-height: 1;
}
.menu__wrapper .navigator.-white > ul > li > a,
.menu__wrapper .paginator li button.navigator > ul > li > a,
.paginator li .menu__wrapper button.navigator > ul > li > a,
.menu__wrapper
  .product-detail__slide-two__small
  .navigator.slick-arrow
  > ul
  > li
  > a,
.product-detail__slide-two__small
  .menu__wrapper
  .navigator.slick-arrow
  > ul
  > li
  > a {
  color: #fff;
  font-weight: 400;
}
.menu__wrapper .navigator.-white > ul > li > a:hover,
.menu__wrapper .paginator li button.navigator > ul > li > a:hover,
.paginator li .menu__wrapper button.navigator > ul > li > a:hover,
.menu__wrapper
  .product-detail__slide-two__small
  .navigator.slick-arrow
  > ul
  > li
  > a:hover,
.product-detail__slide-two__small
  .menu__wrapper
  .navigator.slick-arrow
  > ul
  > li
  > a:hover {
  color: #fff;
}
.menu__wrapper .navigator > ul {
  list-style: none;
}
.menu__wrapper .navigator > ul > li {
  display: inline-block;
  margin: 0 1.25em;
}
.menu__wrapper .navigator > ul > li.relative {
  position: relative;
}
.menu__wrapper .navigator > ul > li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.menu__wrapper .navigator > ul > li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.menu__wrapper .navigator > ul > li.active > a:after {
  height: 0.5em;
}
.menu__wrapper .navigator > ul > li > a {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  text-decoration: none;
  line-height: 6.66667em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
  position: relative;
  overflow: hidden;
}
.menu__wrapper .navigator > ul > li > a:hover {
  color: #111;
}
.menu__wrapper .navigator > ul > li > a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -100%;
  background-color: #f2646061;
  height: 0.53333em;
  width: 100%;
  z-index: 0;
  transition: 0.2s ease-in-out;
}
.menu__wrapper .navigator > ul > li .dropable-icon {
  margin-left: 0.9375em;
  font-size: 0.8125em;
}
.menu__wrapper .navigator > ul > li:hover .dropdown-menu {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
.menu__wrapper .navigator > ul > li:hover > a:after {
  left: 0;
}
.menu__wrapper .navigator > ul > li .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 1.875em 2.5em;
  box-shadow: -2px 2px 81px -27px rgba(0, 0, 0, 0.3);
  width: 220px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0.625em);
  transition: 0.2s ease-in-out;
  z-index: 99;
}
.menu__wrapper .navigator > ul > li .dropdown-menu li {
  list-style: none;
}
.menu__wrapper .navigator > ul > li .dropdown-menu li a {
  color: #111;
  font-size: 0.875em;
  font-weight: 500;
  text-decoration: none;
  line-height: 2.57143em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
}
.menu__wrapper .navigator > ul > li .dropdown-menu li a:hover {
  color: #f26460;
}
.menu__wrapper .navigator > ul > li .dropdown-menu.-wide {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  width: 100%;
  padding: 0;
}
.menu__wrapper .navigator > ul > li .dropdown-menu.-wide .dropdown-menu__col {
  padding: 1.875em 2.5em;
}
.menu__wrapper
  .navigator
  > ul
  > li
  .dropdown-menu.-wide
  .dropdown-menu__col.-banner {
  padding: 0.3125em;
}
.menu__wrapper
  .navigator
  > ul
  > li
  .dropdown-menu.-wide
  .dropdown-menu__col.-banner
  a {
  display: block;
  height: 100%;
  width: 100%;
}
.menu__wrapper
  .navigator
  > ul
  > li
  .dropdown-menu.-wide
  .dropdown-menu__col.-banner
  a
  img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.menu__wrapper .search-box {
  position: absolute;
  right: 0;
  width: 500px;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out;
  transform: translatex(150px);
  z-index: 3;
}
.menu__wrapper .search-box.active {
  opacity: 1;
  visibility: visible;
  transform: translatex(0);
}
.menu__wrapper .search-box form {
  position: relative;
  z-index: 1;
}
.menu__wrapper .search-box form input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: auto;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  border: 0;
  box-shadow: 1px 1px 9px #00000024;
}
.menu__wrapper .search-box form input:focus {
  outline: 0;
}
.menu__wrapper .search-box form input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.menu__wrapper .search-box form input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.menu__wrapper .search-box form input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.menu__wrapper .search-box form button {
  position: absolute;
  border: 0;
  background-color: transparent;
  right: 0.9375em;
  top: 46%;
  transform: translateY(-50%);
}
.menu.-style-2,
.menu.-style-6 {
  padding: 1.875em 0;
}
@media only screen and (max-width: 992px) {
  .menu.-style-2 .menu-functions:first-child,
  .menu.-style-6 .menu-functions:first-child {
    display: none;
  }
}
.menu.-style-2 .menu__wrapper .navigator,
.menu.-style-6 .menu__wrapper .navigator {
  display: flex;
  align-items: flex-end;
}
.menu.-style-2 .menu__wrapper .navigator .menu__wrapper__logo,
.menu.-style-6 .menu__wrapper .navigator .menu__wrapper__logo {
  margin-right: auto;
}
.menu.-style-2 .menu__wrapper .navigator .menu__wrapper__logo img,
.menu.-style-6 .menu__wrapper .navigator .menu__wrapper__logo img {
  height: 2.5em;
  width: 7.1875em;
  object-fit: cover;
}
@media only screen and (max-width: 992px) {
  .menu.-style-2 .menu__wrapper .navigator > ul,
  .menu.-style-6 .menu__wrapper .navigator > ul {
    display: none;
  }
}
.menu.-style-2 .menu__wrapper .navigator > ul.-left,
.menu.-style-6 .menu__wrapper .navigator > ul.-left {
  margin-right: 2.8125em;
}
.menu.-style-2 .menu__wrapper .navigator > ul.-right,
.menu.-style-6 .menu__wrapper .navigator > ul.-right {
  margin-left: 2.8125em;
}
.menu.-style-2 .menu__wrapper .navigator > ul > li > a,
.menu.-style-6 .menu__wrapper .navigator > ul > li > a {
  line-height: 1;
}
.menu.-style-2 .menu__wrapper .search-box,
.menu.-style-6 .menu__wrapper .search-box {
  left: 0;
  right: auto;
}
.menu.-style-3 {
  background-color: #111;
  padding: 0.9375em 0;
}
.menu.-style-3 .menu-logo img {
  height: 1.875em;
  width: 6.25em;
  object-fit: contain;
}
.menu.-style-3 .menu__wrapper .navigator > ul > li > a {
  line-height: 2em;
}
.menu.-style-4 {
  padding: 0.9375em 0;
}
@media only screen and (max-width: 992px) {
  .menu.-style-4 {
    display: none;
  }
}
.menu.-style-5 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 1.875em 0;
  z-index: 100;
}
.menu.-style-5 .menu__wrapper-logo img {
  height: 2.5em;
  width: 7.1875em;
  object-fit: cover;
}
.menu.-style-5 .menu__wrapper .btn,
.menu.-style-5
  .menu__wrapper
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .menu.-style-5
  .menu__wrapper
  button,
.menu.-style-5 .menu__wrapper .paginator li button,
.paginator li .menu.-style-5 .menu__wrapper button,
.menu.-style-5 .menu__wrapper .category-two .slick-arrow,
.category-two .menu.-style-5 .menu__wrapper .slick-arrow,
.menu.-style-5
  .menu__wrapper
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .menu.-style-5
  .menu__wrapper
  button,
.menu.-style-5
  .menu__wrapper
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .menu.-style-5
  .menu__wrapper
  button,
.menu.-style-5 .menu__wrapper .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .menu.-style-5 .menu__wrapper .slick-arrow,
.menu.-style-5 .menu__wrapper .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .menu.-style-5 .menu__wrapper .slick-arrow,
.menu.-style-5 .menu__wrapper .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .menu.-style-5 .menu__wrapper .slick-arrow,
.menu.-style-5 .menu__wrapper .testimonial-three .slick-arrow,
.testimonial-three .menu.-style-5 .menu__wrapper .slick-arrow {
  height: 3.07692em;
  width: 3.07692em;
  line-height: 3.07692em;
  padding: 0;
}
.menu.-style-6 .menu__wrapper .navigator {
  align-items: center;
}

.navigation-sidebar {
  height: 100%;
  background-color: #fff;
  z-index: 101;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.navigation-sidebar .search-box {
  margin-bottom: 1.875em;
}
.navigation-sidebar .search-box form {
  position: relative;
}
.navigation-sidebar .search-box form input {
  width: 100%;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: auto;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.07143em;
  border-radius: 0px;
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
  border: 0;
  box-shadow: 1px 1px 9px #00000024;
}
.navigation-sidebar .search-box form input:focus {
  outline: 0;
}
.navigation-sidebar .search-box form input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form input:-moz-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.navigation-sidebar .search-box form input::-moz-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.navigation-sidebar .search-box form input:-ms-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form input::-ms-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form input:-o-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form input::-o-input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form input:input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form input::input-placeholder {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: auto;
}
.navigation-sidebar .search-box form button {
  position: absolute;
  border: 0;
  background-color: transparent;
  right: 0.625em;
  top: 50%;
  transform: translateY(-50%);
}
.navigation-sidebar .search-box form button img {
  height: 0.9375em;
  width: 0.9375em;
  object-fit: cover;
}
.navigation-sidebar .navigator-mobile {
  margin-bottom: 5em;
}
.navigation-sidebar .navigator-mobile > ul {
  list-style: none;
}
.navigation-sidebar .navigator-mobile > ul > li > a {
  color: #111;
  font-size: 1em;
  font-weight: 600;
  text-decoration: none;
  line-height: 2.25em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
}
.navigation-sidebar .navigator-mobile > ul > li > a:hover {
  color: #111;
}
.navigation-sidebar .navigator-mobile > ul > li .dropable-icon {
  float: right;
}
.navigation-sidebar .navigator-mobile > ul > li .dropdown-menu {
  padding-left: 0.9375em;
  padding-bottom: 0.9375em;
}
.navigation-sidebar .navigator-mobile > ul > li .dropdown-menu li {
  list-style: none;
}
.navigation-sidebar .navigator-mobile > ul > li .dropdown-menu li a {
  color: #888;
  font-size: 0.875em;
  font-weight: 500;
  text-decoration: none;
  line-height: 2.57143em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
}
.navigation-sidebar .navigator-mobile > ul > li .dropdown-menu li a:hover {
  color: #f26460;
}
.navigation-sidebar
  .navigator-mobile
  > ul
  > li
  .dropdown-menu
  .dropdown-menu__col.-banner
  a {
  display: block;
  height: 100%;
  width: 100%;
}
.navigation-sidebar
  .navigator-mobile
  > ul
  > li
  .dropdown-menu
  .dropdown-menu__col.-banner
  a
  img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.navigation-sidebar__footer {
  margin-top: auto;
}
.navigation-sidebar__footer__auth {
  color: #111;
  font-size: 1em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: block;
  margin-bottom: 3.125em;
}
.navigation-sidebar__footer__auth:hover {
  color: #f26460;
}
.navigation-sidebar__footer select {
  width: 100%;
  margin-bottom: 1.875em;
  padding-right: 0;
}
.navigation-sidebar__footer .social-icons > li > a {
  color: #111;
  font-size: 1em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.navigation-sidebar__footer .social-icons > li > a:hover {
  color: #f26460;
}

.product-detail__slide-one {
  padding-right: 1.875em;
}
@media only screen and (max-width: 768px) {
  .product-detail__slide-one {
    padding-right: 0;
    margin-bottom: 3.57143em;
  }
}
.product-detail__slide-one .slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: #888;
  font-size: 2.25em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.product-detail__slide-one .slick-arrow:hover {
  color: #f26460;
}
.product-detail__slide-one .slick-arrow.slick-next {
  right: 0.55556em;
}
.product-detail__slide-one .slick-arrow.slick-prev {
  left: 0.55556em;
}
.product-detail__slide-one .slider-item {
  outline: 0;
}
.product-detail__slide-one .slider-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.product-detail__slide-one .slider-dots {
  list-style: none;
  text-align: center;
  position: absolute;
  bottom: 1.25em;
  left: 50%;
  transform: translateX(-50%);
}
.product-detail__slide-one .slider-dots li {
  display: inline-block;
  margin: 0 0.3125em;
}
.product-detail__slide-one .slider-dots li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.product-detail__slide-one .slider-dots li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.product-detail__slide-one .slider-dots li.slick-active .slider-dot {
  background-color: #888;
}
.product-detail__slide-one .slider-dots li .slider-dot {
  height: 0.5em;
  width: 0.5em;
  cursor: pointer;
  background-color: #c7c7c7;
  border-radius: 999px;
}
.product-detail__slide-one img {
  max-height: 31.25em;
}

@media only screen and (max-width: 768px) {
  .product-detail__slide-two {
    margin-bottom: 2.14286em;
  }
}

.product-detail__slide-two .slider__item {
  outline: 0;
}
.product-detail__slide-two .slider__item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.product-detail__slide-two__big {
  margin-bottom: 1.25em;
}

.product-detail__slide-two__small .slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  padding: 0;
  height: 2.5em;
  width: 2.5em;
  line-height: 2.5em;
}
.product-detail__slide-two__small .slick-arrow.slick-prev {
  left: 0.9375em;
}
.product-detail__slide-two__small .slick-arrow.slick-next {
  right: 0.9375em;
}

.product-detail__slide-two__small .slick-current .slider__item img {
  border: 2px solid #f26460;
}

.product-detail__slide-two__small .slider__item {
  padding: 0 0.3125em;
}
.product-detail__slide-two__small .slider__item img {
  height: 7.5em;
  width: 100%;
  object-fit: cover;
}

#quick-view-modal {
  max-width: 1170px;
}

.product-detail__content__header h5 {
  color: medium;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  text-transform: capitalize;
  margin-bottom: 0.625em;
}

.product-detail__content__header h2 {
  color: #111;
  font-size: 1.5em;
  font-weight: normal;
  line-height: 1.33333em;
  text-transform: capitalize;
  margin-bottom: 0.625em;
}

.product-detail__content__header__comment-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.5625em;
}
.product-detail__content__header__comment-block .rate:after {
  content: "/";
  margin: 0 1.53846em;
}
.product-detail__content__header__comment-block p {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.product-detail__content__header__comment-block p:after {
  content: "/";
  margin: 0 1.53846em;
}
.product-detail__content__header__comment-block a {
  color: #111;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.product-detail__content__header__comment-block a:hover {
  color: #f26460;
}
@media only screen and (max-width: 768px) {
  .product-detail__content__header__comment-block {
    flex-direction: column;
    align-items: flex-start;
  }
  .product-detail__content__header__comment-block .rate,
  .product-detail__content__header__comment-block p {
    margin-bottom: 0.9375em;
  }
  .product-detail__content__header__comment-block .rate:after,
  .product-detail__content__header__comment-block p:after {
    display: none;
  }
}

.product-detail__content__header h3 {
  color: #f26460;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1;
  text-transform: capitalize;
}
.product-detail__content__header h3 span {
  text-decoration: line-through;
  margin-left: 1.875em;
  color: #888;
  font-size: 0.75em;
  font-weight: 500;
  line-height: 1;
}

.product-detail__content__footer ul {
  list-style: none;
  margin-bottom: 1.875em;
}
.product-detail__content__footer ul li {
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.875em;
  text-transform: capitalize;
}
.product-detail__content__footer ul li span {
  color: #111;
}

.product-detail__content__footer .product-detail__colors {
  margin-bottom: 2.5em;
}
.product-detail__content__footer .product-detail__colors span {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1;
  margin-right: 0.66667em;
}
.product-detail__content__footer .product-detail__colors__item {
  height: 0.75em;
  width: 0.75em;
  display: inline-block;
  border-radius: 999px;
  margin: 0 0.25em;
}
.product-detail__content__footer .product-detail__colors__item:first-child {
  margin-left: 0;
  padding-left: 0;
}
.product-detail__content__footer .product-detail__colors__item:last-child {
  margin-right: 0;
  padding-right: 0;
}
.product-detail__content__footer .product-detail__colors__item:hover {
  border: 1px solid #e1e1e1;
}
.product-detail__content__footer .product-detail__colors__item.active {
  border: 1px solid #e1e1e1;
}

.product-detail__content__tab .tab-content__header {
  border-bottom: 0;
  margin-bottom: 2.8125em;
}
.product-detail__content__tab .tab-content__header li {
  outline: 0;
  color: #888;
  font-size: 0.9375em;
  font-weight: 500;
  line-height: 1.8em;
}
.product-detail__content__tab .tab-content__header li:after {
  content: "/";
  margin: 0 0.9375em;
  color: #888 !important;
}
.product-detail__content__tab .tab-content__header li:last-child:after {
  display: none;
}
.product-detail__content__tab .tab-content__header li.active {
  color: #111;
}

.product-detail__content__tab .tab-content__item.-description p {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
}

.product-detail__content__tab .tab-content__item.-ship h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 2em;
}
.product-detail__content__tab .tab-content__item.-ship h5 span {
  font-weight: 500;
}

.product-detail__content__tab .tab-content__item.-ship p {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
}

.product-detail__content__tab .tab-content__item.-ship ul {
  list-style: none;
  margin-bottom: 1.875em;
}
.product-detail__content__tab .tab-content__item.-ship ul li {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
}
.product-detail__content__tab .tab-content__item.-ship ul li::before {
  content: "\f00c";
  font-family: "Font Awesome 5 Pro";
  margin-right: 0.9375em;
}
.product-detail__content__tab .tab-content__item.-ship ul li span {
  color: #f26460;
}

.product-detail__content__tab .tab-content__item.-review .review {
  margin-bottom: 3.125em;
}

.product-detail__content__tab .tab-content__item.-review form .input-validator {
  margin-bottom: 1.875em;
}

.product-detail__content__tab .tab-content__item.-review form h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.875em;
}

.product-detail__content__tab .tab-content__item.-review form input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 2.8125em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab .tab-content__item.-review form input:focus {
  outline: 0;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
  line-height: -moz-block-height;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
  line-height: -moz-block-height;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}

.product-detail__content__tab .tab-content__item.-review form textarea {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: auto;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  resize: none;
}
.product-detail__content__tab .tab-content__item.-review form textarea:focus {
  outline: 0;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.product-detail__content__tab
  .tab-content__item.-review
  form
  textarea::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}

.product-detail__content .divider {
  height: 1px;
  width: 100%;
  background-color: #e1e1e1;
  margin: 1.125rem 0;
}

.product-detail__content .product-detail__controller {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product-detail__content .product-detail__controller .btn,
.product-detail__content
  .product-detail__controller
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .product-detail__content
  .product-detail__controller
  button,
.product-detail__content .product-detail__controller .paginator li button,
.paginator li .product-detail__content .product-detail__controller button,
.product-detail__content .product-detail__controller .category-two .slick-arrow,
.category-two .product-detail__content .product-detail__controller .slick-arrow,
.product-detail__content
  .product-detail__controller
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .product-detail__content
  .product-detail__controller
  button,
.product-detail__content
  .product-detail__controller
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .product-detail__content
  .product-detail__controller
  button,
.product-detail__content
  .product-detail__controller
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .product-detail__content
  .product-detail__controller
  .slick-arrow,
.product-detail__content
  .product-detail__controller
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .product-detail__content
  .product-detail__controller
  .slick-arrow,
.product-detail__content
  .product-detail__controller
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .product-detail__content
  .product-detail__controller
  .slick-arrow,
.product-detail__content
  .product-detail__controller
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .product-detail__content
  .product-detail__controller
  .slick-arrow {
  height: 3.84615em;
  width: 3.84615em;
  padding: 0;
  line-height: 3.84615em;
}
.product-detail__content .product-detail__controller .btn.active,
.product-detail__content
  .product-detail__controller
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button.active,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .product-detail__content
  .product-detail__controller
  button.active,
.product-detail__content
  .product-detail__controller
  .paginator
  li
  button.active,
.paginator
  li
  .product-detail__content
  .product-detail__controller
  button.active,
.product-detail__content
  .product-detail__controller
  .category-two
  .active.slick-arrow,
.category-two
  .product-detail__content
  .product-detail__controller
  .active.slick-arrow,
.product-detail__content
  .product-detail__controller
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button.active,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .product-detail__content
  .product-detail__controller
  button.active,
.product-detail__content
  .product-detail__controller
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button.active,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .product-detail__content
  .product-detail__controller
  button.active,
.product-detail__content
  .product-detail__controller
  .product-detail__slide-two__small
  .active.slick-arrow,
.product-detail__slide-two__small
  .product-detail__content
  .product-detail__controller
  .active.slick-arrow,
.product-detail__content
  .product-detail__controller
  .product-tab-slide__content
  .active.slick-arrow,
.product-tab-slide__content
  .product-detail__content
  .product-detail__controller
  .active.slick-arrow,
.product-detail__content
  .product-detail__controller
  .slider.-style-3
  .slider__carousel
  .active.slick-arrow,
.slider.-style-3
  .slider__carousel
  .product-detail__content
  .product-detail__controller
  .active.slick-arrow,
.product-detail__content
  .product-detail__controller
  .testimonial-three
  .active.slick-arrow,
.testimonial-three
  .product-detail__content
  .product-detail__controller
  .active.slick-arrow {
  background-color: #f26460;
  color: #fff;
}
@media only screen and (max-width: 768px) {
  .product-detail__content .product-detail__controller {
    font-size: 13px;
  }
  .product-detail__content .product-detail__controller .quantity-controller {
    margin-bottom: 0.76923em;
  }
  .product-detail__content .product-detail__controller .add-to-cart {
    margin-bottom: 0.76923em;
  }
}

.product-slider .slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: #888;
  font-size: 1.875em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.product-slider .slick-arrow:hover {
  color: #f26460;
}
.product-slider .slick-arrow.slick-next {
  right: -0.9375em;
}
.product-slider .slick-arrow.slick-prev {
  left: -0.9375em;
}
@media only screen and (max-width: 768px) {
  .product-slider .slick-arrow.slick-next {
    right: 0;
  }
  .product-slider .slick-arrow.slick-prev {
    left: 0;
  }
}

.product-slide {
  margin-bottom: 6.25rem;
}
.product-slide .product-slide__wrapper {
  margin: 0 -0.9375em;
  margin-bottom: 3.125em;
}
.product-slide__item {
  padding: 0 0.9375em;
  outline: 0;
}

.product-tab.-style-1,
.product-tab.slider.-style-5 {
  margin-bottom: 6.25rem;
}
.product-tab.-style-1 .product-tab__header,
.product-tab.slider.-style-5 .product-tab__header {
  margin-bottom: 1.875em;
}
.product-tab.-style-1 .product-tab__header ul,
.product-tab.slider.-style-5 .product-tab__header ul {
  text-align: center;
}
.product-tab.-style-1 .product-tab__header ul li,
.product-tab.slider.-style-5 .product-tab__header ul li {
  display: inline-block;
  margin: 0 0.625em;
}
.product-tab.-style-1 .product-tab__header ul li:first-child,
.product-tab.slider.-style-5 .product-tab__header ul li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.product-tab.-style-1 .product-tab__header ul li:last-child,
.product-tab.slider.-style-5 .product-tab__header ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.product-tab.-style-1 .product-tab__header ul li a,
.product-tab.slider.-style-5 .product-tab__header ul li a {
  color: #888;
  font-size: 0.9375em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  padding: 8px 0;
  overflow: hidden;
  display: inline-block;
}
.product-tab.-style-1 .product-tab__header ul li a:hover,
.product-tab.slider.-style-5 .product-tab__header ul li a:hover {
  color: #111;
}
.product-tab.-style-1 .product-tab__header ul li a:after,
.product-tab.slider.-style-5 .product-tab__header ul li a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -100%;
  background-color: #f2646061;
  height: 0.5em;
  width: 100%;
  z-index: 0;
  transition: 0.2s ease-in-out;
}
.product-tab.-style-1 .product-tab__header ul li a:hover:after,
.product-tab.slider.-style-5 .product-tab__header ul li a:hover:after {
  left: 0;
}
.product-tab.-style-1 .product-tab__header ul li.active a,
.product-tab.slider.-style-5 .product-tab__header ul li.active a {
  color: #111;
}
.product-tab.-style-1 .product-tab__header ul li.active a:after,
.product-tab.slider.-style-5 .product-tab__header ul li.active a:after {
  left: 0;
}
.product-tab.-style-1 .product-tab__content__empty,
.product-tab.slider.-style-5 .product-tab__content__empty {
  height: 9.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-tab.-style-1 .product-tab__content__empty h3,
.product-tab.slider.-style-5 .product-tab__content__empty h3 {
  color: #111;
  font-size: 1.375em;
  font-weight: normal;
  line-height: 1;
}
.product-tab.-style-1 .product-tab__content__wrapper,
.product-tab.slider.-style-5 .product-tab__content__wrapper {
  margin-bottom: 1.875em;
}
.product-tab.-style-1 .product-tab__content__wrapper .product,
.product-tab.slider.-style-5 .product-tab__content__wrapper .product {
  margin-bottom: 1.875em;
}

.product-tab.-style-2,
.product-tab.menu.-style-6 {
  margin-bottom: 6.25rem;
}
.product-tab.-style-2 .product-tab__content__wrapper .product,
.product-tab.menu.-style-6 .product-tab__content__wrapper .product {
  margin-bottom: 1.875em;
}
.product-tab.-style-2
  .product-tab__content__wrapper
  .product.-height-limit
  .product-thumb,
.product-tab.menu.-style-6
  .product-tab__content__wrapper
  .product.-height-limit
  .product-thumb {
  height: 16.875em;
}
.product-tab.-style-2
  .product-tab__content__wrapper
  .product.-height-limit.-inline-content
  .product-thumb,
.product-tab.menu.-style-6
  .product-tab__content__wrapper
  .product.-height-limit.-inline-content
  .product-thumb {
  height: 46.875em;
}

.product-tab-slide {
  background-color: #f7e7e8;
  margin-bottom: 6.25rem;
  padding: 6.25em 0;
}
.product-tab-slide__header,
.product-tab.-style-2 .product-tab__header,
.product-tab.menu.-style-6 .product-tab__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 3.125em;
}
@media only screen and (max-width: 768px) {
  .product-tab-slide__header,
  .product-tab.-style-2 .product-tab__header,
  .product-tab.menu.-style-6 .product-tab__header {
    justify-content: center;
  }
  .product-tab-slide__header h5,
  .product-tab.-style-2 .product-tab__header h5,
  .product-tab.menu.-style-6 .product-tab__header h5 {
    margin-bottom: 0.9375em;
  }
}
.product-tab-slide__header h5,
.product-tab.-style-2 .product-tab__header h5,
.product-tab.menu.-style-6 .product-tab__header h5 {
  color: #111;
  font-size: 2.8125em;
  font-weight: 500;
  line-height: 1;
}
.product-tab-slide__header__controller {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
@media only screen and (max-width: 576px) {
  .product-tab-slide__header__controller {
    justify-content: center;
  }
}
.product-tab-slide__header__controller ul {
  margin-right: 1.875em;
}
.product-tab-slide__header__controller ul li {
  display: inline-block;
  margin: 0 0.625em;
}
.product-tab-slide__header__controller ul li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.product-tab-slide__header__controller ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.product-tab-slide__header__controller ul li a {
  color: #888;
  font-size: 0.9375em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  padding: 8px 0;
  overflow: hidden;
  display: inline-block;
}
.product-tab-slide__header__controller ul li a:hover {
  color: #111;
}
.product-tab-slide__header__controller ul li a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -100%;
  background-color: #f2646061;
  height: 0.5em;
  width: 100%;
  z-index: 0;
  transition: 0.2s ease-in-out;
}
.product-tab-slide__header__controller ul li a:hover:after {
  left: 0;
}
.product-tab-slide__header__controller ul li.active a {
  color: #111;
}
.product-tab-slide__header__controller ul li.active a:after {
  left: 0;
}
.product-tab-slide__header__controller .btn,
.product-tab-slide__header__controller
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .product-tab-slide__header__controller
  button,
.product-tab-slide__header__controller .paginator li button,
.paginator li .product-tab-slide__header__controller button,
.product-tab-slide__header__controller .category-two .slick-arrow,
.category-two .product-tab-slide__header__controller .slick-arrow,
.product-tab-slide__header__controller
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .product-tab-slide__header__controller
  button,
.product-tab-slide__header__controller
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .product-tab-slide__header__controller
  button,
.product-tab-slide__header__controller
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .product-tab-slide__header__controller
  .slick-arrow,
.product-tab-slide__header__controller .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .product-tab-slide__header__controller .slick-arrow,
.product-tab-slide__header__controller
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .product-tab-slide__header__controller
  .slick-arrow,
.product-tab-slide__header__controller .testimonial-three .slick-arrow,
.testimonial-three .product-tab-slide__header__controller .slick-arrow {
  padding: 0.9375em 1.25em;
}
.product-tab-slide__content .slick-arrow {
  color: #fff;
  font-size: 1.875em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  padding: 0.33333em 0.66667em;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}
.product-tab-slide__content .slick-arrow:hover {
  color: #f26460;
}
.product-tab-slide__content .slick-arrow.slick-next {
  right: 2.5em;
}
.product-tab-slide__content .slick-arrow.slick-prev {
  left: 2.5em;
}
@media only screen and (max-width: 768px) {
  .product-tab-slide__content .slick-arrow.slick-next {
    right: 0.9375em;
  }
  .product-tab-slide__content .slick-arrow.slick-prev {
    left: 0.9375em;
  }
}
.product-tab-slide__content .slide-item {
  padding: 0 0.9375em;
}

.slider {
  position: relative;
  overflow: hidden;
  background-color: #f4f4f4;
}
@media only screen and (max-width: 768px) {
  .slider {
    font-size: 14px;
  }
}
.slider-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.slider-content__subtitle {
  margin-bottom: 1.25em;
  color: #fff;
  font-size: 1.0625em;
  font-weight: 400;
  line-height: 1.52941em;
  text-transform: uppercase;
  letter-spacing: 0.29412em;
  font-family: "Cambay", sans-serif;
}
.slider-content__title {
  color: #fff;
  font-size: 3.75em;
  font-weight: 600;
  line-height: 1.16667em;
  margin-bottom: 0.41667em;
}
.slider-content__description {
  color: #fff;
  font-size: 1.0625em;
  font-weight: 500;
  line-height: 1.76471em;
}
.slider .slider__carousel__item {
  display: flex !important;
  align-items: center;
  height: 37.5em;
  position: relative;
  z-index: 2;
  outline: 0;
}
.slider .slider__carousel__item .slider-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.slider .slider__carousel__item .slider-background img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.slider .slider__carousel .slider-dots {
  position: absolute;
  bottom: 1.875em;
  left: 0;
  right: 0;
  text-align: center;
}
.slider .slider__carousel .slider-dots li {
  display: inline-block;
  margin: 0 0.3125em;
}
.slider .slider__carousel .slider-dots li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.slider .slider__carousel .slider-dots li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.slider .slider__carousel .slider-dots li.slick-active .slider-dot {
  background-color: rgba(0, 0, 0, 0.5);
}
.slider .slider__carousel .slider-dots li .slider-dot {
  height: 0.625em;
  width: 0.625em;
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.slider.-style-1,
.slider.-style-5 {
  margin-bottom: 6.25rem;
}
.slider.-style-1 .slider-dots li.slick-active .slider-dot,
.slider.-style-5 .slider-dots li.slick-active .slider-dot {
  background-color: #f26460;
}
.slider.-style-1 .slider-dots li .slider-dot,
.slider.-style-5 .slider-dots li .slider-dot {
  background-color: #fff;
}
.slider.-style-1 .slider__carousel__item,
.slider.-style-5 .slider__carousel__item {
  overflow: hidden;
}
.slider.-style-1 .slider__carousel__item.slick-active .slider-background,
.slider.-style-5 .slider__carousel__item.slick-active .slider-background {
  transform: scale(1);
}
.slider.-style-1 .slider__carousel__item .slider-background,
.slider.-style-5 .slider__carousel__item .slider-background {
  transform: scale(1.05);
  transition: 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slider.-style-1 .slider__carousel__item .slider-content,
.slider.-style-5 .slider__carousel__item .slider-content {
  max-width: 100%;
}
.slider.-style-1 .slider__carousel__item .slider-content__title,
.slider.-style-5 .slider__carousel__item .slider-content__title {
  color: #fff;
}
.slider.-style-1 .slider__carousel__item .slider-content__subtitle,
.slider.-style-5 .slider__carousel__item .slider-content__subtitle {
  color: #fff;
}
.slider.-style-1 .slider__carousel__item .slider-content .btn,
.slider.-style-5 .slider__carousel__item .slider-content .btn,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  button,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  button,
.slider.-style-1 .slider__carousel__item .slider-content .paginator li button,
.paginator li .slider.-style-1 .slider__carousel__item .slider-content button,
.slider.-style-5 .slider__carousel__item .slider-content .paginator li button,
.paginator li .slider.-style-5 .slider__carousel__item .slider-content button,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .category-two
  .slick-arrow,
.category-two
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .category-two
  .slick-arrow,
.category-two
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  button,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  button,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  button,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  button,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-1
  .slider__carousel__item
  .slider-content
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .slider.-style-1
  .slider__carousel__item
  .slider-content
  .slick-arrow,
.slider.-style-5
  .slider__carousel__item
  .slider-content
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .slider.-style-5
  .slider__carousel__item
  .slider-content
  .slick-arrow {
  color: #fff;
  display: inline-block;
}
.slider.-style-2,
.slider.menu.-style-6 {
  margin-bottom: 1.875rem;
}
.slider.-style-2 .slider__carousel__item.slider-1 .slider-content,
.slider.menu.-style-6 .slider__carousel__item.slider-1 .slider-content {
  max-width: 400px;
}
.slider.-style-2 .slider__carousel__item.slider-1 .slider-content__title,
.slider.menu.-style-6 .slider__carousel__item.slider-1 .slider-content__title {
  color: #fff;
  font-weight: 700;
}
.slider.-style-2 .slider__carousel__item.slider-1 .slider-content__title span,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content__title
  span {
  color: #f26460;
}
.slider.-style-2 .slider__carousel__item.slider-1 .slider-content__description,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content__description {
  color: #fff;
  margin-bottom: 2.05882em;
}
.slider.-style-2 .slider__carousel__item.slider-1 .slider-content .btn,
.slider.menu.-style-6 .slider__carousel__item.slider-1 .slider-content .btn,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .paginator
  li
  button,
.paginator
  li
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .paginator
  li
  button,
.paginator
  li
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .category-two
  .slick-arrow,
.category-two
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .category-two
  .slick-arrow,
.category-two
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .slider.-style-2
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .slider.menu.-style-6
  .slider__carousel__item.slider-1
  .slider-content
  .slick-arrow {
  color: #f26460;
}
.slider.-style-2 .slider__carousel__item.slider-2 .slider-content,
.slider.menu.-style-6 .slider__carousel__item.slider-2 .slider-content {
  max-width: 34.375em;
}
.slider.-style-2 .slider__carousel__item.slider-2 .slider-content__subtitle,
.slider.menu.-style-6
  .slider__carousel__item.slider-2
  .slider-content__subtitle {
  color: #de1339;
}
.slider.-style-2 .slider__carousel__item.slider-2 .slider-content__title,
.slider.menu.-style-6 .slider__carousel__item.slider-2 .slider-content__title {
  color: #111;
  font-weight: 700;
}
.slider.-style-2 .slider__carousel__item.slider-2 .slider-content__description,
.slider.menu.-style-6
  .slider__carousel__item.slider-2
  .slider-content__description {
  color: #111;
  font-weight: 500;
  margin-bottom: 1.76471em;
}
.slider.-style-2 .slider__carousel__item.slider-3,
.slider.menu.-style-6 .slider__carousel__item.slider-3 {
  text-align: center;
}
.slider.-style-2 .slider__carousel__item.slider-3 .slider-content__subtitle,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content__subtitle {
  color: #de1339;
}
.slider.-style-2 .slider__carousel__item.slider-3 .slider-content .btn,
.slider.menu.-style-6 .slider__carousel__item.slider-3 .slider-content .btn,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .paginator
  li
  button,
.paginator
  li
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .paginator
  li
  button,
.paginator
  li
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .category-two
  .slick-arrow,
.category-two
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .category-two
  .slick-arrow,
.category-two
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  button,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .slider.-style-2
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow,
.slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .slider.menu.-style-6
  .slider__carousel__item.slider-3
  .slider-content
  .slick-arrow {
  color: #f26460;
}
.slider.-style-3 {
  margin-bottom: 6.25rem;
}
.slider.-style-3 .slider__carousel__item {
  height: 43.75em;
}
.slider.-style-3 .slider__carousel__item .slider-content {
  margin: 0 auto;
  background-color: #fff;
  max-width: 690px;
  text-align: center;
  padding: 3.125em;
  border: 1px dashed rgba(242, 100, 96, 0.5);
  outline: 0.625em solid #fff;
  min-height: 21.5625em;
}
.slider.-style-3 .slider__carousel__item .slider-content__title {
  font-weight: 600;
  color: #111;
}
@media only screen and (max-width: 768px) {
  .slider.-style-3 .slider__carousel__item .slider-content__title {
    font-size: 2.85714em;
  }
}
.slider.-style-3 .slider__carousel__item .slider-content__description {
  color: #111;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 2.1875em;
}
.slider.-style-3 .slider__carousel .slick-arrow {
  position: absolute;
  top: 50%;
  padding: 0;
  font-size: 1.875em;
  height: 1.66667em;
  width: 1.66667em;
  line-height: 1.66667em;
  background-color: #fff;
  z-index: 2;
  border: 1px solid #e1e1e1;
  color: #888;
}
.slider.-style-3 .slider__carousel .slick-arrow.slick-prev {
  left: 1.66667em;
}
.slider.-style-3 .slider__carousel .slick-arrow.slick-next {
  right: 1.66667em;
}
@media only screen and (max-width: 768px) {
  .slider.-style-3 .slider__carousel .slick-arrow.slick-prev {
    left: 0.5em;
  }
  .slider.-style-3 .slider__carousel .slick-arrow.slick-next {
    right: 0.5em;
  }
}
.slider.-style-4 {
  margin-bottom: 6.25rem;
}
.slider.-style-4 .slider__carousel__item {
  height: 40.625em;
}
.slider.-style-4 .slider__carousel__item .slider-content {
  max-width: 100%;
}
.slider.-style-4 .slider__carousel__item .slider-content__subtitle {
  color: #111;
  font-weight: 600;
}
.slider.-style-4 .slider__carousel__item .slider-content__title {
  color: #f26460;
  font-weight: 700;
}
.slider.-style-4 .slider__carousel__item .slider-content__title span {
  color: #111;
}
@media only screen and (max-width: 768px) {
  .slider.-style-4 .slider__carousel__item .slider-content__title {
    font-size: 2.85714em;
  }
}
.slider.-style-4 .slider__carousel__item .slider-content__title br {
  display: none;
}
.slider.-style-4 .slider__carousel .slider-dots {
  position: absolute;
  bottom: 2.375em;
  left: 0;
  right: 0;
  z-index: 5;
  text-align: left;
}
.slider.-style-5 {
  padding: 17.5em 0;
}
.slider.-style-5 .slider-background {
  animation: scaleIn 5s forwards;
}
.slider.-style-5 .slider-content {
  max-width: 37.5em;
  position: relative;
  z-index: 1;
}
.slider.-style-5 .slider-content__subtitle {
  color: #f26460;
}
.slider.-style-5 .slider-content__title {
  color: #111;
}
.slider.-style-5 .slider-content__description {
  font-size: 0.9375em;
  margin-bottom: 3em;
  color: #111;
}
.slider.-style-7 .slider__carousel__item .slider-content__title {
  font-family: "Braga";
  font-weight: 400;
  padding-left: 0.25em;
  padding-right: 0.25em;
  line-height: 1.83333em;
}
.slider.-style-7 .slider__carousel__item.slider-2 {
  text-align: center;
}

@keyframes scaleIn {
  from {
    transform: scale(1.3);
  }
  to {
    transform: scale(1);
  }
}

.team-one {
  margin-bottom: 6.25rem;
}
.team-one .team-card {
  padding: 2.1875em;
  box-shadow: 0px 2px 10px 0 rgba(223, 223, 224, 0.5);
  transition: 0.2s ease-in-out;
}
.team-one .team-card:hover {
  box-shadow: 0px 6px 15px 0 rgba(223, 223, 224, 0.7);
}
.team-one .team-card:hover .team-card__avatar img {
  transform: scale(0.9);
}
.team-one .team-card__avatar {
  margin-bottom: 1.875em;
}
.team-one .team-card__avatar img {
  margin: 0 auto;
  max-width: 100%;
  transition: 0.2s ease-in-out;
}
.team-one .team-card__content {
  text-align: center;
}
.team-one .team-card__content h3 {
  color: #111;
  font-size: 1.125em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.55556em;
}
.team-one .team-card__content h5 {
  color: #f26460;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  margin-bottom: 1.38462em;
}
.team-one .team-card__content p {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.625em;
  margin-bottom: 1.66667em;
}
.team-one .slick-slider {
  margin: 0 -0.9375em;
}
.team-one .slick-slider .slider__item {
  outline: 0;
  padding: 0.9375em;
}

.testimonial {
  background-color: #f7f5f4;
  padding: 6.25rem 0;
  margin-bottom: 6.25rem;
}
.testimonial .slick-slide {
  outline: 0;
}
@media only screen and (max-width: 768px) {
  .testimonial .slide-nav {
    margin-bottom: 3.125em;
  }
}
.testimonial .slide-nav__item {
  padding: 0.3125em;
  cursor: pointer;
  outline: 0;
}
.testimonial .slide-nav__item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.2s ease-in-out;
}
.testimonial .slide-nav__item:hover img {
  transform: scale(1.08);
}
.testimonial .slide-nav__item.active img {
  transform: scale(1.08);
}
.testimonial .slide-for {
  padding-left: 1.875em;
}
@media only screen and (max-width: 768px) {
  .testimonial .slide-for {
    padding-left: 0;
    padding-right: 0;
  }
}
.testimonial .slide-for__item {
  margin-bottom: 3.125em;
  outline: 0;
}
.testimonial .slide-for__item__header {
  display: flex;
  align-items: center;
  margin-bottom: 1.875em;
}
.testimonial .slide-for__item__header .quote-icon {
  color: #fff;
  font-size: 0.9375em;
  height: 3.33333em;
  width: 3.33333em;
  background-color: #f26460;
  border-radius: 999px;
  text-align: center;
  line-height: 3.33333em;
  margin-right: 1.33333em;
}
.testimonial .slide-for__item__header .customer__info h3 {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.4em;
}
.testimonial .slide-for__item__header .customer__info h5 {
  color: #111;
  font-size: 0.8125em;
  font-weight: 400;
  line-height: 1;
}
.testimonial .slide-for__item__header .rate {
  margin-left: auto;
}
.testimonial .slide-for__item__content {
  color: #111;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.75em;
  color: #444;
}
.testimonial .testimonial-one__slider-control a {
  color: #111;
  font-size: 0.8125em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
}
.testimonial .testimonial-one__slider-control a:hover {
  color: #f26460;
}
.testimonial .testimonial-one__slider-control a:first-child {
  margin-right: 3.07692em;
}
.testimonial .testimonial-one__slider-control a:first-child i {
  margin-right: 0.76923em;
}
.testimonial .testimonial-one__slider-control a:last-child i {
  margin-left: 0.76923em;
}
.testimonial .slider-dots {
  list-style: none;
}
.testimonial .slider-dots li {
  display: inline-block;
  margin: 0 0.3125em;
}
.testimonial .slider-dots li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.testimonial .slider-dots li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.testimonial .slider-dots li.slick-active .slider-dot {
  background-color: rgba(17, 17, 17, 0.5);
}
.testimonial .slider-dots li .slider-dot {
  height: 0.1875em;
  width: 1.875em;
  background-color: rgba(17, 17, 17, 0.2);
}
.testimonial.-style-2,
.testimonial.menu.-style-6 {
  margin-bottom: 0;
}
.testimonial.-style-2 .slide-for,
.testimonial.menu.-style-6 .slide-for {
  padding-left: 0;
  padding-right: 1.875em;
}
@media only screen and (max-width: 768px) {
  .testimonial.-style-2 .slide-for,
  .testimonial.menu.-style-6 .slide-for {
    margin-bottom: 3.125em;
  }
}
@media only screen and (max-width: 768px) {
  .testimonial.-style-2 .slide-nav,
  .testimonial.menu.-style-6 .slide-nav {
    margin-bottom: 0;
  }
}

.testimonial-three {
  padding: 4.375em 0 14.375em;
  background-image: url("../images/testimonial/TestimonialThree/bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: inherit;
  z-index: 0;
}
.testimonial-three .slick-arrow {
  color: #888;
  font-size: 3.125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  padding: 0;
}
.testimonial-three .slick-arrow:hover {
  color: #f26460;
}
.testimonial-three .slick-arrow.slick-next {
  right: 0em;
}
.testimonial-three .slick-arrow.slick-prev {
  left: 0em;
}
@media only screen and (max-width: 768px) {
  .testimonial-three .slick-arrow.slick-next {
    right: 0.3em;
  }
  .testimonial-three .slick-arrow.slick-prev {
    left: 0.3em;
  }
}
.testimonial-three__item {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.testimonial-three__item p {
  margin-bottom: 2.5em;
  color: #111;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
}
.testimonial-three__item p i {
  font-size: 1.5em;
  color: #f26460;
  margin-right: 0.20833em;
}
.testimonial-three__item h3 {
  color: #111;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.70833em;
  margin-bottom: 1.25em;
}
.testimonial-three__item .author-info h5 {
  color: #111;
  font-size: 1em;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0.5em;
}
.testimonial-three__item .author-info span {
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1;
}

.top-nav {
  background-color: #111;
  padding: 0.75em 0;
}
@media only screen and (max-width: 768px) {
  .top-nav {
    display: none;
  }
}
.top-nav__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-nav__wrapper .top-nav-promo {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.top-nav__wrapper .top-nav-selections {
  display: flex;
  align-items: center;
}
.top-nav__wrapper .top-nav-selections__item select {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: normal;
  margin-right: 2.30769em;
}
.top-nav__wrapper .top-nav-selections__item a {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.top-nav__wrapper .top-nav-selections__item a:hover {
  color: #e1e1e1;
}
@media only screen and (max-width: 992px) {
  .top-nav.-style-2 .top-nav__wrapper-promo,
  .top-nav.menu.-style-6 .top-nav__wrapper-promo {
    display: none;
  }
}
.top-nav.-style-2 .top-nav__wrapper__quick-links ul li,
.top-nav.menu.-style-6 .top-nav__wrapper__quick-links ul li {
  display: inline-block;
}
.top-nav.-style-2 .top-nav__wrapper__quick-links ul li a,
.top-nav.menu.-style-6 .top-nav__wrapper__quick-links ul li a {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.top-nav.-style-2 .top-nav__wrapper__quick-links ul li a:hover,
.top-nav.menu.-style-6 .top-nav__wrapper__quick-links ul li a:hover {
  color: #e1e1e1;
}
.top-nav.-style-2 .top-nav__wrapper__quick-links ul li::after,
.top-nav.menu.-style-6 .top-nav__wrapper__quick-links ul li::after {
  content: "|";
  margin: 0 0.76923em;
  color: #fff;
}
.top-nav.-style-2 .top-nav__wrapper__quick-links ul li:last-child::after,
.top-nav.menu.-style-6 .top-nav__wrapper__quick-links ul li:last-child::after {
  display: none;
}

.about .testimonial {
  padding: 0;
  background-color: transparent;
}

.blog {
  margin-bottom: 6.25rem;
}
.blog .post-card-featured {
  margin-bottom: 3.75em;
}
.blog .post-card-two {
  margin-bottom: 1.875em;
}
.blog-sidebar {
  margin-bottom: 4.375rem;
}
.blog .search-result {
  color: #111;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin-bottom: 3.125em;
}
.blog .search-result span {
  font-weight: 600;
}

.cart {
  margin-bottom: 6.25rem;
}
.cart__table {
  margin-bottom: 4.375rem;
}
.cart__table__wrapper {
  overflow-y: auto;
  white-space: nowrap;
}
.cart__table__wrapper table {
  width: 100%;
}
.cart__table__wrapper table thead tr th {
  border-bottom: 1px solid #e1e1e1;
  text-align: left;
  color: #111;
  font-size: 0.9375em;
  font-weight: 700;
  line-height: 1;
  padding: 0 2.1875em 2.5em 0.9375em;
}
.cart__table__wrapper table thead tr th:first-child {
  padding-left: 0;
}
.cart__table__wrapper table thead tr th:last-child {
  padding-right: 0;
}
.cart__table__wrapper table tbody tr td {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  padding: 2.1875em 0.9375em;
}
.cart__table__wrapper table tbody tr td:first-child {
  padding-left: 0;
}
.cart__table__wrapper table tbody tr td:first-child .cart-product {
  display: flex;
  align-items: center;
}
.cart__table__wrapper table tbody tr td:first-child .cart-product__image {
  flex: none;
  margin-right: 1.875em;
}
.cart__table__wrapper table tbody tr td:first-child .cart-product__image img {
  height: 6.25em;
  width: 6.25em;
  object-fit: cover;
}
.cart__table__wrapper table tbody tr td:first-child .cart-product__content h5 {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  text-transform: capitalize;
  margin-bottom: 0.625em;
}
.cart__table__wrapper table tbody tr td:first-child .cart-product__content a {
  color: #111;
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.cart__table__wrapper
  table
  tbody
  tr
  td:first-child
  .cart-product__content
  a:hover {
  color: #f26460;
}
.cart__table__wrapper table tbody tr td:last-child {
  padding-right: 0;
  text-align: right;
}
.cart__table__wrapper table tbody tr td:last-child a {
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1.33333em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid #888;
  height: 1.33333em;
  width: 1.33333em;
  text-align: center;
  border-radius: 999px;
  margin-left: auto;
  display: inline-block;
}
.cart__table__wrapper table tbody tr td:last-child a:hover {
  color: #f26460;
}
.cart__table__wrapper table tbody tr td:last-child a:hover {
  border-color: #f26460;
}
.cart__table__footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cart__table__footer a {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.cart__table__footer a:hover {
  color: #f26460;
}
.cart__table__footer a i {
  margin-right: 0.66667em;
  color: #f26460;
}
.cart__total__discount {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #f7f5f4;
  padding: 3.125em;
}
.cart__total__discount p {
  max-width: 15.625em;
  margin-right: 3.75em;
  color: #888;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
}
@media only screen and (max-width: 768px) {
  .cart__total__discount p {
    max-width: 100%;
    margin-right: 0;
  }
}
.cart__total__discount .input-validator {
  flex-grow: 1;
}
.cart__total__discount .input-validator form {
  display: flex;
}
.cart__total__discount .input-validator form input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 2.8125em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input:focus {
  outline: 0;
}
.cart__total__discount .input-validator form input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
  line-height: -moz-block-height;
}
.cart__total__discount .input-validator form input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
  line-height: -moz-block-height;
}
.cart__total__discount .input-validator form input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.cart__total__discount .input-validator form .btn,
.cart__total__discount
  .input-validator
  form
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .cart__total__discount
  .input-validator
  form
  button,
.cart__total__discount .input-validator form .paginator li button,
.paginator li .cart__total__discount .input-validator form button,
.cart__total__discount .input-validator form .category-two .slick-arrow,
.category-two .cart__total__discount .input-validator form .slick-arrow,
.cart__total__discount
  .input-validator
  form
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .cart__total__discount
  .input-validator
  form
  button,
.cart__total__discount
  .input-validator
  form
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .cart__total__discount
  .input-validator
  form
  button,
.cart__total__discount
  .input-validator
  form
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .cart__total__discount
  .input-validator
  form
  .slick-arrow,
.cart__total__discount
  .input-validator
  form
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .cart__total__discount
  .input-validator
  form
  .slick-arrow,
.cart__total__discount
  .input-validator
  form
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .cart__total__discount
  .input-validator
  form
  .slick-arrow,
.cart__total__discount .input-validator form .testimonial-three .slick-arrow,
.testimonial-three .cart__total__discount .input-validator form .slick-arrow {
  padding-top: 0;
  padding-bottom: 0;
  height: 3.21429em;
  line-height: 3.21429em;
}
.cart__total__content {
  background-color: #f7f5f4;
  padding: 3.125em;
}
.cart__total__content h3 {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.75em;
}
.cart__total__content table {
  width: 100%;
  margin-bottom: 0.9375em;
}
.cart__total__content table tr td,
.cart__total__content table tr th {
  padding-bottom: 1em;
}
.cart__total__content table tr th {
  text-align: left;
  color: #111;
  font-size: 0.9375em;
  font-weight: 500;
  line-height: 1;
}
.cart__total__content table tr td {
  text-align: right;
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
}
.cart__total__content table tr td.final-price {
  color: #f26460;
}
.cart__total__content .btn,
.cart__total__content
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .cart__total__content
  button,
.cart__total__content .paginator li button,
.paginator li .cart__total__content button,
.cart__total__content .category-two .slick-arrow,
.category-two .cart__total__content .slick-arrow,
.cart__total__content
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .cart__total__content
  button,
.cart__total__content
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .cart__total__content
  button,
.cart__total__content .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .cart__total__content .slick-arrow,
.cart__total__content .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .cart__total__content .slick-arrow,
.cart__total__content .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .cart__total__content .slick-arrow,
.cart__total__content .testimonial-three .slick-arrow,
.testimonial-three .cart__total__content .slick-arrow {
  padding: 0;
  height: 3.46154em;
  line-height: 3.46154em;
  width: 100%;
}
.cart__empty {
  text-align: center;
  padding: 1.875em 0;
}
.cart__empty h3 {
  color: #111;
  font-size: 1.875em;
  font-weight: normal;
  line-height: 1;
  margin-bottom: 1em;
}

.checkout {
  margin-bottom: 6.25rem;
}
.checkout .checkout-title {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.5em;
}
.checkout .checkbox-label {
  display: block;
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
}
.checkout .checkbox-label input {
  margin-right: 0.9375em;
}
@media only screen and (max-width: 992px) {
  .checkout__form {
    margin-bottom: 4.375em;
  }
}
.checkout__form .input-validator {
  margin-bottom: 1.875em;
}
.checkout__form .input-validator label {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1;
}
.checkout__form .input-validator label span {
  color: #f26460;
}
.checkout__form .input-validator label input {
  margin-top: 0.9375em;
}
.checkout__form .input-validator input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.21429em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input:focus {
  outline: 0;
}
.checkout__form .input-validator input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.checkout__form .input-validator input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.checkout__form .input-validator input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form .input-validator input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__form__contact {
  margin-bottom: 2.8125em;
}
.checkout__form__contact__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1.875em;
}
.checkout__form__contact__title .checkout-title {
  margin-bottom: 0;
}
@media only screen and (max-width: 768px) {
  .checkout__form__contact__title .checkout-title {
    margin-bottom: 0.9375em;
  }
}
.checkout__form__contact__title p {
  color: #111;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1;
}
.checkout__form__contact__title p a {
  color: #f26460;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 0.66667em;
}
.checkout__form__contact__title p a:hover {
  color: #f26460;
}
.checkout__total {
  padding: 1.875em;
  background-color: #f7f5f4;
}
.checkout__total .btn,
.checkout__total
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .checkout__total
  button,
.checkout__total .paginator li button,
.paginator li .checkout__total button,
.checkout__total .category-two .slick-arrow,
.category-two .checkout__total .slick-arrow,
.checkout__total
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .checkout__total
  button,
.checkout__total .footer-two__content .footer-two-newsletter .mc-form button,
.footer-two__content .footer-two-newsletter .mc-form .checkout__total button,
.checkout__total .product-detail__slide-two__small .slick-arrow,
.product-detail__slide-two__small .checkout__total .slick-arrow,
.checkout__total .product-tab-slide__content .slick-arrow,
.product-tab-slide__content .checkout__total .slick-arrow,
.checkout__total .slider.-style-3 .slider__carousel .slick-arrow,
.slider.-style-3 .slider__carousel .checkout__total .slick-arrow,
.checkout__total .testimonial-three .slick-arrow,
.testimonial-three .checkout__total .slick-arrow {
  padding-top: 0;
  padding-bottom: 0;
  height: 3.21429em;
  line-height: 3.21429em;
  width: 100%;
}
.checkout__total__coupon {
  margin-bottom: 2.5em;
}
.checkout__total__coupon h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.5625em;
}
.checkout__total__coupon .input-validator {
  margin-bottom: 1.07143em;
}
.checkout__total__coupon .input-validator input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.21429em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input:focus {
  outline: 0;
}
.checkout__total__coupon .input-validator input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.checkout__total__coupon .input-validator input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.checkout__total__coupon .input-validator input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__coupon .input-validator input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.checkout__total__price {
  margin-bottom: 1.875em;
}
.checkout__total__price h5 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.5625em;
}
.checkout__total__price table {
  width: 100%;
  margin-bottom: 1.875em;
}
.checkout__total__price table tr:last-child td {
  padding-bottom: 0;
}
.checkout__total__price table tr td {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.71429em;
  padding-bottom: 0.71429em;
}
.checkout__total__price table tr td span {
  font-weight: 700;
}
.checkout__total__price table tr td:last-child {
  text-align: right;
  font-weight: 700;
}
.checkout__total__price__total-count {
  padding: 1.875em 0;
  border: 1px solid #e1e1e1;
  border-width: 1px 0;
  margin-bottom: 1.875em;
}
.checkout__total__price__total-count table {
  margin-bottom: 0;
}
.checkout__total__price__total-count table tr td {
  font-weight: 700;
}
.checkout__total__price__payment .checkbox-label:first-child {
  margin-bottom: 0.9375em;
}

.contact {
  margin-bottom: 6.25rem;
}
.contact-title {
  color: #111;
  font-size: 1.875em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 2.5em;
}
.contact-info__item {
  display: flex;
  margin-bottom: 1.875em;
}
.contact-info__item__icon {
  width: 1.875em;
  color: #f26460;
  font-size: 1.125em;
  font-weight: normal;
  line-height: 1;
}
.contact-info__item__detail h3 {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.53333em;
}
.contact-info__item__detail p {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1.85714em;
}
.contact-form form .input-validator {
  margin-bottom: 1.42857em;
}
.contact-form form .input-validator input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 3.21429em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input:focus {
  outline: 0;
}
.contact-form form .input-validator input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.contact-form form .input-validator input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
  line-height: -moz-block-height;
}
.contact-form form .input-validator input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 3.21429em;
}
.contact-form form .input-validator textarea {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: auto;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  resize: none;
}
.contact-form form .input-validator textarea:focus {
  outline: 0;
}
.contact-form form .input-validator textarea:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-form form .input-validator textarea::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-form form .input-validator textarea:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.contact-form form .input-validator textarea::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.contact-form form .input-validator textarea:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-form form .input-validator textarea::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-form form .input-validator textarea:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-form form .input-validator textarea::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-form form .input-validator textarea:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-form form .input-validator textarea::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.contact-map {
  margin-top: 3.125em;
}

.post {
  margin-bottom: 6.25rem;
}
.post__cover {
  max-height: 37.5em;
  overflow: hidden;
}
.post__cover:hover img {
  transform: scale(1.1) rotate(1deg);
}
.post__cover img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.post__body .blog-sidebar {
  padding-top: 6.25em;
}
@media only screen and (max-width: 768px) {
  .post__body .blog-sidebar {
    margin-bottom: 5em;
  }
}
.post__body .post-content {
  background-color: #fff;
  margin-top: -3.125em;
  padding: 3.125em 4.375em 0;
}
@media only screen and (max-width: 768px) {
  .post__body .post-content {
    padding-left: 0;
    padding-right: 0;
  }
}
.post__body .post-content__header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.8125em;
}
.post__body .post-content__header__date {
  background-color: #f26460;
  display: inline-block;
  text-align: center;
  padding: 0.625em;
  margin-right: 2.5em;
}
.post__body .post-content__header__date h5 {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.3125em;
}
.post__body .post-content__header__date p {
  color: #fff;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
}
.post__body .post-content__header__content .post_content__info {
  margin-bottom: 0.9375em;
}
.post__body .post-content__header__content .post_content__info p {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
}
.post__body .post-content__header__content .post_content__info p span {
  color: #111;
}
.post__body .post-content__header__content .post_content__info p:after {
  content: "/";
  margin: 0 0.625em;
}
.post__body .post-content__header__content .post_content__info a {
  color: #f26460;
  font-size: 0.8125em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.post__body .post-content__header__content .post_content__info a:hover {
  color: #f26460;
}
.post__body .post-content__header__content h2 {
  color: #111;
  font-size: 1.875em;
  font-weight: 600;
  line-height: 1.3em;
}
.post__body .post-content__body {
  margin-bottom: 4.0625em;
}
.post__body .post-content__body .post-image {
  margin-bottom: 2.5em;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.post__body .post-content__body .post-paragraph {
  color: #444;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.8125em;
  margin-bottom: 1.37931em;
}
.post__body .post-content__body .post-paragraph span {
  font-weight: 600;
  color: #111;
}
.post__body .post-content__body .post-quote {
  border: 1px solid rgba(242, 100, 96, 0.5);
  padding: 2.5em 3.125em;
  margin-bottom: 2.5em;
}
.post__body .post-content__body .post-quote h5 {
  color: #111;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.8em;
  margin-bottom: 1.0625em;
}
.post__body .post-content__body .post-quote__author {
  display: flex;
  align-items: center;
}
.post__body .post-content__body .post-quote__author i {
  font-size: 1.5em;
  margin-right: 0.9375em;
  color: #f26460;
}
.post__body .post-content__body .post-quote__author p {
  color: #888;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
}
.post__body .post-content__footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4.375em;
}
.post__body .post-content__footer span {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  margin-right: 2em;
}
@media only screen and (max-width: 768px) {
  .post__body .post-content__footer__tags {
    margin-bottom: 2.14286em;
  }
}
.post__body .post-content__footer__tags .btn,
.post__body
  .post-content__footer__tags
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .post__body
  .post-content__footer__tags
  button,
.post__body .post-content__footer__tags .paginator li button,
.paginator li .post__body .post-content__footer__tags button,
.post__body .post-content__footer__tags .category-two .slick-arrow,
.category-two .post__body .post-content__footer__tags .slick-arrow,
.post__body
  .post-content__footer__tags
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .post__body
  .post-content__footer__tags
  button,
.post__body
  .post-content__footer__tags
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .post__body
  .post-content__footer__tags
  button,
.post__body
  .post-content__footer__tags
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .post__body
  .post-content__footer__tags
  .slick-arrow,
.post__body
  .post-content__footer__tags
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .post__body
  .post-content__footer__tags
  .slick-arrow,
.post__body
  .post-content__footer__tags
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .post__body
  .post-content__footer__tags
  .slick-arrow,
.post__body .post-content__footer__tags .testimonial-three .slick-arrow,
.testimonial-three .post__body .post-content__footer__tags .slick-arrow {
  padding: 0.375em 0.9375em;
  font-size: 0.875em;
  font-weight: 400;
  text-transform: none;
  margin-right: 0.71429em;
}
.post__body .post-content__footer__share {
  display: flex;
  align-items: center;
}
.post__body .post-content__actions__change {
  background-color: #f7f5f4;
  padding: 0.9375em 1.875em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.375em;
}
.post__body .post-content__actions__change .change-post-btn {
  color: #111;
  font-size: 0.8125em;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.post__body .post-content__actions__change .change-post-btn:hover {
  color: #f26460;
}
.post__body .post-content__actions__change .change-post-btn.-prev i {
  margin-right: 0.76923em;
}
.post__body .post-content__actions__change .change-post-btn.-next i {
  margin-left: 0.76923em;
}
.post__body .post-content__actions__comment h5 {
  color: #111;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.66667em;
}
.post__body .post-content__actions__comment form {
  text-align: center;
}
.post__body .post-content__actions__comment form .input-validator {
  margin-bottom: 1.25em;
}
.post__body .post-content__actions__comment form .input-validator input {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: 2.8125em;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body .post-content__actions__comment form .input-validator input:focus {
  outline: 0;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
  line-height: -moz-block-height;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
  line-height: -moz-block-height;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  input::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: 2.8125em;
}
.post__body .post-content__actions__comment form .input-validator textarea {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  height: auto;
  width: 100%;
  transition: 0.2s ease-in-out;
  -webkit-appearance: none;
  padding: 1.25rem;
  border-radius: 0px;
  color: #111;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  resize: none;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea:focus {
  outline: 0;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea:-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea::-webkit-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea:-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea::-moz-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
  line-height: -moz-block-height;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea:-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea::-ms-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea:-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea::-o-input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea:input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}
.post__body
  .post-content__actions__comment
  form
  .input-validator
  textarea::input-placeholder {
  color: #888;
  font-size: 0.8125rem;
  font-weight: normal;
  line-height: auto;
}

.services__item {
  margin-bottom: 6.25rem;
}
.services__item.-reverse .services__item__image__background {
  right: -7.5em;
  left: auto;
  transform: rotateY(180deg);
}
.services__item.-reverse
  .services__item__image__detail
  .image__item:first-child {
  right: auto;
  left: 0;
}
.services__item.-reverse
  .services__item__image__detail
  .image__item:last-child {
  left: auto;
  right: 0;
}
.services__item.-reverse .services__item__content {
  padding-left: 0;
  padding-right: 3.75em;
  text-align: right;
}
.services__item__image {
  position: relative;
  height: 540px;
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .services__item__image {
    margin-bottom: 3.57143em;
  }
}
.services__item__image__background {
  position: absolute;
  top: 0;
  left: -7.5em;
}
.services__item__image__background img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
@media only screen and (max-width: 992px) {
  .services__item__image__background {
    max-width: 100%;
    left: 0;
  }
}
.services__item__image__detail {
  position: relative;
  width: 100%;
  height: 100%;
}
.services__item__image__detail .image__item {
  position: absolute;
}
.services__item__image__detail .image__item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.services__item__image__detail .image__item:first-child {
  top: 0;
  right: 0;
}
@media only screen and (max-width: 768px) {
  .services__item__image__detail .image__item:first-child {
    max-width: 80%;
  }
}
.services__item__image__detail .image__item:last-child {
  bottom: 0;
  left: 0;
}
@media only screen and (max-width: 768px) {
  .services__item__image__detail .image__item:last-child {
    max-width: 80%;
  }
}
.services__item__content {
  padding-left: 3.75em;
}
@media only screen and (max-width: 768px) {
  .services__item__content {
    padding-left: 0;
    padding-right: 0;
  }
}
.services__item__content .services__item__order {
  margin-bottom: 1.875em;
}
.services__item__content .services__item__order h3 {
  color: #f26460;
  font-size: 1.875em;
  font-weight: 700;
  line-height: 1;
}
.services__item__content .services__item__title {
  color: #111;
  font-size: 2.625em;
  font-weight: 600;
  line-height: 1.42857em;
  margin-bottom: 0.47619em;
}
.services__item__content .services__item__description {
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1.8em;
  margin-bottom: 2em;
}
.services__item__content ul {
  list-style: none;
  margin-bottom: 1.875em;
}
.services__item__content ul li {
  margin-bottom: 0.9375em;
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  line-height: 1;
}
.services__item__content ul li i {
  color: #f26460;
}

.shop {
  margin-bottom: 6.25rem;
}
@media only screen and (max-width: 992px) {
  .shop-sidebar {
    font-size: 16px;
    margin-bottom: 3.33333em;
  }
}
.shop-sidebar__section {
  margin-bottom: 2.1875em;
}
.shop-sidebar__section.-categories ul {
  list-style: none;
}
.shop-sidebar__section.-categories ul > li {
  margin-bottom: 0.625em;
}
.shop-sidebar__section.-categories ul > li.active a:after {
  left: 0;
}
.shop-sidebar__section.-categories ul > li:last-child {
  margin-bottom: 0;
}
.shop-sidebar__section.-categories ul > li a {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  padding: 8px 0;
  overflow: hidden;
  display: inline-block;
}
.shop-sidebar__section.-categories ul > li a:hover {
  color: #111;
}
.shop-sidebar__section.-categories ul > li a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -100%;
  background-color: #f2646061;
  height: 0.5em;
  width: 100%;
  z-index: 0;
  transition: 0.2s ease-in-out;
}
.shop-sidebar__section.-categories ul > li a:hover:after {
  left: 0;
}
.shop-sidebar__section.-refine .shop-sidebar__section__item {
  margin-bottom: 2.1875em;
}
.shop-sidebar__section.-refine .shop-sidebar__section__item h5 {
  color: #111;
  font-size: 1.0625em;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.47059em;
}
.shop-sidebar__section.-refine .shop-sidebar__section__item ul {
  list-style: none;
}
.shop-sidebar__section.-refine .shop-sidebar__section__item ul li {
  margin-bottom: 0.625em;
}
.shop-sidebar__section.-refine .shop-sidebar__section__item ul li:last-child {
  margin-bottom: 0;
}
.shop-sidebar__section.-refine .shop-sidebar__section__item ul li label {
  color: #111;
  font-size: 0.875em;
  font-weight: normal;
  line-height: 1;
  text-transform: capitalize;
  cursor: pointer;
}
.shop-sidebar__section.-refine .shop-sidebar__section__item ul li label input {
  margin-right: 1.07143em;
}
.shop-sidebar__section__banner img {
  max-width: 15.625em;
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.shop-products .five-col {
  padding: 0 1rem;
}
@media only screen and (max-width: 1400px) {
  .shop-products .five-col {
    flex: 1 1 25%;
    max-width: 25%;
  }
}
@media only screen and (max-width: 992px) {
  .shop-products .five-col {
    flex: 1 1 33.33333%;
    max-width: 33.33333%;
    padding: 0 0.25rem;
  }
}
@media only screen and (max-width: 768px) {
  .shop-products .five-col {
    flex: 1 1 50%;
    max-width: 50%;
  }
}
.shop-products .product,
.shop-products .product-list {
  margin-bottom: 1.875em;
}
.shop-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1.25em;
}
.shop-header__view {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .shop-header__view {
    margin-bottom: 1.25em;
  }
}
.shop-header__view__icon {
  margin-right: 0.9375em;
}
.shop-header__view__icon a {
  color: #888;
  font-size: 1.25em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-right: 0.5em;
}
.shop-header__view__icon a:hover {
  color: #f26460;
}
.shop-header__view__icon a.active {
  color: #111;
}
.shop-header__view__icon a:last-child {
  margin-right: 0;
}
.shop-header select {
  padding: 0.8125em 2.8125em 0.8125em 0.8125em;
  background-position: calc(100% - 15px) center;
  background-color: #f5f5f5;
  border: 0;
}
@media only screen and (max-width: 1400px) {
  .shop.-five-col .shop-products__grid .w-100 {
    display: none;
  }
}

.wishlist {
  margin-bottom: 6.25rem;
}
.wishlist__empty {
  text-align: center;
  padding: 4.375em 0;
}
.wishlist__empty h3 {
  color: #111;
  font-size: 1.875em;
  font-weight: normal;
  line-height: 1;
}
.wishlist__table__wrapper {
  overflow-y: auto;
  white-space: nowrap;
}
.wishlist__table__wrapper table {
  width: 100%;
}
.wishlist__table__wrapper table thead tr th {
  border-bottom: 1px solid #e1e1e1;
  text-align: left;
  color: #111;
  font-size: 0.9375em;
  font-weight: 700;
  line-height: 1;
  padding: 0 2.1875em 2.5em 0.9375em;
}
.wishlist__table__wrapper table thead tr th:first-child {
  padding-left: 0;
}
.wishlist__table__wrapper table thead tr th:last-child {
  padding-right: 0;
}
.wishlist__table__wrapper table tbody tr:last-child td {
  border-bottom: 0;
}
.wishlist__table__wrapper table tbody tr td {
  color: #111;
  font-size: 0.9375em;
  font-weight: 600;
  line-height: 1;
  padding: 2.1875em 0.9375em;
  border-bottom: 1px solid #e1e1e1;
}
.wishlist__table__wrapper table tbody tr td:first-child {
  padding-left: 0;
}
.wishlist__table__wrapper table tbody tr td:first-child .wishlist-product {
  display: flex;
  align-items: center;
}
.wishlist__table__wrapper
  table
  tbody
  tr
  td:first-child
  .wishlist-product__image {
  flex: none;
  margin-right: 1.875em;
}
.wishlist__table__wrapper
  table
  tbody
  tr
  td:first-child
  .wishlist-product__image
  img {
  height: 6.25em;
  width: 6.25em;
  object-fit: cover;
}
.wishlist__table__wrapper
  table
  tbody
  tr
  td:first-child
  .wishlist-product__content
  h5 {
  color: #888;
  font-size: 0.8125em;
  font-weight: normal;
  line-height: 1;
  text-transform: capitalize;
  margin-bottom: 0.625em;
}
.wishlist__table__wrapper
  table
  tbody
  tr
  td:first-child
  .wishlist-product__content
  a {
  color: #111;
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.wishlist__table__wrapper
  table
  tbody
  tr
  td:first-child
  .wishlist-product__content
  a:hover {
  color: #f26460;
}
.wishlist__table__wrapper table tbody tr td:last-child {
  padding-right: 0;
  text-align: right;
}
.wishlist__table__wrapper table tbody tr td:last-child .btn,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  button,
.blog-sidebar__section.-newsletter
  .blog-sidebar-newsletter
  .mc-form
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  button,
.wishlist__table__wrapper table tbody tr td:last-child .paginator li button,
.paginator li .wishlist__table__wrapper table tbody tr td:last-child button,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .category-two
  .slick-arrow,
.category-two
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .slick-arrow,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  button,
.footer-one__header__newsletter
  .footer-one-newsletter
  .mc-form
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  button,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .footer-two__content
  .footer-two-newsletter
  .mc-form
  button,
.footer-two__content
  .footer-two-newsletter
  .mc-form
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  button,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .product-detail__slide-two__small
  .slick-arrow,
.product-detail__slide-two__small
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .slick-arrow,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .product-tab-slide__content
  .slick-arrow,
.product-tab-slide__content
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .slick-arrow,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .slider.-style-3
  .slider__carousel
  .slick-arrow,
.slider.-style-3
  .slider__carousel
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .slick-arrow,
.wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .testimonial-three
  .slick-arrow,
.testimonial-three
  .wishlist__table__wrapper
  table
  tbody
  tr
  td:last-child
  .slick-arrow {
  margin-right: 2.14286em;
}
.wishlist__table__wrapper table tbody tr td:last-child .remove-btn {
  color: #888;
  font-size: 0.9375em;
  font-weight: normal;
  text-decoration: none;
  line-height: 1.33333em;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid #888;
  height: 1.33333em;
  width: 1.33333em;
  text-align: center;
  border-radius: 999px;
  margin-left: auto;
  display: inline-block;
}
.wishlist__table__wrapper table tbody tr td:last-child .remove-btn:hover {
  color: #f26460;
}
.wishlist__table__wrapper table tbody tr td:last-child .remove-btn:hover {
  border-color: #f26460;
}
a.close-modal {
  position: absolute;
  top: 12.5px;
  right: 5px;
  display: block;
  width: 30px;
  height: 30px;
  text-indent: -9999px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==);
}
.menu {
  position: sticky;
  top: 0%;
  z-index: 12;
}
.custom-file-input {
  margin-top: 1.5em;
  position: relative;
  display: inline-block;
}

.custom-file-input input[type="file"] {
  position: absolute;
  left: -9999px; /* Hide the default file input */
}

.custom-file-input label {
  background-color: green;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

/* Optional: Add hover and focus styles */
.custom-file-input label:hover,
.custom-file-input label:focus {
  background-color: green;
}
#tags ul li span{
  padding: 5px 7px;
    border-radius: 15px;
    border: 1px solid black;
}
#tags ul li{
  margin-bottom: 0.7em;
  margin-right: 10px;
}
#tags ul {
  display: flex;
  flex-wrap: wrap;
}

.shop-header__page ul{    display: flex;
  gap: 5px;

}
.shop-header__page ul li{
  border: 1px solid black;
  padding: 3px 6px;
  font-size: 15px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  gap: 1px;
}
.shop-header__page ul li button{
  background: white;
  border: 1px;
  margin-top: 1px;
  height: 18px;
  
}
#ImageForZoom{
  margin: auto;
  height: 345px;
  width: auto;
  object-fit: cover;
}
#removeSearch{
  position: absolute;
  right: -0.5%;
  font-size: 22px;
  background: red;
  height: 45px;
  color: white;
  margin: 0px;
}
.conformDelete {
  display: none;
  position: absolute;
  top: -60%;
  padding: 7px;
  border-radius: 10px;
  /* right: 6%; */
  /* margin-left: 3.5em; */
  background-color: #f2f2f2;
  /* border: 1px solid black; */
}
.conformDelete button{

  background-color: #f2f2f2;
  border: 1px;
  border-radius: 45px;
  padding: 0px;
  margin-top: 10px;
  margin-right: 5px;
}
.right img{
  height: 25px;
}
.wrong img{
  padding-top: -10px;
  height: 20px;
}
.delete-btn:hover + .conformDelete {
    display: block;
}
.conformDelete:hover{
  display: block;
}
.arrow{
  height: 13px;
  width: 14px;
  background-color: #f2f2f2;
  position: absolute;
  left: 16%;
  transform: rotate(45deg);
}
.arrow + .conformDelete {
  display: block;
}


</style>
</head>

<body>
  <div class="container mt-5">
    <div class="shop-products">
      <div class="shop-products__gird">
        <div class="row mx-n1 mx-lg-n3">
         `;

         var htmlString = "";

         products.forEach(product => {
            htmlString += `
            <div class="col-12 col-sm-6 col-lg-4 mt-3">
            <div class="product">
                <div class="product-type">
                    <h5 class="-new ">New</h5>
                </div>
                <div class="product-thumb">
                    <a class="product-thumb__image" href="/wishlist">
                        <img src=${product.Image} alt="Product image">
                        <img src=${product.Image} alt="Product image">
                    </a>
                </div>
                <div class="product-content">
                    <div class="product-content__header">
                        <div class="product-category"><h3 class="text-info">${product.Name}</h3></div>
                        <div class="rate h-50">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    <a class="product-name text-decoration-none" href="/wishlist"><h4 class="text-Dark">${product.Discription}</h4></a>
                    <div class="product-content__footer">
                        <h5 class="product-price--main"><h4 class="text-Dark mt-2 fs-4 ml-0"><b>$${product.Price}</b></h4></h5>
                    </div>
                </div>
            </div>
        </div>
            `
        });

        
      
      var html2=`  </div>
      </div>
    </div>
   
</body>
`;

  var contets = html1+htmlString+html2;
  return contets;
    }