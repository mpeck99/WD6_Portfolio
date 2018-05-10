<?
class profile extends AppController{
    public function __construct(){
        if(@$_SESSION["loggedin"]&& @$_SESSION["loggedin"]==1){
           
        }
        else{
            header("Location:/mycontroller");
        }
    }
    public function index(){

        $this->getView("header",array("pagename"=>"profile"));
        echo "<div class='container'>This is a protected area</div>";
        $this->getView("profile",array("pagename"=>"profile"));
    }
    public function update(){
        if($_FILES["img"]["name"]!=""){
            $imageFileType = pathinfo("assets/".$_FILES["img"]["name"],PATHINFO_EXTENSION);
            if(file_exists("assets/".$_FILES["img"]["name"])){
                echo "Sorry, file exists";
            }
            else{
                if($imageFileType != "jpg" && $imageFileType != "png"){
                    echo "Sorry this file type is not allowed";
                }
                else{
                    if(move_uploaded_file($_FILES["img"]["tmp_name"],"assets/".$_FILES["img"]["name"])){
                        echo "File uploaded";
                    }
                    else{ echo"Error uploading!";}
                }
            }
        }
        header("Location:/profile?msg=File Uploaded");
    }
}

?>