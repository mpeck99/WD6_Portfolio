<?
class createUser extends AppController{
    public function __construct($parent){
        $this->parent=$parent;
    }
    public function index(){
        $this->showForm();
    }
    public function showForm(){
        $data=$this->parent->getModel("fruits")->select(
            "select * from fruit_table");
        $this->getView('header',array("pagename"=>"registration"));
        $this->getView("registration",$data);
        $this->getView("footer");
    }
    public function addUser(){
        $this->parent->getModel("users")->add("insert into users (email,password) values (:email, :password)",array(":email"=>$_REQUEST["username"],":password"=>$_REQUEST["password"]));
        header("Location:/mycontroller");
    }
}?>