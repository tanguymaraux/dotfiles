A dotfiles repository for ubuntu 22.04.

Main part of the dotfiles comes from [k-vernooy dotfiles](https://github.com/k-vernooy/dotfiles)

## Features

- Window Manager : i3wm (4.21 for gaps)
- Compositor: picom
- Status Bar: polybar ([forest theme](https://github.com/adi1090x/polybar-themes) modified)
- Notifications: dunst
- Terminal: kitty
- Shell: zsh 
- Dmenu: Rofi
- Fetch: Neofetch

## Installation

- Install the needed applications:

``bash install_scripts/apt_apps.sh``

Some apps need to be installed manually, read the [documentation](install_scripts/manual_install.txt)

- Create the symlinks for the dotfiles:

``bash create_links.sh``

- Install the fonts needed

``bash install_fonts.sh``

# Submodule dependencies

- [polybar-bluetooth](https://github.com/msaitz/polybar-bluetooth)
- [polybar-spotify](https://github.com/Jvanrhijn/polybar-spotify)

## License

[MIT License](LICENSE)
