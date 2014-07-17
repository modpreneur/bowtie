# BOWTIE

Simple and elegant CSS framework to make you life easier!

## Compile

In order to compile the framework, install node dependencies by `npm install` and then after every change in LESS files, recompile the final CSS via this command: `lessc src/less/core.less src/css/style.css`. Enjoy :-)

## Modules - Widgets

The entire CSS framework consists of individual modules - widgets. You can compile and use only some of them, take your pick :-)

- `grid` - Grid system to make your position blast
- `spacing` - Margin and padding classes to take your distance
- `variables` - Overrides and custom variables for the framework
- `variables-default` - All the default variables for the framework
- `alerts` - All the alert messages you ever wanted

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
