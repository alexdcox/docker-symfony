<?php

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\Routing\RouteCollectionBuilder;

/**
 * Class AppKernel.
 *
 * @property Container $container
 */
class AppKernel extends Kernel
{
    use MicroKernelTrait;

    public function registerBundles()
    {
        $bundles = [
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),

            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new FOS\UserBundle\FOSUserBundle(),

            new AppBundle\AppBundle()
        ];

//        new Doctrine\Bundle\DoctrineBundle\DoctrineBundle()
//        new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle()
//        new Symfony\Bundle\FrameworkBundle\FrameworkBundle()
//        new Symfony\Bundle\MonologBundle\MonologBundle()
//        new Symfony\Bundle\SecurityBundle\SecurityBundle()
//        new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle()
//        new Symfony\Bundle\TwigBundle\TwigBundle()

        if (in_array($this->getEnvironment(), ['dev', 'test'], true)) {
            $bundles[] = new Symfony\Bundle\DebugBundle\DebugBundle();
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
        }

        return $bundles;
    }


    protected function configureRoutes(RouteCollectionBuilder $routes)
    {
        $routes->mount('/_wdt', $routes->import('@WebProfilerBundle/Resources/config/routing/wdt.xml'));
        $routes->mount('/_profiler', $routes->import('@WebProfilerBundle/Resources/config/routing/profiler.xml'));
        $routes->mount('/_errors', $routes->import('@TwigBundle/Resources/config/routing/errors.xml'));
        $routes->import('@FOSUserBundle/Resources/config/routing/all.xml');
        $routes->add('/', 'kernel:indexAction', 'index');
    }


    protected function configureContainer(ContainerBuilder $c, LoaderInterface $loader)
    {
        $loader->load($this->getRootDir().'/config/config_'.$this->getEnvironment().'.yml');
    }


    public function indexAction()
    {
        return $this->container->get('templating')->renderResponse('default/index.html.twig', [
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
        ]);
    }
}
