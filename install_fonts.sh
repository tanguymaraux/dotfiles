#!/bin/bash

# Dirs
DIR=`pwd`
FDIR="$HOME/.local/share/fonts"

# Install Fonts
install_fonts() {
    echo -e "\nInstalling fonts..."
    [[ ! -d "$FDIR" ]] && mkdir -p "$FDIR"
    cp -rf $DIR/fonts/* "$FDIR"
}

install_fonts
