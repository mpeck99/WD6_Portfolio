<?
class mycontroller extends AppController{
    public function __construct(){
    }
    public function index(){
        $this->getView("header",array("pagename"=>"home"));
        $this->getView("body");
        $this->getView("footer");
    }
}
?>