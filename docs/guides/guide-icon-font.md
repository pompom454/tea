<!-- ***********************************************************************************************
	Guide: Icon Font
************************************************************************************************ -->
# Guide: Icon Font {#guide-icon-font}

This guide is a reference to the icon font used by SugarCube, `sc-icons`, which is a subset of Font Awesome Free `6.7.2`.

```
Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
Copyright 2024 Fonticons, Inc.
```

<!-- *********************************************************************** -->

### Icon Styling {#guide-icon-font-styling}

The following CSS properties should be used with any icon style rule.

```css
cursor: pointer;
display: inline-block;
font-family: sc-icons !important;
font-size: 1em;
font-style: normal;
font-variant: normal;
font-weight: 900;
line-height: 1;
speak: never;
text-decoration: none;
text-rendering: auto;
text-transform: none;
user-select: none;
/* vendor-prefixed properties */
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
```

<!-- *********************************************************************** -->

### Icon Reference {#guide-icon-font-reference}

Each icon's hexadecimal reference ID is listed below it.  How to use the reference IDs varies based on where you're using them.

* **JavaScript strings:** Prefix with `\u`.  E.g., `\uf004`.
* **CSS styles:** Prefix with `\`.  E.g., `\f004`.
* **HTML entities:** Prefix with `&#x` and append `;`.  E.g., `&#xf004;`.

<div id="icon-font-view">
	<div>
		<span title="icon-search" aria-label="icon-search">&#xf002;</span>
		<code>f002</code>
	</div>
	<div>
		<span title="icon-heart" aria-label="icon-heart">&#xf004;</span>
		<code>f004</code>
	</div>
	<div>
		<span title="icon-star" aria-label="icon-star">&#xf005;</span>
		<code>f005</code>
	</div>
	<div>
		<span title="icon-check" aria-label="icon-check">&#xf00c;</span>
		<code>f00c</code>
	</div>
	<div>
		<span title="icon-times" aria-label="icon-times">&#xf00d;</span>
		<code>f00d</code>
	</div>
	<div>
		<span title="icon-search-plus" aria-label="icon-search-plus">&#xf00e;</span>
		<code>f00e</code>
	</div>
	<div>
		<span title="icon-search-minus" aria-label="icon-search-minus">&#xf010;</span>
		<code>f010</code>
	</div>
	<div>
		<span title="icon-power-off" aria-label="icon-power-off">&#xf011;</span>
		<code>f011</code>
	</div>
	<div>
		<span title="icon-cog" aria-label="icon-cog">&#xf013;</span>
		<code>f013</code>
	</div>
	<div>
		<span title="icon-home" aria-label="icon-home">&#xf015;</span>
		<code>f015</code>
	</div>
	<div>
		<span title="icon-download" aria-label="icon-download">&#xf019;</span>
		<code>f019</code>
	</div>
	<div>
		<span title="icon-lock" aria-label="icon-lock">&#xf023;</span>
		<code>f023</code>
	</div>
	<div>
		<span title="icon-volume-off" aria-label="icon-volume-off">&#xf026;</span>
		<code>f026</code>
	</div>
	<div>
		<span title="icon-volume-down" aria-label="icon-volume-down">&#xf027;</span>
		<code>f027</code>
	</div>
	<div>
		<span title="icon-volume-up" aria-label="icon-volume-up">&#xf028;</span>
		<code>f028</code>
	</div>
	<div>
		<span title="icon-bookmark" aria-label="icon-bookmark">&#xf02e;</span>
		<code>f02e</code>
	</div>
	<div>
		<span title="icon-step-backward" aria-label="icon-step-backward">&#xf048;</span>
		<code>f048</code>
	</div>
	<div>
		<span title="icon-fast-backward" aria-label="icon-fast-backward">&#xf049;</span>
		<code>f049</code>
	</div>
	<div>
		<span title="icon-backward" aria-label="icon-backward">&#xf04a;</span>
		<code>f04a</code>
	</div>
	<div>
		<span title="icon-play" aria-label="icon-play">&#xf04b;</span>
		<code>f04b</code>
	</div>
	<div>
		<span title="icon-pause" aria-label="icon-pause">&#xf04c;</span>
		<code>f04c</code>
	</div>
	<div>
		<span title="icon-stop" aria-label="icon-stop">&#xf04d;</span>
		<code>f04d</code>
	</div>
	<div>
		<span title="icon-forward" aria-label="icon-forward">&#xf04e;</span>
		<code>f04e</code>
	</div>
	<div>
		<span title="icon-fast-forward" aria-label="icon-fast-forward">&#xf050;</span>
		<code>f050</code>
	</div>
	<div>
		<span title="icon-step-forward" aria-label="icon-step-forward">&#xf051;</span>
		<code>f051</code>
	</div>
	<div>
		<span title="icon-eject" aria-label="icon-eject">&#xf052;</span>
		<code>f052</code>
	</div>
	<div>
		<span title="icon-chevron-left" aria-label="icon-chevron-left">&#xf053;</span>
		<code>f053</code>
	</div>
	<div>
		<span title="icon-chevron-right" aria-label="icon-chevron-right">&#xf054;</span>
		<code>f054</code>
	</div>
	<div>
		<span title="icon-plus-circle" aria-label="icon-plus-circle">&#xf055;</span>
		<code>f055</code>
	</div>
	<div>
		<span title="icon-minus-circle" aria-label="icon-minus-circle">&#xf056;</span>
		<code>f056</code>
	</div>
	<div>
		<span title="icon-times-circle" aria-label="icon-times-circle">&#xf057;</span>
		<code>f057</code>
	</div>
	<div>
		<span title="icon-check-circle" aria-label="icon-check-circle">&#xf058;</span>
		<code>f058</code>
	</div>
	<div>
		<span title="icon-question-circle" aria-label="icon-question-circle">&#xf059;</span>
		<code>f059</code>
	</div>
	<div>
		<span title="icon-info-circle" aria-label="icon-info-circle">&#xf05a;</span>
		<code>f05a</code>
	</div>
	<div>
		<span title="icon-ban" aria-label="icon-ban">&#xf05e;</span>
		<code>f05e</code>
	</div>
	<div>
		<span title="icon-arrow-left" aria-label="icon-arrow-left">&#xf060;</span>
		<code>f060</code>
	</div>
	<div>
		<span title="icon-arrow-right" aria-label="icon-arrow-right">&#xf061;</span>
		<code>f061</code>
	</div>
	<div>
		<span title="icon-arrow-up" aria-label="icon-arrow-up">&#xf062;</span>
		<code>f062</code>
	</div>
	<div>
		<span title="icon-arrow-down" aria-label="icon-arrow-down">&#xf063;</span>
		<code>f063</code>
	</div>
	<div>
		<span title="icon-expand" aria-label="icon-expand">&#xf065;</span>
		<code>f065</code>
	</div>
	<div>
		<span title="icon-compress" aria-label="icon-compress">&#xf066;</span>
		<code>f066</code>
	</div>
	<div>
		<span title="icon-plus" aria-label="icon-plus">&#xf067;</span>
		<code>f067</code>
	</div>
	<div>
		<span title="icon-minus" aria-label="icon-minus">&#xf068;</span>
		<code>f068</code>
	</div>
	<div>
		<span title="icon-exclamation-circle" aria-label="icon-exclamation-circle">&#xf06a;</span>
		<code>f06a</code>
	</div>
	<div>
		<span title="icon-eye" aria-label="icon-eye">&#xf06e;</span>
		<code>f06e</code>
	</div>
	<div>
		<span title="icon-eye-slash" aria-label="icon-eye-slash">&#xf070;</span>
		<code>f070</code>
	</div>
	<div>
		<span title="icon-exclamation-triangle" aria-label="icon-exclamation-triangle">&#xf071;</span>
		<code>f071</code>
	</div>
	<div>
		<span title="icon-chevron-up" aria-label="icon-chevron-up">&#xf077;</span>
		<code>f077</code>
	</div>
	<div>
		<span title="icon-chevron-down" aria-label="icon-chevron-down">&#xf078;</span>
		<code>f078</code>
	</div>
	<div>
		<span title="icon-star-half" aria-label="icon-star-half">&#xf089;</span>
		<code>f089</code>
	</div>
	<div>
		<span title="icon-thumbtack" aria-label="icon-thumbtack">&#xf08d;</span>
		<code>f08d</code>
	</div>
	<div>
		<span title="icon-upload" aria-label="icon-upload">&#xf093;</span>
		<code>f093</code>
	</div>
	<div>
		<span title="icon-unlock" aria-label="icon-unlock">&#xf09c;</span>
		<code>f09c</code>
	</div>
	<div>
		<span title="icon-hdd" aria-label="icon-hdd">&#xf0a0;</span>
		<code>f0a0</code>
	</div>
	<div>
		<span title="icon-link" aria-label="icon-link">&#xf0c1;</span>
		<code>f0c1</code>
	</div>
	<div>
		<span title="icon-cloud" aria-label="icon-cloud">&#xf0c2;</span>
		<code>f0c2</code>
	</div>
	<div>
		<span title="icon-save" aria-label="icon-save">&#xf0c7;</span>
		<code>f0c7</code>
	</div>
	<div>
		<span title="icon-bars" aria-label="icon-bars">&#xf0c9;</span>
		<code>f0c9</code>
	</div>
	<div>
		<span title="icon-magic" aria-label="icon-magic">&#xf0d0;</span>
		<code>f0d0</code>
	</div>
	<div>
		<span title="icon-caret-down" aria-label="icon-caret-down">&#xf0d7;</span>
		<code>f0d7</code>
	</div>
	<div>
		<span title="icon-caret-up" aria-label="icon-caret-up">&#xf0d8;</span>
		<code>f0d8</code>
	</div>
	<div>
		<span title="icon-caret-left" aria-label="icon-caret-left">&#xf0d9;</span>
		<code>f0d9</code>
	</div>
	<div>
		<span title="icon-caret-right" aria-label="icon-caret-right">&#xf0da;</span>
		<code>f0da</code>
	</div>
	<div>
		<span title="icon-bolt" aria-label="icon-bolt">&#xf0e7;</span>
		<code>f0e7</code>
	</div>
	<div>
		<span title="icon-lightbulb" aria-label="icon-lightbulb">&#xf0eb;</span>
		<code>f0eb</code>
	</div>
	<div>
		<span title="icon-plus-square" aria-label="icon-plus-square">&#xf0fe;</span>
		<code>f0fe</code>
	</div>
	<div>
		<span title="icon-quote-left" aria-label="icon-quote-left">&#xf10d;</span>
		<code>f10d</code>
	</div>
	<div>
		<span title="icon-quote-right" aria-label="icon-quote-right">&#xf10e;</span>
		<code>f10e</code>
	</div>
	<div>
		<span title="icon-spinner" aria-label="icon-spinner">&#xf110;</span>
		<code>f110</code>
	</div>
	<div>
		<span title="icon-unlink" aria-label="icon-unlink">&#xf127;</span>
		<code>f127</code>
	</div>
	<div>
		<span title="icon-chevron-circle-left" aria-label="icon-chevron-circle-left">&#xf137;</span>
		<code>f137</code>
	</div>
	<div>
		<span title="icon-chevron-circle-right" aria-label="icon-chevron-circle-right">&#xf138;</span>
		<code>f138</code>
	</div>
	<div>
		<span title="icon-chevron-circle-up" aria-label="icon-chevron-circle-up">&#xf139;</span>
		<code>f139</code>
	</div>
	<div>
		<span title="icon-chevron-circle-down" aria-label="icon-chevron-circle-down">&#xf13a;</span>
		<code>f13a</code>
	</div>
	<div>
		<span title="icon-unlock-alt" aria-label="icon-unlock-alt">&#xf13e;</span>
		<code>f13e</code>
	</div>
	<div>
		<span title="icon-ellipsis-h" aria-label="icon-ellipsis-h">&#xf141;</span>
		<code>f141</code>
	</div>
	<div>
		<span title="icon-ellipsis-v" aria-label="icon-ellipsis-v">&#xf142;</span>
		<code>f142</code>
	</div>
	<div>
		<span title="icon-play-circle" aria-label="icon-play-circle">&#xf144;</span>
		<code>f144</code>
	</div>
	<div>
		<span title="icon-minus-square" aria-label="icon-minus-square">&#xf146;</span>
		<code>f146</code>
	</div>
	<div>
		<span title="icon-check-square" aria-label="icon-check-square">&#xf14a;</span>
		<code>f14a</code>
	</div>
	<div>
		<span title="icon-caret-square-down" aria-label="icon-caret-square-down">&#xf150;</span>
		<code>f150</code>
	</div>
	<div>
		<span title="icon-caret-square-up" aria-label="icon-caret-square-up">&#xf151;</span>
		<code>f151</code>
	</div>
	<div>
		<span title="icon-caret-square-right" aria-label="icon-caret-square-right">&#xf152;</span>
		<code>f152</code>
	</div>
	<div>
		<span title="icon-sun" aria-label="icon-sun">&#xf185;</span>
		<code>f185</code>
	</div>
	<div>
		<span title="icon-moon" aria-label="icon-moon">&#xf186;</span>
		<code>f186</code>
	</div>
	<div>
		<span title="icon-bug" aria-label="icon-bug">&#xf188;</span>
		<code>f188</code>
	</div>
	<div>
		<span title="icon-caret-square-left" aria-label="icon-caret-square-left">&#xf191;</span>
		<code>f191</code>
	</div>
	<div>
		<span title="icon-language" aria-label="icon-language">&#xf1ab;</span>
		<code>f1ab</code>
	</div>
	<div>
		<span title="icon-paragraph" aria-label="icon-paragraph">&#xf1dd;</span>
		<code>f1dd</code>
	</div>
	<div>
		<span title="icon-share-alt" aria-label="icon-share-alt">&#xf1e0;</span>
		<code>f1e0</code>
	</div>
	<div>
		<span title="icon-trash" aria-label="icon-trash">&#xf1f8;</span>
		<code>f1f8</code>
	</div>
	<div>
		<span title="icon-toggle-off" aria-label="icon-toggle-off">&#xf204;</span>
		<code>f204</code>
	</div>
	<div>
		<span title="icon-toggle-on" aria-label="icon-toggle-on">&#xf205;</span>
		<code>f205</code>
	</div>
	<div>
		<span title="icon-battery-full" aria-label="icon-battery-full">&#xf240;</span>
		<code>f240</code>
	</div>
	<div>
		<span title="icon-battery-three-quarters" aria-label="icon-battery-three-quarters">&#xf241;</span>
		<code>f241</code>
	</div>
	<div>
		<span title="icon-battery-half" aria-label="icon-battery-half">&#xf242;</span>
		<code>f242</code>
	</div>
	<div>
		<span title="icon-battery-quarter" aria-label="icon-battery-quarter">&#xf243;</span>
		<code>f243</code>
	</div>
	<div>
		<span title="icon-battery-empty" aria-label="icon-battery-empty">&#xf244;</span>
		<code>f244</code>
	</div>
	<div>
		<span title="icon-pause-circle" aria-label="icon-pause-circle">&#xf28b;</span>
		<code>f28b</code>
	</div>
	<div>
		<span title="icon-stop-circle" aria-label="icon-stop-circle">&#xf28d;</span>
		<code>f28d</code>
	</div>
	<div>
		<span title="icon-undo-alt" aria-label="icon-undo-alt">&#xf2ea;</span>
		<code>f2ea</code>
	</div>
	<div>
		<span title="icon-trash-alt" aria-label="icon-trash-alt">&#xf2ed;</span>
		<code>f2ed</code>
	</div>
	<div>
		<span title="icon-sync-alt" aria-label="icon-sync-alt">&#xf2f1;</span>
		<code>f2f1</code>
	</div>
	<div>
		<span title="icon-redo-alt" aria-label="icon-redo-alt">&#xf2f9;</span>
		<code>f2f9</code>
	</div>
	<div>
		<span title="icon-expand-arrows-alt" aria-label="icon-expand-arrows-alt">&#xf31e;</span>
		<code>f31e</code>
	</div>
	<div>
		<span title="icon-external-link-alt" aria-label="icon-external-link-alt">&#xf35d;</span>
		<code>f35d</code>
	</div>
	<div>
		<span title="icon-cloud-download-alt" aria-label="icon-cloud-download-alt">&#xf381;</span>
		<code>f381</code>
	</div>
	<div>
		<span title="icon-cloud-upload-alt" aria-label="icon-cloud-upload-alt">&#xf382;</span>
		<code>f382</code>
	</div>
	<div>
		<span title="icon-window-close" aria-label="icon-window-close">&#xf410;</span>
		<code>f410</code>
	</div>
	<div>
		<span title="icon-backspace" aria-label="icon-backspace">&#xf55a;</span>
		<code>f55a</code>
	</div>
	<div>
		<span title="icon-file-download" aria-label="icon-file-download">&#xf56d;</span>
		<code>f56d</code>
	</div>
	<div>
		<span title="icon-file-export" aria-label="icon-file-export">&#xf56e;</span>
		<code>f56e</code>
	</div>
	<div>
		<span title="icon-file-import" aria-label="icon-file-import">&#xf56f;</span>
		<code>f56f</code>
	</div>
	<div>
		<span title="icon-file-upload" aria-label="icon-file-upload">&#xf574;</span>
		<code>f574</code>
	</div>
	<div>
		<span title="icon-star-half-alt" aria-label="icon-star-half-alt">&#xf5c0;</span>
		<code>f5c0</code>
	</div>
	<div>
		<span title="icon-volume-mute" aria-label="icon-volume-mute">&#xf6a9;</span>
		<code>f6a9</code>
	</div>
	<div>
		<span title="icon-compress-arrows-alt" aria-label="icon-compress-arrows-alt">&#xf78c;</span>
		<code>f78c</code>
	</div>
	<div>
		<span title="icon-tools" aria-label="icon-tools">&#xf7d9;</span>
		<code>f7d9</code>
	</div>
	<div>
		<span title="icon-trash-restore" aria-label="icon-trash-restore">&#xf829;</span>
		<code>f829</code>
	</div>
	<div>
		<span title="icon-trash-restore-alt" aria-label="icon-trash-restore-alt">&#xf82a;</span>
		<code>f82a</code>
	</div>
</div>

<hr>

<div id="icon-font-view">
	<div>
		<span title="align-center" aria-label="align-center">&#xf037;</span>
		<code>f037</code>
	</div>
	<div>
		<span title="align-justify" aria-label="align-justify">&#xf039;</span>
		<code>f039</code>
	</div>
	<div>
		<span title="align-left" aria-label="align-left">&#xf036;</span>
		<code>f036</code>
	</div>
	<div>
		<span title="align-right" aria-label="align-right">&#xf038;</span>
		<code>f038</code>
	</div>
	<div>
		<span title="angle-down" aria-label="angle-down">&#xf107;</span>
		<code>f107</code>
	</div>
	<div>
		<span title="angle-left" aria-label="angle-left">&#xf104;</span>
		<code>f104</code>
	</div>
	<div>
		<span title="angle-right" aria-label="angle-right">&#xf105;</span>
		<code>f105</code>
	</div>
	<div>
		<span title="angle-up" aria-label="angle-up">&#xf106;</span>
		<code>f106</code>
	</div>
	<div>
		<span title="angles-down" aria-label="angles-down">&#xf103;</span>
		<code>f103</code>
	</div>
	<div>
		<span title="angles-left" aria-label="angles-left">&#xf100;</span>
		<code>f100</code>
	</div>
	<div>
		<span title="angles-right" aria-label="angles-right">&#xf101;</span>
		<code>f101</code>
	</div>
	<div>
		<span title="angles-up" aria-label="angles-up">&#xf102;</span>
		<code>f102</code>
	</div>
	<div>
		<span title="arrow-down" aria-label="arrow-down">&#xf063;</span>
		<code>f063</code>
	</div>
	<div>
		<span title="arrow-down-1-9" aria-label="arrow-down-1-9">&#xf162;</span>
		<code>f162</code>
	</div>
	<div>
		<span title="arrow-down-9-1" aria-label="arrow-down-9-1">&#xf886;</span>
		<code>f886</code>
	</div>
	<div>
		<span title="arrow-down-a-z" aria-label="arrow-down-a-z">&#xf15d;</span>
		<code>f15d</code>
	</div>
	<div>
		<span title="arrow-down-long" aria-label="arrow-down-long">&#xf175;</span>
		<code>f175</code>
	</div>
	<div>
		<span title="arrow-down-short-wide" aria-label="arrow-down-short-wide">&#xf884;</span>
		<code>f884</code>
	</div>
	<div>
		<span title="arrow-down-wide-short" aria-label="arrow-down-wide-short">&#xf160;</span>
		<code>f160</code>
	</div>
	<div>
		<span title="arrow-down-z-a" aria-label="arrow-down-z-a">&#xf881;</span>
		<code>f881</code>
	</div>
	<div>
		<span title="arrow-left" aria-label="arrow-left">&#xf060;</span>
		<code>f060</code>
	</div>
	<div>
		<span title="arrow-left-long" aria-label="arrow-left-long">&#xf177;</span>
		<code>f177</code>
	</div>
	<div>
		<span title="arrow-pointer" aria-label="arrow-pointer">&#xf245;</span>
		<code>f245</code>
	</div>
	<div>
		<span title="arrow-right" aria-label="arrow-right">&#xf061;</span>
		<code>f061</code>
	</div>
	<div>
		<span title="arrow-right-arrow-left" aria-label="arrow-right-arrow-left">&#xf0ec;</span>
		<code>f0ec</code>
	</div>
	<div>
		<span title="arrow-right-from-bracket" aria-label="arrow-right-from-bracket">&#xf08b;</span>
		<code>f08b</code>
	</div>
	<div>
		<span title="arrow-right-long" aria-label="arrow-right-long">&#xf178;</span>
		<code>f178</code>
	</div>
	<div>
		<span title="arrow-right-to-bracket" aria-label="arrow-right-to-bracket">&#xf090;</span>
		<code>f090</code>
	</div>
	<div>
		<span title="arrow-rotate-left" aria-label="arrow-rotate-left">&#xf0e2;</span>
		<code>f0e2</code>
	</div>
	<div>
		<span title="arrow-rotate-right" aria-label="arrow-rotate-right">&#xf01e;</span>
		<code>f01e</code>
	</div>
	<div>
		<span title="arrow-turn-down" aria-label="arrow-turn-down">&#xf149;</span>
		<code>f149</code>
	</div>
	<div>
		<span title="arrow-turn-up" aria-label="arrow-turn-up">&#xf148;</span>
		<code>f148</code>
	</div>
	<div>
		<span title="arrow-up" aria-label="arrow-up">&#xf062;</span>
		<code>f062</code>
	</div>
	<div>
		<span title="arrow-up-1-9" aria-label="arrow-up-1-9">&#xf163;</span>
		<code>f163</code>
	</div>
	<div>
		<span title="arrow-up-9-1" aria-label="arrow-up-9-1">&#xf887;</span>
		<code>f887</code>
	</div>
	<div>
		<span title="arrow-up-a-z" aria-label="arrow-up-a-z">&#xf15e;</span>
		<code>f15e</code>
	</div>
	<div>
		<span title="arrow-up-from-bracket" aria-label="arrow-up-from-bracket">&#xe09a;</span>
		<code>e09a</code>
	</div>
	<div>
		<span title="arrow-up-long" aria-label="arrow-up-long">&#xf176;</span>
		<code>f176</code>
	</div>
	<div>
		<span title="arrow-up-right-from-square" aria-label="arrow-up-right-from-square">&#xf08e;</span>
		<code>f08e</code>
	</div>
	<div>
		<span title="arrow-up-short-wide" aria-label="arrow-up-short-wide">&#xf885;</span>
		<code>f885</code>
	</div>
	<div>
		<span title="arrow-up-wide-short" aria-label="arrow-up-wide-short">&#xf161;</span>
		<code>f161</code>
	</div>
	<div>
		<span title="arrow-up-z-a" aria-label="arrow-up-z-a">&#xf882;</span>
		<code>f882</code>
	</div>
	<div>
		<span title="arrows-left-right" aria-label="arrows-left-right">&#xf07e;</span>
		<code>f07e</code>
	</div>
	<div>
		<span title="arrows-rotate" aria-label="arrows-rotate">&#xf021;</span>
		<code>f021</code>
	</div>
	<div>
		<span title="arrows-up-down" aria-label="arrows-up-down">&#xf07d;</span>
		<code>f07d</code>
	</div>
	<div>
		<span title="arrows-up-down-left-right" aria-label="arrows-up-down-left-right">&#xf047;</span>
		<code>f047</code>
	</div>
	<div>
		<span title="asterisk" aria-label="asterisk">&#x002a;</span>
		<code>002a</code>
	</div>
	<div>
		<span title="at" aria-label="at">&#x0040;</span>
		<code>0040</code>
	</div>
	<div>
		<span title="audio-description" aria-label="audio-description">&#xf29e;</span>
		<code>f29e</code>
	</div>
	<div>
		<span title="backward" aria-label="backward">&#xf04a;</span>
		<code>f04a</code>
	</div>
	<div>
		<span title="backward-fast" aria-label="backward-fast">&#xf049;</span>
		<code>f049</code>
	</div>
	<div>
		<span title="backward-step" aria-label="backward-step">&#xf048;</span>
		<code>f048</code>
	</div>
	<div>
		<span title="ban" aria-label="ban">&#xf05e;</span>
		<code>f05e</code>
	</div>
	<div>
		<span title="barcode" aria-label="barcode">&#xf02a;</span>
		<code>f02a</code>
	</div>
	<div>
		<span title="bars" aria-label="bars">&#xf0c9;</span>
		<code>f0c9</code>
	</div>
	<div>
		<span title="battery-empty" aria-label="battery-empty">&#xf244;</span>
		<code>f244</code>
	</div>
	<div>
		<span title="battery-full" aria-label="battery-full">&#xf240;</span>
		<code>f240</code>
	</div>
	<div>
		<span title="battery-half" aria-label="battery-half">&#xf242;</span>
		<code>f242</code>
	</div>
	<div>
		<span title="battery-quarter" aria-label="battery-quarter">&#xf243;</span>
		<code>f243</code>
	</div>
	<div>
		<span title="battery-three-quarters" aria-label="battery-three-quarters">&#xf241;</span>
		<code>f241</code>
	</div>
	<div>
		<span title="bell" aria-label="bell">&#xf0f3;</span>
		<code>f0f3</code>
	</div>
	<div>
		<span title="bell-slash" aria-label="bell-slash">&#xf1f6;</span>
		<code>f1f6</code>
	</div>
	<div>
		<span title="bold" aria-label="bold">&#xf032;</span>
		<code>f032</code>
	</div>
	<div>
		<span title="bolt" aria-label="bolt">&#xf0e7;</span>
		<code>f0e7</code>
	</div>
	<div>
		<span title="bolt-lightning" aria-label="bolt-lightning">&#xe0b7;</span>
		<code>e0b7</code>
	</div>
	<div>
		<span title="bomb" aria-label="bomb">&#xf1e2;</span>
		<code>f1e2</code>
	</div>
	<div>
		<span title="bookmark" aria-label="bookmark">&#xf02e;</span>
		<code>f02e</code>
	</div>
	<div>
		<span title="border-all" aria-label="border-all">&#xf84c;</span>
		<code>f84c</code>
	</div>
	<div>
		<span title="border-none" aria-label="border-none">&#xf850;</span>
		<code>f850</code>
	</div>
	<div>
		<span title="border-top-left" aria-label="border-top-left">&#xf853;</span>
		<code>f853</code>
	</div>
	<div>
		<span title="bug" aria-label="bug">&#xf188;</span>
		<code>f188</code>
	</div>
	<div>
		<span title="bug-slash" aria-label="bug-slash">&#xe490;</span>
		<code>e490</code>
	</div>
	<div>
		<span title="caret-down" aria-label="caret-down">&#xf0d7;</span>
		<code>f0d7</code>
	</div>
	<div>
		<span title="caret-left" aria-label="caret-left">&#xf0d9;</span>
		<code>f0d9</code>
	</div>
	<div>
		<span title="caret-right" aria-label="caret-right">&#xf0da;</span>
		<code>f0da</code>
	</div>
	<div>
		<span title="caret-up" aria-label="caret-up">&#xf0d8;</span>
		<code>f0d8</code>
	</div>
	<div>
		<span title="chart-pie" aria-label="chart-pie">&#xf200;</span>
		<code>f200</code>
	</div>
	<div>
		<span title="chart-simple" aria-label="chart-simple">&#xe473;</span>
		<code>e473</code>
	</div>
	<div>
		<span title="check" aria-label="check">&#xf00c;</span>
		<code>f00c</code>
	</div>
	<div>
		<span title="chevron-down" aria-label="chevron-down">&#xf078;</span>
		<code>f078</code>
	</div>
	<div>
		<span title="chevron-left" aria-label="chevron-left">&#xf053;</span>
		<code>f053</code>
	</div>
	<div>
		<span title="chevron-right" aria-label="chevron-right">&#xf054;</span>
		<code>f054</code>
	</div>
	<div>
		<span title="chevron-up" aria-label="chevron-up">&#xf077;</span>
		<code>f077</code>
	</div>
	<div>
		<span title="circle" aria-label="circle">&#xf111;</span>
		<code>f111</code>
	</div>
	<div>
		<span title="circle-arrow-down" aria-label="circle-arrow-down">&#xf0ab;</span>
		<code>f0ab</code>
	</div>
	<div>
		<span title="circle-arrow-left" aria-label="circle-arrow-left">&#xf0a8;</span>
		<code>f0a8</code>
	</div>
	<div>
		<span title="circle-arrow-right" aria-label="circle-arrow-right">&#xf0a9;</span>
		<code>f0a9</code>
	</div>
	<div>
		<span title="circle-arrow-up" aria-label="circle-arrow-up">&#xf0aa;</span>
		<code>f0aa</code>
	</div>
	<div>
		<span title="circle-check" aria-label="circle-check">&#xf058;</span>
		<code>f058</code>
	</div>
	<div>
		<span title="circle-chevron-down" aria-label="circle-chevron-down">&#xf13a;</span>
		<code>f13a</code>
	</div>
	<div>
		<span title="circle-chevron-left" aria-label="circle-chevron-left">&#xf137;</span>
		<code>f137</code>
	</div>
	<div>
		<span title="circle-chevron-right" aria-label="circle-chevron-right">&#xf138;</span>
		<code>f138</code>
	</div>
	<div>
		<span title="circle-chevron-up" aria-label="circle-chevron-up">&#xf139;</span>
		<code>f139</code>
	</div>
	<div>
		<span title="circle-dot" aria-label="circle-dot">&#xf192;</span>
		<code>f192</code>
	</div>
	<div>
		<span title="circle-down" aria-label="circle-down">&#xf358;</span>
		<code>f358</code>
	</div>
	<div>
		<span title="circle-exclamation" aria-label="circle-exclamation">&#xf06a;</span>
		<code>f06a</code>
	</div>
	<div>
		<span title="circle-half-stroke" aria-label="circle-half-stroke">&#xf042;</span>
		<code>f042</code>
	</div>
	<div>
		<span title="circle-info" aria-label="circle-info">&#xf05a;</span>
		<code>f05a</code>
	</div>
	<div>
		<span title="circle-left" aria-label="circle-left">&#xf359;</span>
		<code>f359</code>
	</div>
	<div>
		<span title="circle-minus" aria-label="circle-minus">&#xf056;</span>
		<code>f056</code>
	</div>
	<div>
		<span title="circle-nodes" aria-label="circle-nodes">&#xe4e2;</span>
		<code>e4e2</code>
	</div>
	<div>
		<span title="circle-pause" aria-label="circle-pause">&#xf28b;</span>
		<code>f28b</code>
	</div>
	<div>
		<span title="circle-play" aria-label="circle-play">&#xf144;</span>
		<code>f144</code>
	</div>
	<div>
		<span title="circle-plus" aria-label="circle-plus">&#xf055;</span>
		<code>f055</code>
	</div>
	<div>
		<span title="circle-question" aria-label="circle-question">&#xf059;</span>
		<code>f059</code>
	</div>
	<div>
		<span title="circle-right" aria-label="circle-right">&#xf35a;</span>
		<code>f35a</code>
	</div>
	<div>
		<span title="circle-stop" aria-label="circle-stop">&#xf28d;</span>
		<code>f28d</code>
	</div>
	<div>
		<span title="circle-up" aria-label="circle-up">&#xf35b;</span>
		<code>f35b</code>
	</div>
	<div>
		<span title="circle-xmark" aria-label="circle-xmark">&#xf057;</span>
		<code>f057</code>
	</div>
	<div>
		<span title="clock" aria-label="clock">&#xf017;</span>
		<code>f017</code>
	</div>
	<div>
		<span title="clock-rotate-left" aria-label="clock-rotate-left">&#xf1da;</span>
		<code>f1da</code>
	</div>
	<div>
		<span title="clone" aria-label="clone">&#xf24d;</span>
		<code>f24d</code>
	</div>
	<div>
		<span title="closed-captioning" aria-label="closed-captioning">&#xf20a;</span>
		<code>f20a</code>
	</div>
	<div>
		<span title="cloud" aria-label="cloud">&#xf0c2;</span>
		<code>f0c2</code>
	</div>
	<div>
		<span title="cloud-arrow-down" aria-label="cloud-arrow-down">&#xf0ed;</span>
		<code>f0ed</code>
	</div>
	<div>
		<span title="cloud-arrow-up" aria-label="cloud-arrow-up">&#xf0ee;</span>
		<code>f0ee</code>
	</div>
	<div>
		<span title="code" aria-label="code">&#xf121;</span>
		<code>f121</code>
	</div>
	<div>
		<span title="comment" aria-label="comment">&#xf075;</span>
		<code>f075</code>
	</div>
	<div>
		<span title="comment-dots" aria-label="comment-dots">&#xf4ad;</span>
		<code>f4ad</code>
	</div>
	<div>
		<span title="comment-slash" aria-label="comment-slash">&#xf4b3;</span>
		<code>f4b3</code>
	</div>
	<div>
		<span title="comments" aria-label="comments">&#xf086;</span>
		<code>f086</code>
	</div>
	<div>
		<span title="compact-disc" aria-label="compact-disc">&#xf51f;</span>
		<code>f51f</code>
	</div>
	<div>
		<span title="compress" aria-label="compress">&#xf066;</span>
		<code>f066</code>
	</div>
	<div>
		<span title="copy" aria-label="copy">&#xf0c5;</span>
		<code>f0c5</code>
	</div>
	<div>
		<span title="crop" aria-label="crop">&#xf125;</span>
		<code>f125</code>
	</div>
	<div>
		<span title="crop-simple" aria-label="crop-simple">&#xf565;</span>
		<code>f565</code>
	</div>
	<div>
		<span title="database" aria-label="database">&#xf1c0;</span>
		<code>f1c0</code>
	</div>
	<div>
		<span title="delete-left" aria-label="delete-left">&#xf55a;</span>
		<code>f55a</code>
	</div>
	<div>
		<span title="dice" aria-label="dice">&#xf522;</span>
		<code>f522</code>
	</div>
	<div>
		<span title="dice-d20" aria-label="dice-d20">&#xf6cf;</span>
		<code>f6cf</code>
	</div>
	<div>
		<span title="dice-d6" aria-label="dice-d6">&#xf6d1;</span>
		<code>f6d1</code>
	</div>
	<div>
		<span title="divide" aria-label="divide">&#xf529;</span>
		<code>f529</code>
	</div>
	<div>
		<span title="down-left-and-up-right-to-center" aria-label="down-left-and-up-right-to-center">&#xf422;</span>
		<code>f422</code>
	</div>
	<div>
		<span title="down-long" aria-label="down-long">&#xf309;</span>
		<code>f309</code>
	</div>
	<div>
		<span title="download" aria-label="download">&#xf019;</span>
		<code>f019</code>
	</div>
	<div>
		<span title="ear-deaf" aria-label="ear-deaf">&#xf2a4;</span>
		<code>f2a4</code>
	</div>
	<div>
		<span title="ear-listen" aria-label="ear-listen">&#xf2a2;</span>
		<code>f2a2</code>
	</div>
	<div>
		<span title="eject" aria-label="eject">&#xf052;</span>
		<code>f052</code>
	</div>
	<div>
		<span title="ellipsis" aria-label="ellipsis">&#xf141;</span>
		<code>f141</code>
	</div>
	<div>
		<span title="ellipsis-vertical" aria-label="ellipsis-vertical">&#xf142;</span>
		<code>f142</code>
	</div>
	<div>
		<span title="equals" aria-label="equals">&#x003d;</span>
		<code>003d</code>
	</div>
	<div>
		<span title="exclamation" aria-label="exclamation">&#x0021;</span>
		<code>0021</code>
	</div>
	<div>
		<span title="expand" aria-label="expand">&#xf065;</span>
		<code>f065</code>
	</div>
	<div>
		<span title="eye" aria-label="eye">&#xf06e;</span>
		<code>f06e</code>
	</div>
	<div>
		<span title="eye-dropper" aria-label="eye-dropper">&#xf1fb;</span>
		<code>f1fb</code>
	</div>
	<div>
		<span title="eye-low-vision" aria-label="eye-low-vision">&#xf2a8;</span>
		<code>f2a8</code>
	</div>
	<div>
		<span title="eye-slash" aria-label="eye-slash">&#xf070;</span>
		<code>f070</code>
	</div>
	<div>
		<span title="file" aria-label="file">&#xf15b;</span>
		<code>f15b</code>
	</div>
	<div>
		<span title="file-arrow-down" aria-label="file-arrow-down">&#xf56d;</span>
		<code>f56d</code>
	</div>
	<div>
		<span title="file-arrow-up" aria-label="file-arrow-up">&#xf574;</span>
		<code>f574</code>
	</div>
	<div>
		<span title="file-audio" aria-label="file-audio">&#xf1c7;</span>
		<code>f1c7</code>
	</div>
	<div>
		<span title="file-circle-check" aria-label="file-circle-check">&#xe5a0;</span>
		<code>e5a0</code>
	</div>
	<div>
		<span title="file-circle-exclamation" aria-label="file-circle-exclamation">&#xe4eb;</span>
		<code>e4eb</code>
	</div>
	<div>
		<span title="file-circle-minus" aria-label="file-circle-minus">&#xe4ed;</span>
		<code>e4ed</code>
	</div>
	<div>
		<span title="file-circle-plus" aria-label="file-circle-plus">&#xe494;</span>
		<code>e494</code>
	</div>
	<div>
		<span title="file-circle-question" aria-label="file-circle-question">&#xe4ef;</span>
		<code>e4ef</code>
	</div>
	<div>
		<span title="file-circle-xmark" aria-label="file-circle-xmark">&#xe5a1;</span>
		<code>e5a1</code>
	</div>
	<div>
		<span title="file-code" aria-label="file-code">&#xf1c9;</span>
		<code>f1c9</code>
	</div>
	<div>
		<span title="file-export" aria-label="file-export">&#xf56e;</span>
		<code>f56e</code>
	</div>
	<div>
		<span title="file-image" aria-label="file-image">&#xf1c5;</span>
		<code>f1c5</code>
	</div>
	<div>
		<span title="file-import" aria-label="file-import">&#xf56f;</span>
		<code>f56f</code>
	</div>
	<div>
		<span title="file-lines" aria-label="file-lines">&#xf15c;</span>
		<code>f15c</code>
	</div>
	<div>
		<span title="file-pdf" aria-label="file-pdf">&#xf1c1;</span>
		<code>f1c1</code>
	</div>
	<div>
		<span title="file-pen" aria-label="file-pen">&#xf31c;</span>
		<code>f31c</code>
	</div>
	<div>
		<span title="file-video" aria-label="file-video">&#xf1c8;</span>
		<code>f1c8</code>
	</div>
	<div>
		<span title="file-waveform" aria-label="file-waveform">&#xf478;</span>
		<code>f478</code>
	</div>
	<div>
		<span title="file-zipper" aria-label="file-zipper">&#xf1c6;</span>
		<code>f1c6</code>
	</div>
	<div>
		<span title="floppy-disk" aria-label="floppy-disk">&#xf0c7;</span>
		<code>f0c7</code>
	</div>
	<div>
		<span title="folder" aria-label="folder">&#xf07b;</span>
		<code>f07b</code>
	</div>
	<div>
		<span title="folder-closed" aria-label="folder-closed">&#xe185;</span>
		<code>e185</code>
	</div>
	<div>
		<span title="folder-minus" aria-label="folder-minus">&#xf65d;</span>
		<code>f65d</code>
	</div>
	<div>
		<span title="folder-open" aria-label="folder-open">&#xf07c;</span>
		<code>f07c</code>
	</div>
	<div>
		<span title="folder-plus" aria-label="folder-plus">&#xf65e;</span>
		<code>f65e</code>
	</div>
	<div>
		<span title="folder-tree" aria-label="folder-tree">&#xf802;</span>
		<code>f802</code>
	</div>
	<div>
		<span title="font" aria-label="font">&#xf031;</span>
		<code>f031</code>
	</div>
	<div>
		<span title="forward" aria-label="forward">&#xf04e;</span>
		<code>f04e</code>
	</div>
	<div>
		<span title="forward-fast" aria-label="forward-fast">&#xf050;</span>
		<code>f050</code>
	</div>
	<div>
		<span title="forward-step" aria-label="forward-step">&#xf051;</span>
		<code>f051</code>
	</div>
	<div>
		<span title="gear" aria-label="gear">&#xf013;</span>
		<code>f013</code>
	</div>
	<div>
		<span title="gears" aria-label="gears">&#xf085;</span>
		<code>f085</code>
	</div>
	<div>
		<span title="greater-than" aria-label="greater-than">&#x003e;</span>
		<code>003e</code>
	</div>
	<div>
		<span title="greater-than-equal" aria-label="greater-than-equal">&#xf532;</span>
		<code>f532</code>
	</div>
	<div>
		<span title="grip-lines" aria-label="grip-lines">&#xf7a4;</span>
		<code>f7a4</code>
	</div>
	<div>
		<span title="grip-lines-vertical" aria-label="grip-lines-vertical">&#xf7a5;</span>
		<code>f7a5</code>
	</div>
	<div>
		<span title="hard-drive" aria-label="hard-drive">&#xf0a0;</span>
		<code>f0a0</code>
	</div>
	<div>
		<span title="hashtag" aria-label="hashtag">&#x0023;</span>
		<code>0023</code>
	</div>
	<div>
		<span title="heading" aria-label="heading">&#xf1dc;</span>
		<code>f1dc</code>
	</div>
	<div>
		<span title="headphones-simple" aria-label="headphones-simple">&#xf58f;</span>
		<code>f58f</code>
	</div>
	<div>
		<span title="headset" aria-label="headset">&#xf590;</span>
		<code>f590</code>
	</div>
	<div>
		<span title="heart" aria-label="heart">&#xf004;</span>
		<code>f004</code>
	</div>
	<div>
		<span title="heart-crack" aria-label="heart-crack">&#xf7a9;</span>
		<code>f7a9</code>
	</div>
	<div>
		<span title="hourglass" aria-label="hourglass">&#xf254;</span>
		<code>f254</code>
	</div>
	<div>
		<span title="hourglass-end" aria-label="hourglass-end">&#xf253;</span>
		<code>f253</code>
	</div>
	<div>
		<span title="hourglass-half" aria-label="hourglass-half">&#xf252;</span>
		<code>f252</code>
	</div>
	<div>
		<span title="hourglass-start" aria-label="hourglass-start">&#xf251;</span>
		<code>f251</code>
	</div>
	<div>
		<span title="house" aria-label="house">&#xf015;</span>
		<code>f015</code>
	</div>
	<div>
		<span title="house-chimney" aria-label="house-chimney">&#xe3af;</span>
		<code>e3af</code>
	</div>
	<div>
		<span title="i-cursor" aria-label="i-cursor">&#xf246;</span>
		<code>f246</code>
	</div>
	<div>
		<span title="id-badge" aria-label="id-badge">&#xf2c1;</span>
		<code>f2c1</code>
	</div>
	<div>
		<span title="id-card" aria-label="id-card">&#xf2c2;</span>
		<code>f2c2</code>
	</div>
	<div>
		<span title="image" aria-label="image">&#xf03e;</span>
		<code>f03e</code>
	</div>
	<div>
		<span title="image-portrait" aria-label="image-portrait">&#xf3e0;</span>
		<code>f3e0</code>
	</div>
	<div>
		<span title="indent" aria-label="indent">&#xf03c;</span>
		<code>f03c</code>
	</div>
	<div>
		<span title="infinity" aria-label="infinity">&#xf534;</span>
		<code>f534</code>
	</div>
	<div>
		<span title="info" aria-label="info">&#xf129;</span>
		<code>f129</code>
	</div>
	<div>
		<span title="italic" aria-label="italic">&#xf033;</span>
		<code>f033</code>
	</div>
	<div>
		<span title="language" aria-label="language">&#xf1ab;</span>
		<code>f1ab</code>
	</div>
	<div>
		<span title="layer-group" aria-label="layer-group">&#xf5fd;</span>
		<code>f5fd</code>
	</div>
	<div>
		<span title="left-long" aria-label="left-long">&#xf30a;</span>
		<code>f30a</code>
	</div>
	<div>
		<span title="left-right" aria-label="left-right">&#xf337;</span>
		<code>f337</code>
	</div>
	<div>
		<span title="less-than" aria-label="less-than">&#x003c;</span>
		<code>003c</code>
	</div>
	<div>
		<span title="less-than-equal" aria-label="less-than-equal">&#xf537;</span>
		<code>f537</code>
	</div>
	<div>
		<span title="lightbulb" aria-label="lightbulb">&#xf0eb;</span>
		<code>f0eb</code>
	</div>
	<div>
		<span title="link" aria-label="link">&#xf0c1;</span>
		<code>f0c1</code>
	</div>
	<div>
		<span title="link-slash" aria-label="link-slash">&#xf127;</span>
		<code>f127</code>
	</div>
	<div>
		<span title="list" aria-label="list">&#xf03a;</span>
		<code>f03a</code>
	</div>
	<div>
		<span title="list-check" aria-label="list-check">&#xf0ae;</span>
		<code>f0ae</code>
	</div>
	<div>
		<span title="list-ol" aria-label="list-ol">&#xf0cb;</span>
		<code>f0cb</code>
	</div>
	<div>
		<span title="list-ul" aria-label="list-ul">&#xf0ca;</span>
		<code>f0ca</code>
	</div>
	<div>
		<span title="lock" aria-label="lock">&#xf023;</span>
		<code>f023</code>
	</div>
	<div>
		<span title="lock-open" aria-label="lock-open">&#xf3c1;</span>
		<code>f3c1</code>
	</div>
	<div>
		<span title="magnet" aria-label="magnet">&#xf076;</span>
		<code>f076</code>
	</div>
	<div>
		<span title="magnifying-glass" aria-label="magnifying-glass">&#xf002;</span>
		<code>f002</code>
	</div>
	<div>
		<span title="magnifying-glass-location" aria-label="magnifying-glass-location">&#xf689;</span>
		<code>f689</code>
	</div>
	<div>
		<span title="magnifying-glass-minus" aria-label="magnifying-glass-minus">&#xf010;</span>
		<code>f010</code>
	</div>
	<div>
		<span title="magnifying-glass-plus" aria-label="magnifying-glass-plus">&#xf00e;</span>
		<code>f00e</code>
	</div>
	<div>
		<span title="maximize" aria-label="maximize">&#xf31e;</span>
		<code>f31e</code>
	</div>
	<div>
		<span title="message" aria-label="message">&#xf27a;</span>
		<code>f27a</code>
	</div>
	<div>
		<span title="microchip" aria-label="microchip">&#xf2db;</span>
		<code>f2db</code>
	</div>
	<div>
		<span title="microphone" aria-label="microphone">&#xf130;</span>
		<code>f130</code>
	</div>
	<div>
		<span title="microphone-lines" aria-label="microphone-lines">&#xf3c9;</span>
		<code>f3c9</code>
	</div>
	<div>
		<span title="microphone-lines-slash" aria-label="microphone-lines-slash">&#xf539;</span>
		<code>f539</code>
	</div>
	<div>
		<span title="microphone-slash" aria-label="microphone-slash">&#xf131;</span>
		<code>f131</code>
	</div>
	<div>
		<span title="minimize" aria-label="minimize">&#xf78c;</span>
		<code>f78c</code>
	</div>
	<div>
		<span title="minus" aria-label="minus">&#xf068;</span>
		<code>f068</code>
	</div>
	<div>
		<span title="moon" aria-label="moon">&#xf186;</span>
		<code>f186</code>
	</div>
	<div>
		<span title="music" aria-label="music">&#xf001;</span>
		<code>f001</code>
	</div>
	<div>
		<span title="not-equal" aria-label="not-equal">&#xf53e;</span>
		<code>f53e</code>
	</div>
	<div>
		<span title="notdef" aria-label="notdef">&#xe1fe;</span>
		<code>e1fe</code>
	</div>
	<div>
		<span title="note-sticky" aria-label="note-sticky">&#xf249;</span>
		<code>f249</code>
	</div>
	<div>
		<span title="outdent" aria-label="outdent">&#xf03b;</span>
		<code>f03b</code>
	</div>
	<div>
		<span title="paintbrush" aria-label="paintbrush">&#xf1fc;</span>
		<code>f1fc</code>
	</div>
	<div>
		<span title="palette" aria-label="palette">&#xf53f;</span>
		<code>f53f</code>
	</div>
	<div>
		<span title="paragraph" aria-label="paragraph">&#xf1dd;</span>
		<code>f1dd</code>
	</div>
	<div>
		<span title="paste" aria-label="paste">&#xf0ea;</span>
		<code>f0ea</code>
	</div>
	<div>
		<span title="pause" aria-label="pause">&#xf04c;</span>
		<code>f04c</code>
	</div>
	<div>
		<span title="pen" aria-label="pen">&#xf304;</span>
		<code>f304</code>
	</div>
	<div>
		<span title="pencil" aria-label="pencil">&#xf303;</span>
		<code>f303</code>
	</div>
	<div>
		<span title="percent" aria-label="percent">&#x0025;</span>
		<code>0025</code>
	</div>
	<div>
		<span title="play" aria-label="play">&#xf04b;</span>
		<code>f04b</code>
	</div>
	<div>
		<span title="plus" aria-label="plus">&#x002b;</span>
		<code>002b</code>
	</div>
	<div>
		<span title="plus-minus" aria-label="plus-minus">&#xe43c;</span>
		<code>e43c</code>
	</div>
	<div>
		<span title="power-off" aria-label="power-off">&#xf011;</span>
		<code>f011</code>
	</div>
	<div>
		<span title="question" aria-label="question">&#x003f;</span>
		<code>003f</code>
	</div>
	<div>
		<span title="quote-left" aria-label="quote-left">&#xf10d;</span>
		<code>f10d</code>
	</div>
	<div>
		<span title="quote-right" aria-label="quote-right">&#xf10e;</span>
		<code>f10e</code>
	</div>
	<div>
		<span title="rectangle-xmark" aria-label="rectangle-xmark">&#xf410;</span>
		<code>f410</code>
	</div>
	<div>
		<span title="repeat" aria-label="repeat">&#xf363;</span>
		<code>f363</code>
	</div>
	<div>
		<span title="reply" aria-label="reply">&#xf3e5;</span>
		<code>f3e5</code>
	</div>
	<div>
		<span title="reply-all" aria-label="reply-all">&#xf122;</span>
		<code>f122</code>
	</div>
	<div>
		<span title="retweet" aria-label="retweet">&#xf079;</span>
		<code>f079</code>
	</div>
	<div>
		<span title="right-from-bracket" aria-label="right-from-bracket">&#xf2f5;</span>
		<code>f2f5</code>
	</div>
	<div>
		<span title="right-left" aria-label="right-left">&#xf362;</span>
		<code>f362</code>
	</div>
	<div>
		<span title="right-long" aria-label="right-long">&#xf30b;</span>
		<code>f30b</code>
	</div>
	<div>
		<span title="right-to-bracket" aria-label="right-to-bracket">&#xf2f6;</span>
		<code>f2f6</code>
	</div>
	<div>
		<span title="rocket" aria-label="rocket">&#xf135;</span>
		<code>f135</code>
	</div>
	<div>
		<span title="rotate" aria-label="rotate">&#xf2f1;</span>
		<code>f2f1</code>
	</div>
	<div>
		<span title="rotate-left" aria-label="rotate-left">&#xf2ea;</span>
		<code>f2ea</code>
	</div>
	<div>
		<span title="rotate-right" aria-label="rotate-right">&#xf2f9;</span>
		<code>f2f9</code>
	</div>
	<div>
		<span title="rss" aria-label="rss">&#xf09e;</span>
		<code>f09e</code>
	</div>
	<div>
		<span title="scissors" aria-label="scissors">&#xf0c4;</span>
		<code>f0c4</code>
	</div>
	<div>
		<span title="screwdriver" aria-label="screwdriver">&#xf54a;</span>
		<code>f54a</code>
	</div>
	<div>
		<span title="screwdriver-wrench" aria-label="screwdriver-wrench">&#xf7d9;</span>
		<code>f7d9</code>
	</div>
	<div>
		<span title="section" aria-label="section">&#xe447;</span>
		<code>e447</code>
	</div>
	<div>
		<span title="share" aria-label="share">&#xf064;</span>
		<code>f064</code>
	</div>
	<div>
		<span title="share-from-square" aria-label="share-from-square">&#xf14d;</span>
		<code>f14d</code>
	</div>
	<div>
		<span title="share-nodes" aria-label="share-nodes">&#xf1e0;</span>
		<code>f1e0</code>
	</div>
	<div>
		<span title="shuffle" aria-label="shuffle">&#xf074;</span>
		<code>f074</code>
	</div>
	<div>
		<span title="slash" aria-label="slash">&#xf715;</span>
		<code>f715</code>
	</div>
	<div>
		<span title="sliders" aria-label="sliders">&#xf1de;</span>
		<code>f1de</code>
	</div>
	<div>
		<span title="sort" aria-label="sort">&#xf0dc;</span>
		<code>f0dc</code>
	</div>
	<div>
		<span title="sort-down" aria-label="sort-down">&#xf0dd;</span>
		<code>f0dd</code>
	</div>
	<div>
		<span title="sort-up" aria-label="sort-up">&#xf0de;</span>
		<code>f0de</code>
	</div>
	<div>
		<span title="spell-check" aria-label="spell-check">&#xf891;</span>
		<code>f891</code>
	</div>
	<div>
		<span title="spinner" aria-label="spinner">&#xf110;</span>
		<code>f110</code>
	</div>
	<div>
		<span title="square" aria-label="square">&#xf0c8;</span>
		<code>f0c8</code>
	</div>
	<div>
		<span title="square-arrow-up-right" aria-label="square-arrow-up-right">&#xf14c;</span>
		<code>f14c</code>
	</div>
	<div>
		<span title="square-binary" aria-label="square-binary">&#xe69b;</span>
		<code>e69b</code>
	</div>
	<div>
		<span title="square-caret-down" aria-label="square-caret-down">&#xf150;</span>
		<code>f150</code>
	</div>
	<div>
		<span title="square-caret-left" aria-label="square-caret-left">&#xf191;</span>
		<code>f191</code>
	</div>
	<div>
		<span title="square-caret-right" aria-label="square-caret-right">&#xf152;</span>
		<code>f152</code>
	</div>
	<div>
		<span title="square-caret-up" aria-label="square-caret-up">&#xf151;</span>
		<code>f151</code>
	</div>
	<div>
		<span title="square-check" aria-label="square-check">&#xf14a;</span>
		<code>f14a</code>
	</div>
	<div>
		<span title="square-minus" aria-label="square-minus">&#xf146;</span>
		<code>f146</code>
	</div>
	<div>
		<span title="square-pen" aria-label="square-pen">&#xf14b;</span>
		<code>f14b</code>
	</div>
	<div>
		<span title="square-plus" aria-label="square-plus">&#xf0fe;</span>
		<code>f0fe</code>
	</div>
	<div>
		<span title="square-rss" aria-label="square-rss">&#xf143;</span>
		<code>f143</code>
	</div>
	<div>
		<span title="square-share-nodes" aria-label="square-share-nodes">&#xf1e1;</span>
		<code>f1e1</code>
	</div>
	<div>
		<span title="square-up-right" aria-label="square-up-right">&#xf360;</span>
		<code>f360</code>
	</div>
	<div>
		<span title="square-xmark" aria-label="square-xmark">&#xf2d3;</span>
		<code>f2d3</code>
	</div>
	<div>
		<span title="star" aria-label="star">&#xf005;</span>
		<code>f005</code>
	</div>
	<div>
		<span title="star-half" aria-label="star-half">&#xf089;</span>
		<code>f089</code>
	</div>
	<div>
		<span title="star-half-stroke" aria-label="star-half-stroke">&#xf5c0;</span>
		<code>f5c0</code>
	</div>
	<div>
		<span title="stop" aria-label="stop">&#xf04d;</span>
		<code>f04d</code>
	</div>
	<div>
		<span title="strikethrough" aria-label="strikethrough">&#xf0cc;</span>
		<code>f0cc</code>
	</div>
	<div>
		<span title="subscript" aria-label="subscript">&#xf12c;</span>
		<code>f12c</code>
	</div>
	<div>
		<span title="sun" aria-label="sun">&#xf185;</span>
		<code>f185</code>
	</div>
	<div>
		<span title="superscript" aria-label="superscript">&#xf12b;</span>
		<code>f12b</code>
	</div>
	<div>
		<span title="tag" aria-label="tag">&#xf02b;</span>
		<code>f02b</code>
	</div>
	<div>
		<span title="tags" aria-label="tags">&#xf02c;</span>
		<code>f02c</code>
	</div>
	<div>
		<span title="terminal" aria-label="terminal">&#xf120;</span>
		<code>f120</code>
	</div>
	<div>
		<span title="text-height" aria-label="text-height">&#xf034;</span>
		<code>f034</code>
	</div>
	<div>
		<span title="text-slash" aria-label="text-slash">&#xf87d;</span>
		<code>f87d</code>
	</div>
	<div>
		<span title="text-width" aria-label="text-width">&#xf035;</span>
		<code>f035</code>
	</div>
	<div>
		<span title="thumbs-down" aria-label="thumbs-down">&#xf165;</span>
		<code>f165</code>
	</div>
	<div>
		<span title="thumbs-up" aria-label="thumbs-up">&#xf164;</span>
		<code>f164</code>
	</div>
	<div>
		<span title="thumbtack" aria-label="thumbtack">&#xf08d;</span>
		<code>f08d</code>
	</div>
	<div>
		<span title="thumbtack-slash" aria-label="thumbtack-slash">&#xe68f;</span>
		<code>e68f</code>
	</div>
	<div>
		<span title="toggle-off" aria-label="toggle-off">&#xf204;</span>
		<code>f204</code>
	</div>
	<div>
		<span title="toggle-on" aria-label="toggle-on">&#xf205;</span>
		<code>f205</code>
	</div>
	<div>
		<span title="trash" aria-label="trash">&#xf1f8;</span>
		<code>f1f8</code>
	</div>
	<div>
		<span title="trash-arrow-up" aria-label="trash-arrow-up">&#xf829;</span>
		<code>f829</code>
	</div>
	<div>
		<span title="trash-can" aria-label="trash-can">&#xf2ed;</span>
		<code>f2ed</code>
	</div>
	<div>
		<span title="trash-can-arrow-up" aria-label="trash-can-arrow-up">&#xf82a;</span>
		<code>f82a</code>
	</div>
	<div>
		<span title="triangle-exclamation" aria-label="triangle-exclamation">&#xf071;</span>
		<code>f071</code>
	</div>
	<div>
		<span title="turn-down" aria-label="turn-down">&#xf3be;</span>
		<code>f3be</code>
	</div>
	<div>
		<span title="turn-up" aria-label="turn-up">&#xf3bf;</span>
		<code>f3bf</code>
	</div>
	<div>
		<span title="underline" aria-label="underline">&#xf0cd;</span>
		<code>f0cd</code>
	</div>
	<div>
		<span title="unlock" aria-label="unlock">&#xf09c;</span>
		<code>f09c</code>
	</div>
	<div>
		<span title="unlock-keyhole" aria-label="unlock-keyhole">&#xf13e;</span>
		<code>f13e</code>
	</div>
	<div>
		<span title="up-down" aria-label="up-down">&#xf338;</span>
		<code>f338</code>
	</div>
	<div>
		<span title="up-down-left-right" aria-label="up-down-left-right">&#xf0b2;</span>
		<code>f0b2</code>
	</div>
	<div>
		<span title="up-long" aria-label="up-long">&#xf30c;</span>
		<code>f30c</code>
	</div>
	<div>
		<span title="up-right-and-down-left-from-center" aria-label="up-right-and-down-left-from-center">&#xf424;</span>
		<code>f424</code>
	</div>
	<div>
		<span title="up-right-from-square" aria-label="up-right-from-square">&#xf35d;</span>
		<code>f35d</code>
	</div>
	<div>
		<span title="upload" aria-label="upload">&#xf093;</span>
		<code>f093</code>
	</div>
	<div>
		<span title="user" aria-label="user">&#xf007;</span>
		<code>f007</code>
	</div>
	<div>
		<span title="user-check" aria-label="user-check">&#xf4fc;</span>
		<code>f4fc</code>
	</div>
	<div>
		<span title="user-gear" aria-label="user-gear">&#xf4fe;</span>
		<code>f4fe</code>
	</div>
	<div>
		<span title="user-group" aria-label="user-group">&#xf500;</span>
		<code>f500</code>
	</div>
	<div>
		<span title="user-lock" aria-label="user-lock">&#xf502;</span>
		<code>f502</code>
	</div>
	<div>
		<span title="user-minus" aria-label="user-minus">&#xf503;</span>
		<code>f503</code>
	</div>
	<div>
		<span title="user-pen" aria-label="user-pen">&#xf4ff;</span>
		<code>f4ff</code>
	</div>
	<div>
		<span title="user-plus" aria-label="user-plus">&#xf234;</span>
		<code>f234</code>
	</div>
	<div>
		<span title="user-slash" aria-label="user-slash">&#xf506;</span>
		<code>f506</code>
	</div>
	<div>
		<span title="user-tag" aria-label="user-tag">&#xf507;</span>
		<code>f507</code>
	</div>
	<div>
		<span title="user-xmark" aria-label="user-xmark">&#xf235;</span>
		<code>f235</code>
	</div>
	<div>
		<span title="video" aria-label="video">&#xf03d;</span>
		<code>f03d</code>
	</div>
	<div>
		<span title="video-slash" aria-label="video-slash">&#xf4e2;</span>
		<code>f4e2</code>
	</div>
	<div>
		<span title="volume-high" aria-label="volume-high">&#xf028;</span>
		<code>f028</code>
	</div>
	<div>
		<span title="volume-low" aria-label="volume-low">&#xf027;</span>
		<code>f027</code>
	</div>
	<div>
		<span title="volume-off" aria-label="volume-off">&#xf026;</span>
		<code>f026</code>
	</div>
	<div>
		<span title="volume-xmark" aria-label="volume-xmark">&#xf6a9;</span>
		<code>f6a9</code>
	</div>
	<div>
		<span title="wand-magic" aria-label="wand-magic">&#xf0d0;</span>
		<code>f0d0</code>
	</div>
	<div>
		<span title="wand-magic-sparkles" aria-label="wand-magic-sparkles">&#xe2ca;</span>
		<code>e2ca</code>
	</div>
	<div>
		<span title="window-maximize" aria-label="window-maximize">&#xf2d0;</span>
		<code>f2d0</code>
	</div>
	<div>
		<span title="window-minimize" aria-label="window-minimize">&#xf2d1;</span>
		<code>f2d1</code>
	</div>
	<div>
		<span title="window-restore" aria-label="window-restore">&#xf2d2;</span>
		<code>f2d2</code>
	</div>
	<div>
		<span title="wrench" aria-label="wrench">&#xf0ad;</span>
		<code>f0ad</code>
	</div>
	<div>
		<span title="xmark" aria-label="xmark">&#xf00d;</span>
		<code>f00d</code>
	</div>
</div>
