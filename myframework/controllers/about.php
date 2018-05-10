<?
error_reporting(E_ERROR | E_PARSE);
class about extends AppController{
    public function __construct($parent){
        $this->parent=$parent;
    }
    public function index(){
        $this->showList();
    }
    public function showList(){
        $data=$this->parent->getModel("grades")->select(
            "select * from grades");
        $this->getView('header',array("pagename"=>"grades"));
        $this->getView("body",$data);
        $this->getView("footer");
    }
    public function addForm(){
        $this->getView('header',array("pagename"=>"grades"));
        $this->showList();
        $this->getView("body",$data);
        $this->getView("footer");
    }
    public function addItem(){
        $this->parent->getModel("fruits")->add("insert into fruit_table (name) values (:name)",array(":name"=>$_REQUEST["name"]));
        header("Location:/about");
    }
    public function deleteItem(){
        $this->parent->getModel("fruits")->delete("DELETE from fruits.fruit_table where fruit_table.id=(:id)",array(":id"=>$_REQUEST["id"]));
       header("Location:/about");
    }
    public function updateForm(){
        $this->getView('header',array("pagename"=>"about"));
        $this->showList();
        $this->getView("updateFruit",$data);
        $this->getView("footer");
    }
    public function edit(){
        $this->parent->getModel("fruits")->update("UPDATE fruit_table SET name=(':newname') where id=(:id)",array(":id"=>$_REQUEST["id"],":newname"=>$_GET["newname"]));
        header("Location:/about");
    }
}?>