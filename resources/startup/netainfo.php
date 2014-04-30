<?php
$command2=escapeshellcmd('/home/Anshul/www/python/electionsinfo.py');
$output2=shell_exec($command2);


echo $output2;
?>
