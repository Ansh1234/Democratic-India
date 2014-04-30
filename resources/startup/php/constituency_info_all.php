<?php
$command2=escapeshellcmd('/home/Anshul/www/python/constituency_info_all.py');
$output2=shell_exec($command2);


echo $output2;
?>
