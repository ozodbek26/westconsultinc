<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// For debugging purposes
$log_file = __DIR__ . '/mail_log_cpanel.txt'; 
function log_message($message) {
    global $log_file;
    file_put_contents($log_file, date('[Y-m-d H:i:s] ') . $message . PHP_EOL, FILE_APPEND);
}

log_message("Script started");

// Constants for email
define('SENDER_EMAIL', 'bektransgroup@gmail.com'); // Keep this as your Gmail for the "From" header
define('RECIPIENT_EMAIL', 'zafarzhon77@gmail.com');

class EmailSender {
    private $sender_email;
    private $recipient_email;
    
    public function __construct() {
        $this->sender_email = SENDER_EMAIL;
        $this->recipient_email = RECIPIENT_EMAIL;
        
        log_message("EmailSender initialized with sender: {$this->sender_email}");
    }
    
    public function send_email($email, $name, $phone) {
        log_message("Attempting to send email to {$this->recipient_email} from {$email} using PHP mail()");
        
        $subject = "Form Submission";
        $message = "Name: $name\nPhone: $phone\nEmail: $email";
        
        // Set headers - use the original sender email in the From field
        $headers = "From: {$this->sender_email}\r\n";
        $headers .= "Reply-To: $email\r\n"; // But set reply-to as the customer's email
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
        
        // Send email using PHP's mail function (uses cPanel's sendmail)
        $success = mail($this->recipient_email, $subject, $message, $headers);
        
        if ($success) {
            log_message("Email sent successfully using mail() function");
            return "Email sent successfully";
        } else {
            $error = error_get_last();
            $errorMsg = "Failed to send email using mail() function";
            if ($error) {
                $errorMsg .= ": " . $error['message'];
            }
            log_message("ERROR: " . $errorMsg);
            return $errorMsg;
        }
    }
}

// Handle CORS if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Process POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    log_message("Received POST request");
    
    // Check Content-Type
    if (!isset($_SERVER['CONTENT_TYPE']) || strpos($_SERVER['CONTENT_TYPE'], 'application/json') === false) {
        log_message("Invalid Content-Type: " . ($_SERVER['CONTENT_TYPE'] ?? 'not set'));
        http_response_code(400);
        echo json_encode(['error' => 'Invalid Content-Type, only application/json is allowed']);
        exit;
    }
    
    // Read request body
    $request_body = file_get_contents('php://input');
    log_message("Request body: " . $request_body);
    
    $input = json_decode($request_body, true);
    if (!$input) {
        log_message("Invalid JSON: " . json_last_error_msg());
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON: ' . json_last_error_msg()]);
        exit;
    }
    
    if (!isset($input['name']) || !isset($input['email']) || !isset($input['phone'])) {
        log_message("Missing parameters. Received: " . print_r($input, true));
        http_response_code(400);
        echo json_encode(['error' => 'Missing parameters']);
        exit;
    }
    
    $name = $input['name'];
    $email = $input['email'];
    $phone = $input['phone'];
    
    log_message("Processing form submission from $name <$email>");
    
    $emailSender = new EmailSender();
    $result = $emailSender->send_email($email, $name, $phone);
    
    header('Content-Type: application/json');
    echo json_encode(['status' => $result]);
    log_message("Request completed with status: $result");
} else {
    log_message("Invalid request method: {$_SERVER['REQUEST_METHOD']}");
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>