<?php

$url=$_POST['url'];
//$url='index.php?action=show_candidates&constituency_id=345';

 $command="/home/Anshul/www/python/constituency_info_individual.py  '".$url."'";
 
 $result=shell_exec($command);
 
 echo $result;
?>
