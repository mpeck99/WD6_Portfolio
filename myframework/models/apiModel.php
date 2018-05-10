<?
require_once './google-api-php-client/src/Google/autoload.php';
class apiModel{
    public function __construct($parent){
        $this->db=$parent->db;
    }
    public function googleBooks($term=''){
        $client = new Google_Client();
        $client->setApplicationName("sslapi");
        $apiKey = "AIzaSyDSaR6QLqqchlSk_Uchg76p-MTemL0ovFc";
        $client->setDeveloperKey($apiKey);
        $service = new Google_Service_Books($client);
        $optParams = array("filter"=>"free-ebooks");
        $request = $service->volumes->listVolumes("Henry David Thoreau",$optParams);
        return $request;
    }
    //This function allows the user to search the youtube and return back the api data
    public function searchYoutube(){
        //if the query isnt blank and the max results is set this is done
        if (isset($_GET['q']) && isset($_GET['maxResults'])) {
            //setting the client
            $client = new Google_Client();
            $client->setApplicationName("sslapi");
            //the developer key that is being used to access the api data
            $client->setDeveloperKey("AIzaSyCOSEt1dL3z9i8owSDTiBLt7RkDjyByrVk");
            //creating a new youtube service to gather the api data
            $youtube = new Google_Service_YouTube($client);
            //calling the listSearch function that is apart of the gogole youtube api
            $searchResponse = $youtube->search->listSearch('id,snippet', array(
                'q' => $_GET['q'],
                'maxResults' => $_GET['maxResults']));
                //returning the data that is consumed from the api to display it to the user
            return $searchResponse;
        }
    }

}
?>