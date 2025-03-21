<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR, // Pass the base directory to be used in the template
        ]);
    }

    /**
     * @Route("/api/getlist", name="getlist")
     */
    public function listAction(Request $request)
    {
        dd('listAction executed', $request);
        $produits = [
            [
                "nom" => "Ordinateur portable",
                "marque" => "Dell",
                "prix" => 799.99,
                "stock" => 10
            ],
            [
                "nom" => "Écran LED 27 pouces",
                "marque" => "HP",
                "prix" => 249.99,
                "stock" => 5
            ],
            [
                "nom" => "Souris sans fil",
                "marque" => "Logitech",
                "prix" => 19.99,
                "stock" => 20
            ],
            [
                "nom" => "Clavier mécanique RGB",
                "marque" => "Corsair",
                "prix" => 129.99,
                "stock" => 15
            ]
        ];

        return $this->json($produits);
    }

    /**
    * @Route("/api/newroute", name="newroute")
    */
    public function newRouteAction()
    {
        return new JsonResponse([
            'message' => 'Nouvelle action créée avec succès'
        ]);
    }

}
