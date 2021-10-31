<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcd0303ba90f0cfd520bafd5f8146d686
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitcd0303ba90f0cfd520bafd5f8146d686::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitcd0303ba90f0cfd520bafd5f8146d686::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitcd0303ba90f0cfd520bafd5f8146d686::$classMap;

        }, null, ClassLoader::class);
    }
}
