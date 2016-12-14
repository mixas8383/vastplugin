<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class videoJsPlayer extends JObject
{

    private $_useGlobalJs;
    private $_doc;
    private $_videoSrc;
    private $_poster;
    private $_preroll;
    private $_postRoll;
    private $_config;
    private $_plugins;
    private $_adverts;
    private $_adsPluginName = 'ads-setup';
    static $haseLoadedScripts;

    function __construct($data = '')
    {

        $this->_simpleInit();

        $this->initData($data);


        parent::__construct();
    }

    private function initData($data)
    {
        if (empty($data))
        {
            return;
        }
        switch ($data)
        {
            case is_array($data):
                //init array
                break;
            case is_object($data):
                //init object
                break;
            case is_string($data):
                //init string as video src
                $this->_videoSrc = $data;
                break;

            default:
                break;
        }
    }

    private function _simpleInit()
    {
        $this->_useGlobalJs = false;
        $this->_doc = JFactory::getDocument();
        $this->_setJavascriptLibraries();
        // $this->_doc->addScript('/libraries/wslib/videojs/videojs/video-ie8.min.js');
            
        $this->_doc->addScript('/libraries/wslib/videojs/videojs/video.js');
        $this->_doc->addScript('/libraries/wslib/videojs/videojs/ads-setup.js');
        $this->_doc->addScript('/libraries/wslib/videojs/videojs/videojs_5.vast.vpaid.min.js');
         
        $this->_doc->addStylesheet('/libraries/wslib/videojs/videojs/videod-js.css');
        $this->_doc->addStylesheet('/libraries/wslib/videojs/videojs/videojs.vast.vpaid.min.css');




        $tmp = new stdClass();
        $tmp->width = 600;
        $tmp->height = 270;
        $tmp->poster = 270;
        $tmp->preload = 'auto'; // can bee also 'metadata' and `none`
        $tmp->autoplay = false;
        $tmp->controls = true;
        $tmp->loop = false;
        $tmp->controlbar = true;
        



        $this->_config = $tmp;
    }

    private function _setJavascriptLibraries()
    {
        if ($this->haseLoadedScripts)
        {
            return true;
        }
        if ($this->_useGlobalJs)
        {
            $this->_doc->addScript('');
        }
        $this->haseLoadedScripts = true;
        return true;
    }

    public function getJsonConfig()
    {
        $this->_config->plugins = array();
         if(isset($_SERVER['HTTP_USER_AGENT']) && $_SERVER['HTTP_USER_AGENT'] == 'Debug')
            {
                echo '<pre>'.__FILE__.' -->>| <b> Line </b>'.__LINE__.'</pre><pre>';
                print_r( $this->_config);
                
                
            }
        
        $this->_config->plugins = $this->_plugins;

            if(isset($_SERVER['HTTP_USER_AGENT']) && $_SERVER['HTTP_USER_AGENT'] == 'Debug')
            {
                echo '<pre>'.__FILE__.' -->>| <b> Line </b>'.__LINE__.'</pre><pre>';
                print_r( $this->_config);
                die;
                
            }

        return json_encode($this->_config);
    }

    public function render()
    {
        $html = '';




        ob_start();
        ?>
        <video id="vvideopp" width="<?php echo $this->getCfg('width'); ?>" 
               height="<?php echo $this->getCfg('height'); ?>" 
               class="video-js vjs-default-skin" 
               poster="http://www.palitratv.ge/img/videoscr/articles/c3b73e75529ad2cab08013eb463b388b.jpg" 

               >

            <source src="<?php echo $this->_videoSrc; ?>" type="video/mp4"/>
        <!--            <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm"/>
            <source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg"/>-->
            <?php echo $this->getPreText(); ?> 

        </video>
        <?php
        echo 'Player rendered';



        $html = ob_get_clean();



        $this->_doc->addScriptDeclaration(''
                . ''
                . '; var tttConfig = '. $this->getJsonConfig().';'
                . '
                $(document).ready(function(){   
                player = videojs("#vvideopp", ' . $this->getJsonConfig() . '); 
                console.log(player)
                console.log(tttConfig)
                    }); 
                    
                    
                    '
                . ''
                . ''
                . '');


        return $html;
    }

    public function __get($property)
    {
        if (property_exists($this, $property))
        {
            return $this->$property;
        }
    }

    public function __set($property, $value)
    {
        if (property_exists($this, $property))
        {
            $this->$property = $value;
        }

        return $this;
    }

    private function getPreText()
    {
        return '<p class="vjs-no-js">'
                . 'To view this video please enable JavaScript, and consider upgrading to a web browser that'
                . '<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>'
                . '</p>';
    }

    private function mergeCofigs($obj1, $obj2 = '')
    {
        if (empty($obj2))
        {
            $obj2 = $obj1;
            $obj1 = $this->_config;
        }
        return (object) array_merge((array) $obj1, (array) $obj2);
    }

    public function setGlobalCfg($cfg)
    {
        $this->_config = $cfg;
        return true;
    }

    public function getCfg($name = '')
    {
        if (empty($name))
        {
            return $this->_config;
        }
        return isset($this->_config->$name) ? $this->_config->$name : false;
    }

    public function setCfg($name, $value = '')
    {
        $tmp = new stdClass();
        if (is_string($name))
        {

            $tmp->$name = $value;
        }
        if (is_array($name))
        {
            $tmp = (object) $name;
        }
        $this->setGlobalCfg($this->mergeCofigs($tmp));
        return true;
    }

    public function setPreRoll()
    {
        
    }

    public function setPostRoll()
    {
        
    }

    public function setAdvertSkippButtonText()
    {
        
    }

    private function getAdsPlugin()
    {
        $pluginName = $this->_adsPluginName;

        if (isset($this->_plugins->$pluginName))
        {
            return $this->_plugins->$pluginName;
        } else
        {
            return $this->_plugins->$pluginName = new stdClass();
        }
    }

    public function updateAdsPlugin($newParams)
    {
        $pluginName = $this->_adsPluginName;
        $this->_plugins->$pluginName = $newParams;
    }

    public function setAdsCfg($name, $value = '')
    {
        $adsPluginParams = $this->getAdsPlugin();
        $tmp = new stdClass();
        if (is_string($name))
        {
            $tmp->$name = $value;
        }
        if (is_array($name))
        {
            $tmp = (object) $name;
        }



        $this->updateAdsPlugin($this->mergeCofigs($adsPluginParams, $tmp));
        return true;
    }

}
