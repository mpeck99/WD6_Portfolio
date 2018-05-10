<?
class api extends AppController{
    public function __construct($parent){
        $this->parent=$parent;
    }
    public function showApi(){
        $this->getView("header",array("pagename"=>"api"));
        $data= $this->parent->getModel("apiModel")->googleBooks($_SESSION["book"]);
        $this->getView("api",$data);
        $this->getView("footer");
    }
    //Function to get the api model and call the search youtube function
    public function searchYoutube(){
        $this->getView("header",array("pagename"=>"api"));
        $data= $this->parent->getModel("apiModel")->searchYoutube();
        $this->getView("api",$data);
        $this->getView("footer");
    }
}
?>