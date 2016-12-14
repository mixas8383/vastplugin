<?php

defined('_JEXEC') or die('Restricted access');

class VideoAdvert
{

    static $advert;
    static $suffix = '';

    function __construct($row = '', $config = '', $append = '')
    {

        if (empty($row) || empty($config))
        {
            return false;
        }
        if (is_array($append))
        {
            $app = array(
                $append[0],
                $append[1],
                @$append[2],
                @$append[3]
            );
        } else
        {
            $app = array(
                0,
                0,
                0,
                0
            );
        }

        $list = array(
            $app,
            array(
                $row->zone,
                $row->url,
                $row->advertpos,
                $row->advertstatus,
                $row->zoneadd
            ),
            array(
                $row->catzone,
                $row->caturl,
                @$row->catadvertpos,
                @$row->catadvertstatus,
                $row->zoneadd
            ),
            array(
                $config->zone,
                $config->url,
                $config->advertpos,
                $config->advertstatus,
                $config->zoneadd
            )
        );

        foreach ($list as $l)
        {
            if ($l[3])
            {
                break;
            }
            if (empty($l[0]) || empty($l[1]))
            {
                continue;
            } else
            {
                self::$advert = $l;
                break;
            }
        }
    }

    function getPlugin($plugins = '')
    {
        $s = '';
        if (self::$advert[0] && self::$advert[1])
        {
            if (!empty($plugins))
            {
                $s = ',';
            }
            return self::_Plugins($plugins .= $s . JURI::root() . 'includes/wsmedia/mediaplayer/ova.swf');
        } else
        {
            return '';
        }
    }

    function getConfig()
    {
        if (self::$advert[0] && self::$advert[1])
        {
            $data = base64_encode(self::$advert[0] . '|' . self::$advert[1] . '|' . self::$advert[2] . '|' . self::$advert[3]);
            return self::_Config(JURI::root() . 'index.php%3Foption%3Dcom_wstools%26view%3Dvideoadvert%26data%3D' . $data);
        } else
        {
            return '';
        }
    }

    function getPluginJQ($plugins = '')
    {
        $s = '';
        if (self::$advert[0] && self::$advert[1])
        {
            if (!empty($plugins))
            {
                $s = ',';
            }
            return self::_PluginsJQ($plugins .= $s . JURI::root() . 'includes/wsmedia/mediaplayer/ova.swf');
        } else
        {
            return '';
        }
    }

    public function getAdvertXmlPreLink()
    {
         
        
        if (self::$advert[0] && self::$advert[1])
        {
            //$advert[0] pre zone
//              /$advert[4] post zone
            $link = 'http://v.ambebi.ge/www/delivery/fc.php?script=bannerTypeHtml:vastInlineBannerTypeHtml:vastInlineHtml&zones=pre-roll0-0=' . self::$advert[0] . '&nz=1&source=&r=R0.' . rand() . '&block=0&format=vast&charset=UTF-8';
            $target = JURI::root() . 'ovared.php?data=' . base64_encode($link);
            return $target;
        }
        else
        {
            return '';
        }
    }

    public function getAdvertXmlPostLink()
    {
        if (self::$advert[4] && self::$advert[1])
        {
            //$advert[0] pre zone
//              /$advert[4] post zone
            $link = 'http://v.ambebi.ge/www/delivery/fc.php?script=bannerTypeHtml:vastInlineBannerTypeHtml:vastInlineHtml&zones=pre-roll0-0=' . self::$advert[4] . '&nz=1&source=&r=R0.' . rand() . '&block=0&format=vast&charset=UTF-8';
            $target = JURI::root() . 'ovared.php?data=' . base64_encode($link);
            return $target;
        }
        else
        {
            return '';
        }
    }

    function getConfigJQ()
    {

        if (self::$advert[0] && self::$advert[1])
        {
            $data = base64_encode(self::$advert[0] . '|' . self::$advert[1] . '|' . self::$advert[2] . '|' . self::$advert[4]);


            return self::_ConfigJQ(JURI::root() . 'ova.php?data=' . $data);
        } else
        {
            return '';
        }
    }

    // Plugins
    function _Plugins($plugins)
    {
        if ($plugins)
        {
            return 'so' . self::$suffix . '.addVariable(\'plugins\',\'' . $plugins . '\');';
        }
    }

    // Config
    function _Config($config)
    {
        if ($config)
        {
            return 'so' . self::$suffix . '.addVariable(\'config\',\'' . $config . '\');';
        }
    }

    //Plugins For JQuery
    function _PluginsJQ($plugins)
    {
        if ($plugins)
        {
            return 'plugins:"' . $plugins . '",';
        }
    }

    // Config For JQuery
    function _ConfigJQ($config)
    {
        if ($config)
        {
            return 'config:"' . $config . '",';
        }
    }

    function setSuffix($suffix)
    {
        self::$suffix = $suffix;
    }

    function setCustom($advert)
    {
        if (!$advert[3])
        {
            self::$advert = $advert;
        }
    }
    public function getAdvertXmlMiddleLink()
    {

        

        if (self::$advert[5] && self::$advert[1])
        {
            //$advert[0] pre zone
//              /$advert[4] post zone
            $link = 'http://v.ambebi.ge/www/delivery/fc.php?script=bannerTypeHtml:vastInlineBannerTypeHtml:vastInlineHtml&zones=pre-roll0-0=' . self::$advert[5] . '&nz=1&source=&r=R0.' . rand() . '&block=0&format=vast&charset=UTF-8';


            return $link;
            if (isset($_SERVER['HTTP_USER_AGENT']) && $_SERVER['HTTP_USER_AGENT'] == 'Debug')
            {
                return 'http://192.168.128.95/postroll.xml';
            }
            $target = JURI::root() . '/ovared.php?data=' . base64_encode($link);
            return $target;
        } else
        {
            return '';
        }
    }
     public function getAdvertXmlMiddleLinkProcent()
    {
         $return = 50;
         if (self::$advert[6] && self::$advert[6]>0 && self::$advert[6]<100)
        {
             
            
            $return = self::$advert[6];
        }
        return $return;
    }

}


