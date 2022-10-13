<html>
  <head>
    <meta charset="utf-8">
    <title>Vystup pacienta</title>
    <link rel="stylesheet" href="styles.css">
    <script type="text/javascript" src="features.js"></script>
  </head>
  <body>
    <h2>Obsah formularu</h2>
    <?php
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
      foreach($_POST as $name => $value)
      {
        ?>
        <p>
          <b><?php echo $name; ?></b></br>
          <?php echo $value; ?>
        </p>
        <?php
      }
    }
    else{
      ?>
      <p>
        Nevyplnili ste formular
      </p>
      <?php
    }
    ?>
    <a class="button_back" href="index.html">Naspat na formular</a>
  </body>
</html>
