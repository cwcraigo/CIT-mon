<?php


$server 	= 'localhost';
$user 		= 'cwcraigo_iAdmin';
$password = 'z=HsF6U{9hTg';
$db 			= 'cwcraigo_cit-mon_db';

$myConn = new mysqli($server, $user, $password, $db);

if(mysqli_connect_error()) {
  echo "<p>Could not connect to DB.</p>";
  exit;
}

$nickName = $_POST['gamertag'];
$pet = str_replace('\"', '"', $_POST['pet']);
$pet = json_decode($pet,true);

// var_dump($pet); exit;

// $nickName = $pet['nickName'];
// $nickName = 'cwcraigo';
$spec = $pet['spec'];
$level = $pet['level'];
$exp = $pet['exp'];
$coin = $pet['coin'];
$neutralURL = $pet['neutralURL'];

// gamertag, species, pet_level, total_exp, total_gold, image_url

$sql = "INSERT INTO leaderboard (gamertag, species, pet_level, total_exp, total_gold, image_url) VALUES (?, ?, ?, ?, ?, ?)";
// echo $sql; exit;

$myConn->autocommit(FALSE);

if ($stmt = $myConn->prepare($sql)) {
	$stmt->bind_param('ssiiis', $nickName, $spec, $level, $exp, $coin, $neutralURL);
  $stmt->execute();
  $rows = $stmt->affected_rows;
	$stmt->close();
} else {
  echo "<p>500 Error!</p>";
  exit;
} //end prepared stmt

if($rows != 1) {
	$myConn->rollback();
} else {
	$myConn->commit();

	$leaderboard = array();
	$leaderboard_array = array();

	$sql = "SELECT id, gamertag, species, pet_level, total_exp, total_gold, image_url, push_date FROM leaderboard";

	$stmt = $myConn->prepare($sql);

	if ($stmt) {
	  $stmt->execute();
	  $stmt->bind_result($id,$gamertag,$species,$pet_level,$total_exp,$total_gold,$image_url,$push_date);
	  while ($stmt->fetch()) {
	    $leaderboard['id']      	 = $id;
	    $leaderboard['gamertag']   = $gamertag;
	    $leaderboard['species']    = $species;
	    $leaderboard['pet_level']  = $pet_level;
	    $leaderboard['total_exp']  = $total_exp;
	    $leaderboard['total_gold'] = $total_gold;
	    $leaderboard['image_url']  = $image_url;
	    $leaderboard['push_date']  = $push_date;
	    $leaderboard_array[]       = $leaderboard;
	  }
	  $stmt->close();
	} else {
	  echo "<p>500 Error!</p>";
	  exit;
	} //end prepared stmt

	if (!empty($leaderboard_array)) {
		echo "
			<div id='tableDiv'>
				<table id='leaderboardTable'>
					<tr>
						<th id='gamertag_heading' 	>GAMERTAG</th>
						<th id='species_heading' 		>SPECIES</th>
						<th id='pet_level_heading' 	>PET_LEVEL</th>
						<th id='total_exp_heading' 	>TOTAL_EXP</th>
						<th id='total_gold_heading' >TOTAL_GOLD</th>
						<th id='image_url_heading' 	>IMAGE_URL</th>
						<th id='push_date_heading' 	>PUSH_DATE</th>
					</tr>";
		foreach ($leaderboard_array as $leaderboard) {
			echo "
						<tr>
							<td id='gamertag' 	>$leaderboard[gamertag]</td>
							<td id='species' 		>$leaderboard[species]</td>
							<td id='pet_level' 	>$leaderboard[pet_level]</td>
							<td id='total_exp' 	>$leaderboard[total_exp]</td>
							<td id='total_gold' >$leaderboard[total_gold]</td>
							<td id='image_url' 	>$leaderboard[image_url]</td>
							<td id='push_date' 	>$leaderboard[push_date]</td>
						</tr>";
			} // end for each loop
			echo "</table></div>";
	} else {
	  echo "<p>Sorry! Could not display leader board.</p>";
	}

} // end commit




// LEADERBOARD
// ----------------------
// id 				INT
// gamertag 	VARCHAR(30)
// species 		VARCHAR(30)
// pet_level 	INT
// total_exp 	INT
// total_gold INT
// image_url 	VARCHAR(60)
// push_date 	TIMESTAMP

?>