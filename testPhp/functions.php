<?php
  require('fpdf.php');
  
  class PDF extends FPDF {
      const DPI = 72;
      const MM_IN_INCH = 25.4;
      const A4_HEIGHT = 297;
      const A4_WIDTH = 210;
       //tweak these values (in pixels)
      const MAX_WIDTH = 595;
      const MAX_HEIGHT = 842;
      function pixelsToMM($val) {
          return $val * self::MM_IN_INCH / self::DPI;
      }
      function resizeToFit($imgFilename) {
          list($width, $height) = getimagesize($imgFilename);
          $widthScale = self::MAX_WIDTH / $width;
          $heightScale = self::MAX_HEIGHT / $height;
          $scale = min($widthScale, $heightScale);
          return array(
              round($this->pixelsToMM($scale * $width)),
              round($this->pixelsToMM($scale * $height))
          );
      }
      function setImage($img) {
          list($width, $height) = $this->resizeToFit($img);
           // you will probably want to swap the width/height
           // around depending on the page's orientation
          $this->Image(
              $img, 0,0,
              $width,
              $height
          );
      }

  }

  

  $i = 0; 
  $dir = '';
  if(isset($_GET['name'])){
     $dir=$_GET['name'];
     $pdf=new PDF();

     if ($handle = opendir($dir)) {
         while (($file = readdir($handle)) !== false){
             if (!in_array($file, array('.', '..')) && !is_dir($dir.$file)){
                 $i++;
                 $pdf->AddPage("P", "A4");
                 $image=ROOT.'/bookTest1/image'.$i.'.jpg';
                 $pdf->setImage($image);
             }
         }
     }

     $pdf->Output();
  }
  
  // $max=3;
  // for($i=1; $i <= $max; $i++){
  //   $pdf->AddPage("P", "A4");
  
  //   $image=ROOT.'/bookTest1/image'.$i.'.jpg';
  
  //   $pdf->setImage($image);
  // }
  



  // Image(string file [, float x [, float y [, float w [, float h [, string type [, mixed link]]]]]])
  // file: nombre del archivo de la imagen.
  // x: Abscisa de la esquina superior izquierda. Si no se especifica se utilizará la abscisa actual.
  // y: Ordenada de la esquina superior izquierda. Si no se especifica se utilizará la ordenada actual.
  // w: Ancho de la imagen en la página.
  // h: Alto de la imagen en la página.
  // type:Formato de la imagen.
  // link: identificador devuelto por el método AddLink() o la url del enlace.
?>