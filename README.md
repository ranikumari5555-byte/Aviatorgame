<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Bharat Aviator</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>✈ BHARAT AVIATOR</h1>

<div class="topbar">
Wallet ₹ <span id="wallet">1000</span>
</div>

<div class="game">

<canvas id="graph"></canvas>

<div class="multiplier" id="multi">1.00x</div>

<div class="plane" id="plane">✈</div>

</div>

<div class="controls">

<input type="number" id="bet" placeholder="Bet ₹">

<button onclick="bet()">BET</button>

<button onclick="cashout()">CASH OUT</button>

</div>

<div class="players">

<h3>Live Players</h3>

<ul id="players"></ul>

</div>

<script src="script.js"></script>

</body>
</html>
