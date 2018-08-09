<?php

namespace Drupal\banner\Controller;

use Drupal\Core\Controller\ControllerBase;

class BannerController extends ControllerBase {

  /**
   * Display the markup.
   *
   * @return array
   */
  public function content() {
    return [
      '#theme' => 'banner_template',
      '#headline' => $this->t('This is the headline'),
    ];
  }

}
