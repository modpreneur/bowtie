# BOWTIE

Simple and elegant CSS framework to make you life easier! Whole framework is build to fit modern flat design.

## Compile

In order to compile the framework, install node dependencies by `npm install` and then after every change in LESS files, recompile the final CSS via this command: `lessc src/less/core.less src/css/style.css`. Enjoy :-)

## Modules - Widgets

The entire CSS framework consists of individual modules - widgets. You can compile and use only some of them, take your pick :-)

- `grid` - Grid system to make your position blast
- `spacing` - Margin and padding classes to take your distance
- `variables` - Overrides and custom variables for the framework
- `variables-default` - All the default variables for the framework
- `alerts` - All the alert messages you ever wanted
- `buttons` - Nice and clean buttons

### Grid

### Spacing

Spacing allows you to set classes for margins and paddings.

#### Variables

Variables used in this module are:
- `@space-big` - Big space in the design, used to // TODO
- `@space-medium` - Medium space
- `@space-small` - Small space

#### Classes

All the classes have this pattern: `<type>-<size>-<position>` where type is `padding/margin`, size is `big/medium/small/none`, position is `top/right/bottom/left/vertical/horizontal/all`.

### Variables

### Variables Default

### Alerts

### Buttons

Module built for buttons.

#### Variables

Variables used in this module are:
- `@space-small` - Small space used in padding of the buttons
- `@color-primary` - Primary color
- `@color-primary-hover` - Primary hover color
- `@color-secondary` - Secondary color
- `@color-secondary-hover` - Secondary hover color
- `@color-tertiary` - Tertiary color
- `@color-tertiary-hover` - Tertiary hover color
- `@color-success` - Success color
- `@color-success-hover` - Success hover color
- `@color-danger` - Danger color
- `@color-danger-hover` - Danger hover color
- `@color-info` - Info color
- `@color-info-hover` - Info hover color
- `@color-warning` - Warning color
- `@color-warning-hover` - Warning hover color
- `@color-dark-grey` - Grey (default) color
- `@color-dark-grey-hover` - Grey (default) hover color

#### Classes

- `button` - Default class for any button
- `button-<SLUG>` - Additional class to the default one, `<SLUG>` is one of these: `success`, `info`, `danger`, `warning`, `primary`, `secondary`, `tertiary`
