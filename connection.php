<?php
$servername = "127.0.0.1"; // Server address
$username = "root";  // Default for XAMPP
$password = "";  // Default is empty
$database = "harmon44har";  // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Set charset to utf8mb4
$conn->set_charset("utf8mb4");

// Check connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
} 
?>
