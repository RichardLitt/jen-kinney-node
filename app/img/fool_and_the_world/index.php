<?php 
  // This is necessary for ever page, it has all of the header information.
  // The title and styles can change per page - define them here. 
  $title="Fool and the World";
  $style="../css/photography.css";
  $responsive_style="../css/responsive.css";
  include('../inc/header.php');
  // This should be on every page - it's the generic navbar
  include('../inc/navbar.php');
?>

<div class="wrap">
  <div class="container photos">
    <div class="row">
      <div class="slider fatw">
        <ul id="slider-list">
          <li><img src="7%20The%20Chariot%201500%20x%201500.jpg" /></li>
          <li><img src="13%20Death%201500%20x%201500.jpg" /></li>
          <li><img src="15%20The%20Devil%201500%20x%201500.jpg" /></li>
          <li><img src="Coins%203%201800%20x%201800.jpg" /></li>
          <li><img src="16%20The%20Tower%201500%20x%201500.jpg" /></li>
          <li><img src="18%20The%20Moon%20900%20x%20900.jpg" /></li>
          <li><img src="Swords%208%201500%20x%201500.jpg" /></li>
          <li><img src="20%20Judgment%201500%20x%201500.jpg " /></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container footer-nav">
    <div class="row">
      <div class="span3 offset3">
        <!-- <a href="">Installation</a> -->
        <a href="../tarot/">Tarot Deck</a>
        <!-- <a href="">About</a> -->
      </div>
      <div class="span6 title">
        <a href="../fool_and_the_world/">Fool and the World</a>
      </div>
    </div>
  </div>
</div>
   
<?php 
  $path_helper = "../";
  include('../inc/scripts.php');
  include('../inc/footer.php'); 
?>