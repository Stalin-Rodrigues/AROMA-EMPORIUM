<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Basic validation
    if (!empty($email) && !empty($password)) {
        // Generate a unique ID for the user
        $id = uniqid();

        // Define the content to store (ID, Email, Password)
        $content = "ID: $id, Email: $email, Password: $password" . PHP_EOL;

        // Specify the file where data will be stored
        $file = 'users.txt';

        // Write the content to the file
        file_put_contents($file, $content, FILE_APPEND);

        // Redirect or show a success message
        echo "<script>alert('Successfully Signed in!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Please fill in all fields.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request.";
}
?>
