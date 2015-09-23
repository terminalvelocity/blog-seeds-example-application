Sails Generator for a Seeds.js API Server.
=====

[![Join the chat at https://gitter.im/terminalvelocity/seeds.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/terminalvelocity/seeds.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Stories in Ready](https://badge.waffle.io/terminalvelocity/seeds.js.png?label=ready&title=Ready)](https://waffle.io/terminalvelocity/seeds.js) ![Downloads on NPM](http://img.shields.io/npm/dm/sails-generate-seeds-backend.svg?style=flat-square)

Seeds is an acronym that stands for **S**ails **E**mber **E**mber-**D**ata **S**emantic-UI. It is designed for Rapid Application Prototyping.

```
                                                         .
                                              .         ;
                 .              .              ;%     ;;
                   ,           ,                :;%  %;
                    :         ;                   :;%;'     .,
           ,.        %;     %;            ;        %;'    ,;
             ;       ;%;  %%;        ,     %;    ;%;    ,%'
              %;       %;%;      ,  ;       %;  ;%;   ,%;'
               ;%;      %;        ;%;        % ;%;  ,%;'
                `%;.     ;%;     %;'         `;%%;.%;'
                 `:;%.    ;%%. %@;        %; ;@%;%'
                    `:%;.  :;bd%;          %;@%;'
                      `@%:.  :;%.         ;@@%;'
                        `@%.  `;@%.      ;@@%;
                          `@%%. `@%%    ;@@%;
                            ;@%. :@%%  %@@%;
                              %@bd%%%bd%%:;
                                #@%%%%%:;;
                                %@@%%%::;
                                %@@@%(o);  . '
                                %@@@o%;:(.,'
                            `.. %@@@o%::;
                               `)@@@o%::;
                                %@@(o)::;
                               .%@@@@%::;
                               ;%@@@@%::;.
                              ;%@@@@%%:;;;.
                          ...;%@@@@@%%:;;;;,..
                    Plant some seeds, watch em grow
                        You reap what you sow
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**sails-generate-seeds-backend**

- [Installation](#installation)
- [Usage](#usage)
  - [With Seeds.js](#with-seedsjs)
  - [[Stand-Alone] Generates a new Sails app, ready to work with Seeds.js](#stand-alone-generates-a-new-sails-app-ready-to-work-with-seedsjs)
  - [Install Dependencies](#install-dependencies)
  - [Start the server](#start-the-server)
  - [Visit the server](#visit-the-server)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
`npm install -g sails-generate-seeds-backend`

## Usage

### With Seeds.js

This is used automatically by the `seeds new <app-name>` command. You won't have to use this module directly.

### [Stand-Alone] Generates a new Sails app, ready to work with Seeds.js
```
$ sails generate seeds-backend
```

### Install Dependencies
```
$ npm install
```

### Start the server
```
$ sails lift
```

### Visit the server
```
http://localhost:1776/
```

You should see `Your Seeds have Sails!`

![](screenshot.png)
