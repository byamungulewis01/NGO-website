
<!DOCTYPE html>
<html lang="en-US" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>RIMAWARD</title>

    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicons/favicon-16x16.png">
    <link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicons/favicon.ico">
    <link rel="manifest" href="../assets/img/favicons/manifest.json">
    <meta name="msapplication-TileImage" content="../assets/img/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#ffffff">
    <script src="{{ asset('frontend/vendors/overlayscrollbars/OverlayScrollbars.min.js') }}"></script>

    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link href="{{ asset('frontend/vendors/hamburgers/hamburgers.min.css') }}

    " rel="stylesheet">
    <link href="{{ asset('frontend/vendors/loaders.css/loaders.min.css') }}

    " rel="stylesheet">
    <link href="{{ asset('frontend/assets/css/theme.min.css') }}

    " rel="stylesheet" />
    <link href="{{ asset('frontend/assets/css/user.min.css') }}

    " rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;family=Open+Sans:wght@300;400;600;700;800&amp;display=swap" rel="stylesheet">
  </head>

  <body>
    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">
      <div class="preloader" id="preloader">
        <div class="loader">
          <div class="line-scale">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="text-center py-0">
        <div class="bg-holder overlay overlay-elixir" style="background-image:url(../assets/img/background-14.jpg);"></div>
        <!--/.bg-holder-->
        <div class="container">
          <div class="row min-vh-100 align-items-center text-white">
            <div class="col" data-zanim-timeline="{}" data-zanim-trigger="scroll"><a href="../index.html" data-zanim-xs='{"delay":0}'><img src="{{ asset('frontend/assets/img/rima.png') }}" alt="logo" data-zanim-xs='{"delay":0.1}' /></a>
              <h5 class="text-uppercase mt-5 ls text-white fs-0 fs-md-1" data-zanim-xs='{"delay":0.2}'>oops! page not found</h5>
              <h1 class="fs-4 fs-sm-6 fs-md-8 text-white" data-zanim-xs='{"delay":0.3}'>404</h1>
              <div data-zanim-xs='{"delay":0.4}'><a class="btn btn-lg btn-warning rounded-pill mt-4" href="/">Take Me Home</a></div>
            </div>
          </div>
        </div><!-- end of .container-->
      </section><!-- <section> close ============================-->
      <!-- ============================================-->

    </main><!-- ===============================================-->
    <!--    End of Main Content-->
    <!-- ===============================================-->



    <!-- ===============================================-->
    <!--    JavaScripts-->
    <!-- ===============================================-->
    <script src="{{ asset('frontend/vendors/popper/popper.min.js') }}"></script>
    <script src="{{ asset('frontend/vendors/bootstrap/bootstrap.min.js') }}"></script>
    <script src="{{ asset('frontend/vendors/is/is.min.js') }}"></script>
    <script src="{{ asset('frontend/vendors/fontawesome/all.min.js') }}"></script>
    <script src="{{ asset('frontend/vendors/lodash/lodash.min.js') }}"></script>
    <script src="{{ asset('frontend/vendors/imagesloaded/imagesloaded.pkgd.min.js') }}"></script>
    <script src="{{ asset('frontend/vendors/gsap/gsap.js') }}"></script>
    <script src="{{ asset('frontend/vendors/gsap/customEase.js') }}"></script>
    <script src="{{ asset('frontend/assets/js/theme.js') }}"></script>
  </body>

</html>
