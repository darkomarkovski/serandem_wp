<?php

namespace SuperbAddons\Components\Admin;

defined('ABSPATH') || exit();

class PremiumFeatureList
{
    private $Features;

    public function __construct()
    {
        $this->Features = array(
            __("1-Click Designs", "superb-blocks"),
            __("Elementor Elements", "superb-blocks"),
            __("250+ Elementor Sections", "superb-blocks"),
            __("WordPress Sections", "superb-blocks"),
            __("30+ WordPress Patterns", "superb-blocks"),
            __("40+ WordPress Themes", "superb-blocks"),
            __("7+ WordPress Blocks", "superb-blocks"),
            __("Search Engine Optimized", "superb-blocks"),
            __("Fully Responsive Designs", "superb-blocks"),
            __("Ever-expanding Library", "superb-blocks")
        );
        $this->Render();
    }

    private function Render()
    {
?>
        <ul class="superbaddons-admindashboard-feature-list">
            <?php foreach ($this->Features as $feature) : ?>
                <li class="superbaddons-element-text-xs superbaddons-element-text-gray"><img class="superbaddons-admindashboard-feature-list-checkmark" src="<?= esc_url(SUPERBADDONS_ASSETS_PATH . '/img/checkmark.svg'); ?>" /><?= esc_html($feature); ?></li>
            <?php endforeach; ?>
        </ul>
<?php
    }
}
