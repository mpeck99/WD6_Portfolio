<?
include 'bin/app.php';
class Router{
    public function __construct($urlPathParts,$config)
    {
        $this->App = new App($config);
        
        switch($urlPathParts[0]){
            case "navigation":
                $this->App->startApp($urlPathParts);
            break;
            case "about":
                $this->App->startApp($urlPathParts);
            break;
            case "contact":
                $this->App->startApp($urlPathParts);
            break;
            default:
            $this->App->startApp($urlPathParts);
        }
    
    
    }
}

?>