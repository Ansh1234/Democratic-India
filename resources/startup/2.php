<?php
$command2=escapeshellcmd('/home/Anshul/www/statesandconstituencies.py');
$output2=shell_exec($command2);

$array3=json_decode($output2,true);

foreach($array2 as $arr)
{
//echo $arr['state_name'];
foreach($array3 as $arr2)
{
	$const= $arr2[$arr['state_name']];
	$const_array=json_decode($const,true);
	foreach($const_array as $arr4)
	{
//	echo "<br/>";
//	echo $arr4['constituency_name'];
	}
}

//echo "<br/><br/>";


}
echo $output2;
?>
