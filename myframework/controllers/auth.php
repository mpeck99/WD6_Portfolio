<?
    class auth extends AppController{
        public function __construct($parent){
            $this->parent=$parent;
        }
        public function login(){
        if($_REQUEST["username"] && $_REQUEST["password"]){
           // var_dump($this->db);
            $data=$this->parent->getModel("users")->select(
                "select * from users where email = :email and password = :password",
                array(":email"=>$_REQUEST["username"],":password"=>sha1($_REQUEST["password"])));
                if($data){
                    $_SESSION["loggedin"]=1;
                    header("location:/mycontroller");
                }
                else{
                    header("location:/mycontroller?msg=Bad Login");
                }
            }
          /*  $file="assets/info.txt";
            $fileContents=file_get_contents($file);
            $fileContents=explode("\n",$fileContents);
            foreach($fileContents as $info){
                $userInfo=explode("|",$info);
                $userName=$userInfo[0];
                $passwordInput=$userInfo[1];
                $userDesc=$userInfo[2];
                if($_REQUEST["username"]==$userName&&$_REQUEST["password"]==$passwordInput){
                $_SESSION["loggedin"]=1;
                $_SESSION["profileName"]=$userName;
                $_SESSION["userInfo"]=$userDesc;
                header("location:/mycontroller");
            }
            else{
                header("Location:/mycontroller?msg=Bad Login");
            }
        }}else{
            header("Location:/mycontroller?msg=Bad Login");
        */
        //$this->load->view('profile',$userData);
        }
        public function logout(){
           session_destroy();
           header("Location:/mycontroller");
        }
    }
?>