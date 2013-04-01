<?php


$server 	= 'localhost';
$user 		= 'cwcraigo_iAdmin';
$password = 'z=HsF6U{9hTg';
$db 			= 'cwcraigo_cit-mon_db';

$myConn = new mysqli($server, $user, $password, $db);

if(mysqli_connect_error()) {
  echo "Could not connect to DB.";
  exit;
}

$nickName = $_POST['gamertag'];
$pet = str_replace('\"', '"', $_POST['pet']);
$pet = json_decode($pet,true);

// var_dump($pet); exit;

$spec = $pet['spec'];
$level = $pet['level'];
$exp = $pet['exp'];
$coin = $pet['coin'];
$neutralURL = $pet['neutralURL'];

$sql = "INSERT INTO leaderboard
				(gamertag, species, pet_level, total_exp, total_gold, image_url)
				VALUES (?, ?, ?, ?, ?, ?)";

$myConn->autocommit(FALSE);

if ($stmt = $myConn->prepare($sql)) {
	$stmt->bind_param('ssiiis', $nickName, $spec, $level, $exp, $coin, $neutralURL);
  $stmt->execute();
  $rows = $stmt->affected_rows;
	$stmt->close();
} else {
  echo "500 Error!";
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
	    $leaderboard['GAMERTAG']   = $gamertag;
	    $leaderboard['SPECIES']    = $species;
	    $leaderboard['PET_LEVEL']  = $pet_level;
	    $leaderboard['TOTAL_EXP']  = $total_exp;
	    $leaderboard['TOTAL_GOLD'] = $total_gold;
	    $leaderboard['PUSH_DATE']  = $push_date;
	    $leaderboard_array[]       = $leaderboard;
	  }
	  $stmt->close();
	} else {
	  echo "500 Error!";
	  exit;
	} //end prepared stmt

	if (!empty($leaderboard_array)) {
		echo json_encode($leaderboard_array);
	} else {
		echo 'FALSE';
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