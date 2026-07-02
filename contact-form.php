<?php
include 'connection.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form data
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $date = trim($_POST['date']);
    $message = trim($_POST['message']);

    // Validation: Ensure fields are not empty
    if (empty($name) || empty($email) || empty($phone) || empty($date) || empty($message)) {
        echo "<script>alert('All fields are required!'); window.history.back();</script>";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format!'); window.history.back();</script>";
        exit;
    }

    // Insert data using prepared statements to prevent SQL injection
    $sql = "INSERT INTO contacts (name, email, phone, date, message) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $name, $email, $phone, $date, $message);

    if ($stmt->execute()) {
        echo "<script>alert('Message Sent Successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
